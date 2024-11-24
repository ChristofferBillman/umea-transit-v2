import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import reserobotRequest from './reserobotRequest'
import { Stop } from './useStop'
import { lines } from '../data/lines'

export interface Leg {
	origin: {
		name: string,
		id: string,
		time: string,
		date: string
	},
	destination: {
		name: string,
		id: string,
		time: string,
		date: string
	}
	stops: Stop[],
	line: {
		id: string,
		name: string
	},
	type: 'WALK' | 'TRSF' | 'JNY'
	distance: number | undefined
}
export interface Trip {
	legs: Leg[],
	duration: string
}

export default function useTripSearch(
	from: string,
	to: string,
	via?: string,
	time?: string,
	options?: Omit<UseQueryOptions<Trip[] | undefined>, 'queryFn' | 'queryKey'>
) {
	return useQuery({
		...options,
		queryKey: ['searchTrip', from, to],
		queryFn: () => getTrips(from, to, via, time)
	})
}

export async function getTrips(from: string, to: string, via?: string, time?: string,) {
	return mapper(await reserobotRequest(
		'trip',
		{
			originId: from,
			destId: to,
			viaId: via,
			time,
		}
	))
}

function mapper(data): Trip[] {
	if (!Object.hasOwn(data, 'Trip')) return []
	const d = data.Trip.map(trip => {
		return {
			legs: trip.LegList.Leg.map(leg => {
				const line = lines.find(line => Number(leg.Product[0].displayNumber) === line.id)

				return {
					origin: {
						name: leg.Origin.name.substr('Umeå '.length),
						id: leg.Origin.id,
						time: leg.Origin.time.substring(0, leg.Origin.time.length - 3),
						date: leg.Origin.date
					},
					destination: {
						name: leg.Destination.name.substr('Umeå '.length),
						id: leg.Destination.id,
						time: leg.Destination.time.substring(0, leg.Destination.time.length - 3),
						date: leg.Destination.date
					},
					stops: []/*leg.Stops.map(stop => ({
					name: stop.name,
					id: stop.id
				}))*/,
					line: {
						name: line ? line.names[Number(leg.directionFlag) - 1] : leg.Product[0].name,
						id: leg.Product[0].displayNumber
					},
					type: leg.type,
					distance: leg.dist
				}
			}),
			duration: parseDuration(trip.duration)
		}
	})
	return d
}

function parseDuration(duration: string): string {
	const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?/ // Regex to capture hours and minutes, both optional
	const match = duration.match(regex)

	if (!match) {
		return 'Invalid format'
	}

	const hours = match[1]
	const minutes = match[2]

	let result = ''

	if (hours) {
		result += `${hours} h`
	}

	if (minutes) {
		if (result) result += ' '
		result += `${minutes} min`
	}

	return result || 'Invalid format'
}
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { lines } from '../data/lines'
import reserobotRequest from './reserobotRequest'

export interface Departure {
	line: {
		id: number,
		name: string
		nameComesFromAPI: boolean
	},
	time: string
	plannedTime: string,
	howOften: string
}

export default function useDepartures(
	stopId: string,
	time?: string,
	options?: Omit<UseQueryOptions<Departure[]>, 'queryFn' | 'queryKey'>
) {
	return useQuery({
		...options,
		queryKey: [stopId, time],
		queryFn: () => getDepartures(stopId, time)
	})
}

export async function getDepartures(stopId: string, time?: string) {
	let retries = 1
	const MAX_RETRIES = 6
	let json

	try {

		do {
			json = await reserobotRequest(
				'departureBoard',
				{
					id: stopId,
					time,
					duration: 60 * retries
				}
			)

			if (Object.hasOwn(json, 'Departure')) break
			else retries++
		} while (retries < MAX_RETRIES)
	} catch (e) {
		console.log(e)
	}

	const res = mapper(json)
	return res
}

function mapper(data): Departure[] {
	if (!Object.hasOwn(data, 'Departure')) return []
	return data.Departure.map(departure => {
		const id = Number(departure.ProductAtStop.displayNumber)
		const line = lines.find(l => l.id === id)

		return {
			line: {
				id,
				nameComesFromAPI: !line,
				name: line ?
					line.names[Number(departure.directionFlag) - 1] :
					departure.name
			},
			time: departure.rtTime ?
				departure.rtTime :
				departure.time.substring(0, departure.time.length - 3),
			plannedTime: '',
			howOften: ''
		}
	})
}
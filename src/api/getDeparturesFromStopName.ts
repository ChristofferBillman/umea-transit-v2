import MockDepartures from './MockDepartures.json'
import reserobotRequest from './reserobotRequest'
import getDepartures from './getDepartures'

import { lines } from '../data/lines'
import { useQuery } from '@tanstack/react-query'


async function getDeparturesFromStopName(stopName: string, time?: string) {
	return Promise.resolve(mapper(MockDepartures))
}

/*
export default async function getDeparturesFromStopName(stopName: string, time?: string) {
	const stopRes = await getStop(stopName)

	return await getDepartures(
		stopRes.stopLocationOrCoordLocation[0].StopLocation.id,
		time
	)
}*/

export function mapper(data) {
	return data.Departure.map(departure => {
		const id = Number(departure.ProductAtStop.displayNumber)
		let line = lines.find(l => l.id === id)

		if (!line) line = lines.find(l => l.id === -1)

		return {
			line: {
				id,
				name: line!.names[Number(departure.directionFlag) - 1]
			},
			time: departure.rtTime ?
				departure.rtTime :
				departure.time.substring(0, departure.time.length - 3),
			plannedTime: '',
			howOften: ''
		}
	})
}

export default function useDeparturesFromStopName(stopName: string, time?: string) {
	return useQuery({
		queryKey: [],
		queryFn: () => getDeparturesFromStopName(stopName, time)
	})
}


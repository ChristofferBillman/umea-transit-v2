import { useQuery } from '@tanstack/react-query'
import { lines } from '../data/lines'
import reserobotRequest from './reserobotRequest'

async function getDepartures(stopId: string, time?: string) {
	return mapper(await reserobotRequest(
		'departureBoard',
		{
			id: stopId,
			time
		}
	))
}

function mapper(data) {
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

export default function useDepartures(stopId: string, time?: string) {
	return useQuery({
		queryKey: [stopId, time],
		queryFn: () => getDepartures(stopId, time)
	})
}
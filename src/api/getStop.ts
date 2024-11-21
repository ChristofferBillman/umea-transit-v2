import { useQuery } from '@tanstack/react-query'
import reserobotRequest from './reserobotRequest'

async function getStop(stopId: string) {
	return mapper(await reserobotRequest(
		'location.name',
		{
			input: 'Umeå ' + stopId,
			maxNo: 1,
		}
	))
}

function mapper(data) {
	return {
		id: data.stopLocationOrCoordLocation[0].StopLocation.id,
		name: data.stopLocationOrCoordLocation[0].StopLocation.name.substr('Umeå '.length)
	}
}

export default function useStop(stopId: string) {
	return useQuery({
		queryKey: ['stop', stopId],
		queryFn: () => getStop(stopId)
	})
}
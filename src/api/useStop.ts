import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import reserobotRequest from './reserobotRequest'

export interface Stop {
	id: string
	name: string
}

export default function useStop(
	stopId?: string | undefined,
	options?: Omit<UseQueryOptions<Stop>, 'queryFn' | 'queryKey'>
) {
	return useQuery({
		...options,
		queryKey: ['stop', stopId],
		queryFn: () => getStop(stopId),
	})
}

export async function getStop(stopId?: string): Promise<Stop> {
	return mapper(await reserobotRequest(
		'location.name',
		{
			input: 'Umeå ' + stopId,
			maxNo: 1,
		}
	))
}

function mapper(data): Stop {
	return {
		id: data.stopLocationOrCoordLocation[0].StopLocation.id,
		name: data.stopLocationOrCoordLocation[0].StopLocation.name.substr('Umeå '.length)
	}
}

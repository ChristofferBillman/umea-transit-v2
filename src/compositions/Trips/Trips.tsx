import { Button, H1, Icon, Skeleton, Error } from '@components/common'
import StopSearchInput from '@components/StopSearchInput'

import { useStop, useTripSearch } from '@api'

import css from './Trips.module.css'
import TripListItem from '@components/TripListItem'
import { useTripsStore } from './TripsStore'

export function Trips() {

	const tripsStore = useTripsStore()

	const handleSwitch = () => {
		const temp = tripsStore.from

		tripsStore.setFrom(tripsStore.to)
		tripsStore.setTo(temp)

		tripsStore.setFromString(tripsStore.to)
		tripsStore.setToString(temp)
	}

	const fromQuery = useStop(tripsStore.from, { enabled: false })
	const toQuery = useStop(tripsStore.to, { enabled: tripsStore.to !== '' })

	const tripsQuery = useTripSearch(
		fromQuery.data?.id || '',
		toQuery.data?.id || '',
		undefined,
		undefined,
		{
			enabled: !!fromQuery.data?.id && !!toQuery.data?.id && tripsStore.to !== '' && tripsStore.from !== ''
		}
	)

	return (
		<>
			<H1>Hitta resa</H1>
			<StopSearchInput
				placeholder='Från'
				value={tripsStore.fromString}
				onChange={e => tripsStore.setFromString(e.target.value)}
				onSelect={e => tripsStore.setFrom(e.target.value)}
			/>
			<Button
				className={css.switchButton}
				onClick={handleSwitch}
			>
				<Icon name='swap_vert' />
			</Button>
			<StopSearchInput
				placeholder='Till'
				value={tripsStore.toString}
				onChange={e => tripsStore.setToString(e.target.value)}
				onSelect={e => {
					tripsStore.setTo(e.target.value)
					fromQuery.refetch()
				}}
			/>

			<div style={{ display: 'flex', marginTop: '1rem', gap: '1rem' }}>
				<Button>
					<Icon name='schedule' />
					Nu
				</Button>
				<Button>
					<Icon name='filter_list' />
					Filter
				</Button>
			</div>

			<Skeleton
				className={css.tripsContainer}
				loading={tripsQuery.isLoading}
				errored={tripsQuery.isError}
				renderData={() => tripsQuery.data?.map(trip => (
					<TripListItem trip={trip} />
				))}
				renderError={() => <Error />}
			/>
		</>
	)
}

import { useState } from 'react'

import { Button, H1, Icon, Skeleton, Error } from '@components/common'
import StopSearchInput from '@components/StopSearchInput'

import { useStop, useTripSearch } from '@api'

import css from './Directions.module.css'
import TripListItem from '@components/TripListItem'

export function Directions() {

	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')

	const [fromString, setFromString] = useState('')
	const [toString, setToString] = useState('')

	const handleSwitch = () => {
		const temp = from
		setFrom(to)
		setTo(temp)
		setFromString(to)
		setToString(temp)
	}

	const fromQuery = useStop(from, { enabled: false })
	const toQuery = useStop(to)

	const tripsQuery = useTripSearch(
		fromQuery.data?.id || '',
		toQuery.data?.id || '',
		undefined,
		undefined,
		{
			enabled: !!fromQuery.data?.id && !!toQuery.data?.id
		}
	)

	return (
		<>
			<H1>Hitta resa</H1>
			<StopSearchInput
				placeholder='Från'
				value={fromString}
				onChange={e => setFromString(e.target.value)}
				onSelect={e => setFrom(e.target.value)}
			/>
			<Button
				className={css.switchButton}
				onClick={handleSwitch}
			>
				<Icon name='swap_vert' />
			</Button>
			<StopSearchInput
				placeholder='Till'
				value={toString}
				onChange={e => setToString(e.target.value)}
				onSelect={e => {
					setTo(e.target.value)
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

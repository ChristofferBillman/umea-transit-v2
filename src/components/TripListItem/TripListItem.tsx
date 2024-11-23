import { Button, E, Icon, M } from '@components/common'
import LineChip from '@components/LineChip'

import css from './TripListItem.module.css'
import { Trip } from '@api'


interface Props {
	trip?: Trip
}

export function TripListItem({ trip }: Props) {

	if (!trip) {
		return <M>Inga avgångar hittades.</M>
	}

	return (
		<Button className={css.container}>
			<div className={css.inner}>
				<E>
					{trip.legs[0].origin.time}
					<Icon name='arrow_forward' size='1.25rem' />
					{trip.legs[0].origin.time}
				</E>
				<div className={css.lineChips}>
					{trip.legs.map(leg => <LineChip line={Number(leg.line.id)} />)}
				</div>
			</div>

			<E>{trip.duration}</E>
		</Button>
	)
}
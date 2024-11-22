import { Button, E, M } from '@components/common'
import LineChip from '@components/LineChip'

import css from './DepartureBoardItem.module.css'
import { Departure } from 'api/useDepartures'


interface Props {
	departure?: Departure
}

export function DepartureBoardItem({ departure }: Props) {

	if (!departure) {
		return <M>Inga avgångar hittades.</M>
	}

	const now = new Date()
	const nowTime = now.getHours() + ':' + now.getMinutes()
	const diff = getTimeDifference(nowTime, departure.time)

	return (
		<Button className={css.container}>
			<div className={css.inner}>
				<LineChip line={departure.line.id} />
				<div className={css.innerinner}>
					<E>mot {departure.line.name}</E>
					<span style={{ display: 'flex', gap: '0.5rem' }}>
						<E>{departure.time}</E>
						<E>{departure.plannedTime}</E>
						<M>(Om {diff})</M>
					</span>
				</div>
			</div>
			<M>{departure.howOften}</M>
		</Button>
	)
}

function getTimeDifference(startTime: string, endTime: string) {
	// Convert time to minutes
	const [startHours, startMinutes] = startTime.split(':').map(Number)
	const [endHours, endMinutes] = endTime.split(':').map(Number)

	const startInMinutes = startHours * 60 + startMinutes
	const endInMinutes = endHours * 60 + endMinutes

	// Calculate the difference in minutes
	let differenceInMinutes = endInMinutes - startInMinutes

	// Handle if the end time is the next day (e.g., 23:00 to 01:00)
	if (differenceInMinutes < 0) {
		differenceInMinutes += 24 * 60 // Add 24 hours worth of minutes
	}

	if (differenceInMinutes < 60) return differenceInMinutes + 'min'

	const remainingMinutes = differenceInMinutes % 60
	const hours = Math.floor(differenceInMinutes / 24)

	return hours + 'h, ' + remainingMinutes + 'min'
}

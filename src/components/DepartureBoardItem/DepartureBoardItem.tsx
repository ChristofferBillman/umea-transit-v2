import { Button, E } from '@components/common'
import LineChip from '@components/LineChip'

import css from './DepartureBoardItem.module.css'


interface Props {
	departure: {
		line: {
			name: string
			id: number
		}
		time: string
		plannedTime: string
		howOften: string
	}
}

export function DepartureBoardItem({ departure }: Props) {

	const now = new Date()
	const nowTime = now.getHours() + ':' + now.getMinutes()
	const minutes = getTimeDifference(nowTime, departure.time)

	return (
		<Button className={css.container}>
			<div className={css.inner}>
				<LineChip line={departure.line.id} />
				<div className={css.innerinner}>
					<E>mot {departure.line.name}</E>
					<span style={{ display: 'flex', gap: '0.5rem' }}>
						<E>{departure.time}</E>
						<E>{departure.plannedTime}</E>
						<E>(Om {minutes} min)</E>
					</span>
				</div>
			</div>
			<span>Var {departure.howOften}</span>
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

	// Return formatted difference as hh:mm
	return differenceInMinutes
}

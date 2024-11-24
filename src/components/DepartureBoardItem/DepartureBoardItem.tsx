import { Button, E, M } from '@components/common'
import LineChip from '@components/LineChip'

import formatTimeDifference from '../../util/formatTimeDiff'

import css from './DepartureBoardItem.module.css'
import { Departure } from 'api/useDepartures'
import clsx from 'clsx'


interface Props {
	departure?: Departure
	className?: string
}

export function DepartureBoardItem({ departure, className }: Props) {

	if (!departure) {
		return <M>Inga avgångar hittades.</M>
	}

	const now = new Date()
	const nowTime = now.getHours() + ':' + now.getMinutes()
	const diff = formatTimeDifference(nowTime, departure.time)

	return (
		<Button className={clsx(css.container, className)}>
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
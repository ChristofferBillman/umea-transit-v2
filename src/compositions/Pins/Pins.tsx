import clsx from 'clsx'

import css from './Pins.module.css'
import { usePinnedBoardsStore } from './usePinnedBoardsStore'
import PinnedDepartureBoard from '@components/PinnedDepartureBoard'

interface Props {
	open: boolean
}
export function Pins({ open }: Props) {

	const pins = usePinnedBoardsStore(state => state.pins)

	return (
		<div className={clsx(css.pins, open ? css.open : css.closed)}>
			<div className={css.filler} />
			{pins.map(stopId => <PinnedDepartureBoard stopId={stopId} key={stopId} />)}
			<div className={css.filler} />
		</div>
	)
}

import clsx from 'clsx'

import PinnedDepartureBoard from '@components/PinnedDepartureBoard'


import { usePinnedBoardsStore } from './usePinnedBoardsStore'

import css from './Pins.module.css'

export function Pins() {

	const pins = usePinnedBoardsStore(state => state.pins)
	const open = usePinnedBoardsStore(state => state.open)

	return (
		<div
			className={clsx(css.pins, open ? css.open : css.closed)}
		>
			{pins.map(stop => (
				<PinnedDepartureBoard
					stop={stop}
					key={stop.id}
				/>
			))}
		</div>
	)
}

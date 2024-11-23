import { Button, E } from '@components/common'

import css from './StopListItem.module.css'
import LineChip from '@components/LineChip'

interface Props {
	stopName: string
	onClick: (stopName: string) => void
	lines: number[]
}

export function StopListItem({ stopName, onClick, lines }: Props) {

	return (
		<Button
			className={css.container}
			onClick={() => onClick(stopName)}
		>
			<E>{stopName}</E>
			<div className={css.lineChips}>
				{lines.map(line => <LineChip line={line} />)}
			</div>
		</Button>
	)
}
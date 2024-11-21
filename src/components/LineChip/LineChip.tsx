import clsx from 'clsx'

import { lines } from '../../data/lines'

import css from './LineChip.module.css'

interface Props {
	line: number
	size?: 'sm' | 'lg'
}
export function LineChip({ line, size = 'sm' }: Props) {

	const l = lines.find(l => l.id === line)
	const background = l ? l.color : 'var(--linegray)'

	return (
		<div
			className={clsx(css.linechip, css[size])}
			style={{ background }}
		>
			<p>{line}</p>
		</div>
	)
}

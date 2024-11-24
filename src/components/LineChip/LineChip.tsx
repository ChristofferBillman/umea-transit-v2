import { Icon } from '@components/common'

import { lines } from '../../data/lines'

import clsx from 'clsx'
import css from './LineChip.module.css'

interface Props {
	line: number | string
	size?: 'sm' | 'lg'
	type?: 'JNY' | 'WALK' | 'TRSF'
}
export function LineChip({ line, size = 'sm', type = 'JNY' }: Props) {

	const l = lines.find(l => l.id === line)
	const background = l ? l.color : 'var(--linegray)'

	if (type === 'JNY' || type === 'TRSF') return (
		<div
			className={clsx(css.linechip, css[size])}
			style={{ background }}
		>
			<p>{line}</p>
		</div>
	)

	if (type === 'WALK') return (
		<div
			className={clsx(css.linechip, css[size])}
			style={{ background }}
		>
			<Icon name='directions_walk' size='1.5rem' />
		</div>
	)
}

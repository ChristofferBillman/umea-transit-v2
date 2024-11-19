import clsx from 'clsx'

import style from './Icon.module.css'

interface Props {
	name: string
	className?: string
	size?: string
}

export function Icon({ name, className, size }: Props) {

	return (
		<span
			className={clsx('material-symbols-rounded', style.icon, className)}
			style={{ fontSize: size }}
		>
			{name}
		</span>
	)
}
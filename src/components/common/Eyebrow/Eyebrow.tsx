import { HTMLAttributes } from 'react'

import clsx from 'clsx'
import css from './Eyebrow.module.css'

type Props = HTMLAttributes<HTMLSpanElement>

export function Eyebrow({ className, ...props }: Props) {
	return (
		<span
			className={clsx(css.eyebrow, className)}
			{...props}
		/>
	)
}

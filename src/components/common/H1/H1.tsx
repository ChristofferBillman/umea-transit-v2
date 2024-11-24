import { HTMLAttributes } from 'react'

import clsx from 'clsx'
import css from './H1.module.css'

type Props = HTMLAttributes<HTMLHeadingElement>

export function H1({ className, ...props }: Props) {
	return (
		<h1
			className={clsx(css.h1, className)}
			{...props}
		/>
	)
}

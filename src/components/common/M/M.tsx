import { HTMLAttributes } from 'react'
import css from './M.module.css'
import clsx from 'clsx'

type Props = HTMLAttributes<HTMLSpanElement>
/**
 * Muted
 */
export function M({ className, ...props }: Props) {
	return (
		<span
			{...props}
			className={clsx(css.m, className)}
		/>
	)
}

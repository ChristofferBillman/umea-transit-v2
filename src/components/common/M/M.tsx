import { DetailedHTMLProps, ReactNode } from 'react'
import css from './M.module.css'
import clsx from 'clsx'

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children: ReactNode
}
/**
 * Muted
 */
export function M({ children, className, ...props }: Props) {
	return (
		<span
			{...props}
			className={clsx(css.m, className)}
		>
			{children}
		</span>
	)
}

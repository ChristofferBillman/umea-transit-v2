import { DetailedHTMLProps, ReactNode } from 'react'
import css from './M.module.css'

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children: ReactNode
}
/**
 * Muted
 */
export function M({ children, ...props }: Props) {
	return (
		<span
			{...props}
			className={css.m}
		>
			{children}
		</span>
	)
}

import { ReactNode } from 'react'
import css from './E.module.css'

interface Props {
	children: ReactNode
}
/**
 * Empasis
 */
export function E({ children }: Props) {
	return (
		<span
			className={css.e}
		>
			{children}
		</span>
	)
}

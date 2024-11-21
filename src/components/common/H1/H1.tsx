import { ReactNode } from 'react'
import css from './H1.module.css'

interface Props {
	children: ReactNode
}
export function H1({ children }: Props) {
	return (
		<h1
			className={css.h1}
		>
			{children}
		</h1>
	)
}

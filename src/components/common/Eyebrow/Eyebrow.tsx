import { ReactNode } from 'react'
import css from './Eyebrow.module.css'

interface Props {
	children: ReactNode
}
export function Eyebrow({ children }: Props) {
	return (
		<span
			className={css.eyebrow}
		>
			{children}
		</span>
	)
}

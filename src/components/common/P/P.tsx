import { DetailedHTMLProps, ReactNode } from 'react'
import css from './P.module.css'

interface Props extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode
}
export function P({ ...props }: Props) {
	return (
		<p
			{...props}
			className={css.h1}
		/>
	)
}

import { ReactNode } from 'react'

import clsx from 'clsx'

import css from './Card.module.css'

interface Props {
	children: ReactNode
	as?: 'nav' | 'div'
	className?: string
}

export function Card({ children, as = 'div', className }: Props) {

	const Wrapper = as

	return (
		<Wrapper
			className={clsx(css.card, className)}
		>
			{children}
		</Wrapper>
	)
}

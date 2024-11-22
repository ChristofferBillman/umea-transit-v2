import { ForwardedRef, forwardRef, ReactNode } from 'react'

import clsx from 'clsx'

import css from './Card.module.css'

interface Props {
	children: ReactNode
	as?: 'nav' | 'div'
	className?: string
	onClick?: () => void
}

export const Card = forwardRef(({ children, as = 'div', className, onClick }: Props, ref: ForwardedRef<HTMLDivElement>) => {

	const Wrapper = as

	return (
		<Wrapper
			className={clsx(css.card, className)}
			onClick={onClick}
			ref={ref}
		>
			{children}
		</Wrapper>
	)
})

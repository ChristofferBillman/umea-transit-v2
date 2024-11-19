import { ReactNode } from 'react'

import clsx from 'clsx'

import css from './Button.module.css'

export interface ButtonProps {
	children: ReactNode
	className?: string
	onClick?: () => void
}

export function Button({ children, onClick, className }: ButtonProps) {
	return (
		<button
			onClick={() => onClick && onClick()}
			className={clsx(css.button, className)}
		>
			{children}
		</button>
	)
}

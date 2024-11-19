import { ReactNode } from 'react'

import clsx from 'clsx'

import css from './Button.module.css'

export interface ButtonProps {
	children: ReactNode
	className?: string
	variant?: 'default' | 'selected'
	onClick?: () => void
}

export function Button({ children, onClick, className, variant = 'default' }: ButtonProps) {

	const variantStyle = variant === 'selected' && css.selected

	return (
		<button
			onClick={() => onClick && onClick()}
			className={clsx(css.button, variantStyle, className)}
		>
			{children}
		</button>
	)
}

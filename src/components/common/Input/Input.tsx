import clsx from 'clsx'

import css from './Input.module.css'

type Props =
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement>

export function Input({ className, ...props }: Props) {
	return (
		<input
			{...props}
			className={clsx(css.input, className)}
		/>
	)
}

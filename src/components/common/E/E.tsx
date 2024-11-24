import { HTMLAttributes } from 'react'
import css from './E.module.css'
import clsx from 'clsx'

type Props = HTMLAttributes<HTMLSpanElement>
/**
 * Empasis
 */
export function E({ className, ...props }: Props) {
	return (
		<span
			className={clsx(css.e, className)}
			{...props}
		/>
	)
}

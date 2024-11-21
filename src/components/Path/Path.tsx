import { SVGProps } from 'react'

import css from './Path.module.css'

type Props = SVGProps<SVGPathElement>

export function Path({ ...props }: Props) {
	return (
		<path className={css.path} {...props} />
	)
}

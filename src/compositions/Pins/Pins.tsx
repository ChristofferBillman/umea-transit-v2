import clsx from 'clsx'

import { Card, H1 } from '@components/common'

import css from './Pins.module.css'

interface Props {
	open: boolean
}
export function Pins({ open }: Props) {

	return (
		<Card className={clsx(css.menu, open ? css.open : css.closed)}>
			<H1>Hello</H1>
		</Card>
	)
}

import { ReactNode } from 'react'

import clsx from 'clsx'

import { Card } from '@components/common'
import { useMenuStore } from './useMenuStore'

import css from './Menu.module.css'

interface Props {
	children: ReactNode
	open: boolean
}
export function Menu({ children }: Props) {

	const open = useMenuStore(state => state.open)

	return (
		<Card className={clsx(css.menu, open ? css.open : css.closed)}>
			{children}
		</Card>
	)
}

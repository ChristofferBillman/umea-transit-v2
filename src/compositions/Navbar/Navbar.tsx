import { Dispatch, SetStateAction } from 'react'

import { Button, Card, Icon, NavButton } from '@components/common'

import css from './Navbar.module.css'
import { useLocation } from 'react-router-dom'

const menuItems = [{
	icon: 'home',
	link: '/'
}, {
	icon: 'search',
	link: '/stops'
}, {
	icon: 'route',
	link: '/directions'
}, {
	icon: 'tune',
	link: '/settings'
},]

interface Props {
	setMenuOpen: Dispatch<SetStateAction<boolean>>
	setPinsOpen: Dispatch<SetStateAction<boolean>>
}

export function Navbar({ setMenuOpen, setPinsOpen }: Props) {

	const { pathname } = useLocation()

	return (
		<>
			<Card as='nav' className={css.nav}>
				<Button
					onClick={() => setMenuOpen(prevState => !prevState)}
				>
					<Icon name='thumbnail_bar' />
				</Button>

				{menuItems.map(item => (
					<NavButton
						linksTo={item.link}
						onClick={() => setMenuOpen(true)}
						key={item.link}
						variant={pathname === item.link ? 'selected' : 'default'}
					>
						<Icon name={item.icon} />
					</NavButton>
				))}
			</Card>

			<Card as='nav' className={css.pinned}>
				<Button
					onClick={() => setPinsOpen(prevState => !prevState)}
				>
					<Icon name='pinboard' />
				</Button>
			</Card>
		</>
	)
}

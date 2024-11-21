import { Dispatch, SetStateAction } from 'react'

import { Button, Card, Icon, NavButton } from '@components/common'

import css from './Navbar.module.css'
import { useLocation } from 'react-router-dom'
import { useMenuStore } from '@components/Menu/useMenuStore'

const menuItems = [{
	icon: 'home',
	link: '/'
}, {
	icon: 'search',
	link: '/departureBoards'
}, {
	icon: 'route',
	link: '/directions'
}, {
	icon: 'tune',
	link: '/settings'
},]
interface Props {
	setPinsOpen: Dispatch<SetStateAction<boolean>>
}
export function Navbar({ setPinsOpen }: Props) {

	const { pathname } = useLocation()

	const menuState = useMenuStore(state => state)

	return (
		<>
			<Card as='nav' className={css.nav}>
				<Button
					onClick={() => menuState.setOpen(!menuState.open)}
				>
					<Icon name='thumbnail_bar' />
				</Button>

				{menuItems.map(item => (
					<NavButton
						linksTo={item.link}
						onClick={() => menuState.setOpen(true)}
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

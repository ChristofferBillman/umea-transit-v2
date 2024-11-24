import { useLocation } from 'react-router-dom'

import { Button, Card, Icon, NavButton } from '@components/common'

import { useMenuStore } from '@components/Menu/useMenuStore'
import { usePinnedBoardsStore } from '@compositions/Pins/usePinnedBoardsStore'

import css from './Navbar.module.css'

const menuItems = [{
	icon: 'home',
	link: '/'
}, {
	icon: 'search',
	link: '/departureBoards'
}, {
	icon: 'route',
	link: '/trips'
}, {
	icon: 'tune',
	link: '/settings'
},]

export function Navbar() {

	const { pathname } = useLocation()

	const menuState = useMenuStore(state => state)
	const setPinsOpen = usePinnedBoardsStore(state => state.setOpen)
	const pinsOpen = usePinnedBoardsStore(state => state.open)

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
					onClick={() => setPinsOpen(!pinsOpen)}
				>
					<Icon name='pinboard' />
				</Button>
			</Card>
		</>
	)
}

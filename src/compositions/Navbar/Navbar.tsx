import { Dispatch, SetStateAction } from 'react'

import { Button, Card, Icon, NavButton } from '@components/common'

import css from './Navbar.module.css'

interface Props {
	setMenuOpen: Dispatch<SetStateAction<boolean>>
	setPinsOpen: Dispatch<SetStateAction<boolean>>
}

export function Navbar({ setMenuOpen, setPinsOpen }: Props) {

	return (
		<>
			<Card as='nav' className={css.nav}>
				<Button
					onClick={() => setMenuOpen(prevState => !prevState)}
				>
					<Icon name='thumbnail_bar' />
				</Button>

				<NavButton linksTo='/'>
					<Icon name='home' />
				</NavButton>

				<NavButton linksTo='/stops'>
					<Icon name='search' />
				</NavButton>

				<NavButton linksTo='/directions'>
					<Icon name='route' />
				</NavButton>

				<NavButton linksTo='/settings'>
					<Icon name='tune' />
				</NavButton>
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

import { ReactNode, useState } from 'react'

import Map from '@components/Map'

import Navbar from '@compositions/Navbar'
import Menu from '@compositions/Menu'
import Home from '@compositions/Home'
import Directions from '@compositions/Directions'
import Pins from '@compositions/Pins'

import './styles/App.css'

export const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/stops',
		element: <div>Test</div>,
	},
	{
		path: '/directions',
		element: <Directions />,
	},
	{
		path: '/settings',
		element: <div>Test</div>,
	}
]

interface Props {
	outlet: ReactNode
}

export default function App({ outlet }: Props) {

	const [open, setOpen] = useState(true)
	const [pinsOpen, setPinsOpen] = useState(false)

	return (
		<>
			<Navbar
				setMenuOpen={setOpen}
				setPinsOpen={setPinsOpen}
			/>
			<Map />

			<Menu open={open}>
				{outlet}
			</Menu>

			<Pins open={pinsOpen} />
		</>
	)
}

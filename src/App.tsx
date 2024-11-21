import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Map from '@components/Map'

import Navbar from '@components/Navbar'
import { Error } from '@components/common'
import Menu from '@components/Menu'
import Home from '@compositions/Home'
import Directions from '@compositions/Directions'
import Pins from '@compositions/Pins'

import './styles/App.css'
import DepartureBoards from '@compositions/DepartureBoards'
import DepartureBoard from '@compositions/DepartureBoard'
import { useMenuStore } from '@components/Menu/useMenuStore'

export const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/departureBoards',
		element: <DepartureBoards />,
	},
	{
		path: '/departureBoards/:stopName',
		element: <DepartureBoard />,
		errorElement: <Error />
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

const queryClient = new QueryClient()

interface Props {
	outlet: ReactNode
}

export default function App({ outlet }: Props) {

	const open = useMenuStore(state => state.open)
	const [pinsOpen, setPinsOpen] = useState(false)

	return (
		<QueryClientProvider client={queryClient}>

			<Navbar
				setPinsOpen={setPinsOpen}
			/>
			<Map />

			<Menu open={open}>
				{outlet}
			</Menu>

			<Pins open={pinsOpen} />
		</QueryClientProvider>
	)
}

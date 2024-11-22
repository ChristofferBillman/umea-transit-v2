import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Error } from '@components/common'
import Map from '@components/Map'
import Navbar from '@components/Navbar'
import Menu from '@components/Menu'
import Home from '@compositions/Home'
import Directions from '@compositions/Directions'
import Pins from '@compositions/Pins'
import DepartureBoards from '@compositions/DepartureBoards'
import DepartureBoard from '@compositions/DepartureBoard'

import { useMenuStore } from '@components/Menu/useMenuStore'

import './styles/App.css'

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

	return (
		<QueryClientProvider client={queryClient}>

			<Navbar />
			<Map />

			<Menu open={open}>
				{outlet}
			</Menu>

			<Pins />
		</QueryClientProvider>
	)
}

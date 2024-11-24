import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Error } from '@components/common'
import Map from '@components/Map'
import Navbar from '@components/Navbar'
import Menu from '@components/Menu'
import Home from '@compositions/Home'
import Trips from '@compositions/Trips'
import Pins from '@compositions/Pins'
import DepartureBoards from '@compositions/DepartureBoards'
import DepartureBoard from '@compositions/DepartureBoard'

import { useMenuStore } from '@components/Menu/useMenuStore'

import './styles/App.css'
import TripDetail from '@compositions/TripDetail'

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
		path: '/trips',
		element: <Trips />,
	},
	{
		path: '/trips/detail',
		element: <TripDetail />,
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

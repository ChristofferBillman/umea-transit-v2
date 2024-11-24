import { Button, Icon } from '@components/common'
import { useLocation, useNavigate } from 'react-router-dom'

export function TripDetail() {

	const location = useLocation()
	const navigate = useNavigate()
	const trip = location.state

	if (!trip) return

	return (
		<>
			<Button
				onClick={() => navigate(-1)}
			>
				<Icon name='arrow_back' />
				Resultat
			</Button>
		</>
	)
}

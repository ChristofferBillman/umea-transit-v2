import { useLocation, useNavigate } from 'react-router-dom'

import { Button, E, Eyebrow, H1, Icon } from '@components/common'
import DetailedTripDiagram from '@components/DetailedTripDiagram'

import { Trip } from '@api'

import css from './TripDetail.module.css'

export function TripDetail() {

	const location = useLocation()
	const navigate = useNavigate()
	const trip: Trip = location.state

	if (!trip) return

	return (
		<>
			<Button
				onClick={() => navigate(-1)}
			>
				<Icon name='arrow_back' />
				Resultat
			</Button>

			<Eyebrow className={css.eyebrow}>Resedetalj</Eyebrow>

			<H1 className={css.topHeader}>{trip.legs[0].origin.name}</H1>
			<Icon name='arrow_downward' className={css.headerArrow} />
			<H1>{trip.legs[trip.legs.length - 1].destination.name}</H1>
			<E>{trip.duration}</E>
			<div className={css.scrollContainer}>
				<DetailedTripDiagram trip={trip} />
			</div>
		</>
	)
}

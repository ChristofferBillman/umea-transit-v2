import { useParams } from 'react-router-dom'

import { Button, Eyebrow, H1, Icon, Skeleton, Error, M } from '@components/common'

import DepartureBoardItem from '@components/DepartureBoardItem'

import { usePinnedBoardsStore } from '@compositions/Pins/usePinnedBoardsStore'

import useStop from '../../api/getStop'
import useDeparturesFromStopName from '../../api/getDeparturesFromStopName'

import css from './DepartureBoard.module.css'

export function DepartureBoard() {
	const { stopName } = useParams()

	const pin = usePinnedBoardsStore(state => state.pin)

	const { isPending, isError, data } = useDeparturesFromStopName(stopName ? stopName : '')

	const stopRequest = useStop(stopName ? stopName : '')

	return (
		<>
			<Eyebrow>Avgångstavla</Eyebrow>
			<H1>{stopName}</H1>

			<div className={css.buttonsContainer}>
				<Button>
					<Icon name='schedule' />
					Nu
				</Button>
				<Button>
					<Icon name='filter_list' />
					Filter
				</Button>
			</div>

			<Skeleton
				className={css.departuresContainer}
				loading={isPending}
				errored={isError}
				renderData={() => (
					data.map(departure => (
						<DepartureBoardItem
							departure={departure}
							key={departure.time + departure.line.name}
						/>
					)))}
				renderError={() => <Error />}
			/>

			<div className={css.pinboardInfo}>
				<Button
					onClick={() => {
						if (!stopRequest.data) return
						pin(stopRequest.data.id)
					}}
				>
					<Icon name='pinboard' />
					Fäst "{stopName}"
				</Button>
				<M style={{ textAlign: 'center' }}>Avgångstavlor som du använder ofta kan du fästa. De blir då synliga i en meny till höger.</M>
			</div>
		</>
	)
}

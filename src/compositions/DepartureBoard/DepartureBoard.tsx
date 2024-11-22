import { useParams } from 'react-router-dom'

import { Button, Eyebrow, H1, Icon, Skeleton, Error, M } from '@components/common'
import DepartureBoardItem from '@components/DepartureBoardItem'
import { usePinnedBoardsStore } from '@compositions/Pins/usePinnedBoardsStore'

import { useStop, useDepartures } from '@api'

import css from './DepartureBoard.module.css'

export function DepartureBoard() {
	const { stopName } = useParams()

	const pin = usePinnedBoardsStore(state => state.pin)
	const pins = usePinnedBoardsStore(state => state.pins)
	const unpin = usePinnedBoardsStore(state => state.unpin)
	const setOpen = usePinnedBoardsStore(state => state.setOpen)

	const stopQuery = useStop(stopName)
	const stopId = stopQuery.data?.id

	const departuresQuery = useDepartures(
		stopId!,
		undefined,
		{
			enabled: !!stopId
		}
	)

	const isPending = stopQuery.isPending || departuresQuery.isPending
	const isError = stopQuery.isError || departuresQuery.isError

	const isPinned = pins.find(stop => stop.name === stopName) !== undefined

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
					departuresQuery.data?.map(departure => (
						<DepartureBoardItem
							departure={departure}
							key={departure.time + departure.line.name}
						/>
					))
				)}
				renderError={() => <Error />}
			/>

			<div className={css.pinboardInfo}>
				<Button
					onClick={() => {
						if (!stopQuery.data) return
						if (!isPinned) {
							pin(stopQuery.data)
							setOpen(true)
						}
						else unpin(stopQuery.data.id)

					}}
				>
					<Icon name='pinboard' />
					{!isPinned ?
						`Fäst "${stopName}"` :
						`Lossa "${stopName}"`
					}
				</Button>
				<M style={{ textAlign: 'center' }}>Avgångstavlor som du använder ofta kan du fästa. De blir då synliga i en meny till höger.</M>
			</div>
		</>
	)
}

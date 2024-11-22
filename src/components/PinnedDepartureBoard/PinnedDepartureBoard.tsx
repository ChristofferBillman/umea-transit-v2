import { Card, Eyebrow, Skeleton, Error, H1 } from '@components/common'
import DepartureBoardItem from '@components/DepartureBoardItem'
import DepartureBoard from '@compositions/DepartureBoard'
import { usePinnedBoardsStore } from '@compositions/Pins/usePinnedBoardsStore'

import { Stop, useDepartures } from '@api'

import css from './PinnedDepartureBoard.module.css'

interface Props {
	stop: Stop
}

export function PinnedDepartureBoard({ stop }: Props) {

	const selectedPin = usePinnedBoardsStore(state => state.selectedPin)

	const departuresQuery = useDepartures(stop.id)

	return (
		<Card
			className={css.container}
		>
			{selectedPin?.id === stop.id ? (
				<DepartureBoard />
			) : (
				<Skeleton
					loading={departuresQuery.isLoading}
					errored={departuresQuery.isError}
					className={css.content}
					renderData={() => (
						<>
							<Eyebrow>Nästa avgång</Eyebrow>
							<H1>{stop.name}</H1>
							<DepartureBoardItem
								departure={departuresQuery.data?.[0]}
							/>
						</>
					)}
					renderError={() => <Error />}
				/>
			)
			}
		</Card>
	)
}

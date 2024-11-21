import { Card, Eyebrow, Skeleton, Error, H1 } from '@components/common'
import DepartureBoard from '@compositions/DepartureBoard'

import { usePinnedBoardsStore } from '@compositions/Pins/usePinnedBoardsStore'
import useStop from '../../api/getStop'

import css from './PinnedDepartureBoard.module.css'
import useDepartures from '../../api/getDepartures'
import DepartureBoardItem from '@components/DepartureBoardItem'

interface Props {
	stopId: string
}

export function PinnedDepartureBoard({ stopId }: Props) {

	const setSelectedPin = usePinnedBoardsStore(state => state.setSelectedPin)
	const selectedPin = usePinnedBoardsStore(state => state.selectedPin)

	const stopRequest = useStop(stopId)
	const departuresRequest = useDepartures(stopId)

	return (
		<Card
			className={css.container}
		>
			{selectedPin === stopId ? (
				<DepartureBoard />
			) : (
				<Skeleton
					loading={stopRequest.isLoading || departuresRequest.isLoading}
					errored={stopRequest.isError || departuresRequest.isError}
					className={css.content}
					renderData={() => {

						console.log(departuresRequest?.data[0])
						return <>
							<Eyebrow>Nästa avgång</Eyebrow>
							<H1>{stopRequest.data?.name}</H1>
							<DepartureBoardItem
								departure={departuresRequest.data[0]}
							/>
						</>
					}}
					renderError={() => <Error />}
				/>
			)
			}
		</Card>
	)
}

/*onClick={() => setSelectedPin(stopId)}*/

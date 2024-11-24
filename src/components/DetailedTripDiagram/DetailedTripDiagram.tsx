import { E, M } from '@components/common'
import LineChip from '@components/LineChip'

import { Leg, Trip } from '@api'

import { lines } from '../../data/lines'

import css from './DetailedTripDiagram.module.css'
import formatTimeDifference from '../../util/formatTimeDiff'

interface Props {
	trip: Trip
}

export function DetailedTripDiagram({ trip }: Props) {
	return (
		trip.legs.map((leg, index) => (
			<LegDiagram
				leg={leg}
				connectingDepartureTime={trip.legs?.[index + 1]?.origin?.time}
				connectingIsWalk={trip.legs?.[index + 1]?.type === 'WALK'}
				key={leg.origin.id + leg.destination.id}
			/>))
	)
}

interface LegProps {
	leg: Leg
	connectingDepartureTime: string
	connectingIsWalk: boolean
}
function LegDiagram(props: LegProps) {

	if (props.leg.type === 'WALK') return <WalkLeg {...props} />

	return <TransitLeg {...props} />
}

function TransitLeg({ leg, connectingDepartureTime, connectingIsWalk }: LegProps) {

	const l = lines.find(l => l.id === Number(leg.line.id))
	const color = l ? l.color : 'var(--linegray)'

	return (
		<div className={css.legContainer}>
			<div className={css.diagramContainer} style={{ '--color': color } as React.CSSProperties}>
				<LineChip line={Number(leg.line.id)} size='lg' type={leg.type} />
				<div className={css.line} />
				<div className={css.circleHollow} />

				<div className={css.shortLine} />
				<div className={css.dashedLine} />
				<div className={css.shortLine} />

				<div className={css.circle} />
			</div>

			<div className={css.timesContainer} >
				<div className={css.lineInfoContainer}>
					<E>mot {leg.line.name}</E>
					<E>{formatTimeDifference(leg.origin.time, leg.destination.time)}</E>
				</div>


				<div className={css.smallGap}>
					<E>{leg.origin.name}</E>
					<E style={{ marginBottom: '1rem' }}>{leg.origin.time}</E>
				</div>

				<M style={{ marginBottom: '1.25rem' }}> Okänt antal hållplatser</M>

				<div className={css.smallGap}>
					<E>{leg.destination.name}</E>
					<E>{leg.destination.time}</E>
				</div>

				{connectingDepartureTime && !connectingIsWalk &&
					<M style={{ marginTop: '2rem' }}>
						Byte ({formatTimeDifference(leg.destination.time, connectingDepartureTime)})
					</M>
				}
			</div>
		</div>
	)
}

function WalkLeg({ leg }: LegProps) {

	const l = lines.find(l => l.id === Number(leg.line.id))
	const color = l ? l.color : 'var(--linegray)'

	return (
		<div className={css.legContainer}>
			<div className={css.diagramContainer} style={{ '--color': color } as React.CSSProperties}>
				<LineChip line={Number(leg.line.id)} size='lg' type={leg.type} />
				<div className={css.line} />
				<div className={css.circle} />
			</div>

			<div className={css.timesContainer}>
				<div className={css.lineInfoContainer}>
					<E>Promenad</E>
					<div className={css.smallGap}>
						<E>{formatTimeDifference(leg.origin.time, leg.destination.time)}</E>
						<M>({(leg.distance! / 1000).toFixed(2)}km)</M>
					</div>
				</div>

				<div className={css.smallGap}>
					<E>{leg.destination.name}</E>
					<E>{leg.destination.time}</E>
				</div>
			</div>
		</div>
	)
}


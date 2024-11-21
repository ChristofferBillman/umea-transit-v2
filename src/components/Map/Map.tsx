import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import Line from '@components/Line'

import { lines } from '../../data/lines'

import useZoom from './useZoom'
import usePan from './usePan'
import WaterBodies from './WaterBodies'

import css from './Map.module.css'
import Stops from './Stops'
import { useMenuStore } from '@components/Menu/useMenuStore'

export function Map() {
	const mapRef = useRef<SVGSVGElement>(null)
	const transformRef = useRef({ x: 0, y: 0, scale: 1 })

	useZoom(mapRef, transformRef)
	usePan(mapRef, transformRef)

	const setMenuOpen = useMenuStore(state => state.setOpen)

	const navigate = useNavigate()

	const onStopClick = (stopName: string) => {
		navigate('/departureBoards/' + stopName)
		setMenuOpen(true)
	}

	return (
		<div className={clsx(css.map, 'pannable')}>
			{/* Pannable class is here to be able to check for its presence in usePan */}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1333 841'
				className='pannable'
				fill='none'
				ref={mapRef}
			>
				<WaterBodies />
				{lines.map(line => <Line line={line} key={line.id} />)}
				<Stops onStopClick={onStopClick} />
			</svg>
		</div>
	)
}

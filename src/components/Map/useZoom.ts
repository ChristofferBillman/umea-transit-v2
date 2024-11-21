import { RefObject, useEffect } from 'react'
import getTransform from './getTransform'

const SENSITIVITY = 0.1
const MIN_ZOOM = 0.5
const MAX_ZOOM = 10

export default function useZoom(
	ref: RefObject<SVGSVGElement>,
	transformRef: React.MutableRefObject<{ x: number; y: number; scale: number }>) {

	useEffect(() => {

		const handleWheel = (e: WheelEvent) => {
			if (!ref.current) return

			const isPannable = (e.target as Element).classList.contains('pannable')
			if (!isPannable) return

			const newScale =
				transformRef.current.scale + (e.deltaY / Math.abs(e.deltaY)) * SENSITIVITY

			if (newScale <= MIN_ZOOM || newScale >= MAX_ZOOM) return

			transformRef.current.scale = newScale

			ref.current.style.transform = getTransform(transformRef.current)
		}

		window.addEventListener('wheel', handleWheel)
		return () => window.removeEventListener('wheel', handleWheel)
	})
}
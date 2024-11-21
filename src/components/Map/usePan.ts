import { RefObject, useEffect } from 'react'
import getTransform from './getTransform'
import useInertia from './useInertia'

export default function usePan(
	ref: RefObject<SVGSVGElement>,
	transformRef: React.MutableRefObject<{ x: number; y: number; scale: number }>) {

	// Make both X and Y values inertial.
	const [updateX, startInertiaX, stopIntertiaX] = useInertia(
		transformRef.current.x,
		x => {
			transformRef.current.x = x
			applyTransform()
		})

	const [updateY, startInertiaY, stopIntertiaY] = useInertia(
		transformRef.current.y,
		y => {
			transformRef.current.y = y
			applyTransform()
		}
	)

	const applyTransform = () => {
		if (!ref.current) return
		ref.current.style.transform = getTransform(transformRef.current)
	}

	useEffect(() => {
		const handlePan = (e: MouseEvent) => {
			if (!ref.current || e.buttons != 1) return

			const isPannable = (e.target as Element).classList.contains('pannable')
			if (!isPannable) return

			// Update position every time user moves mouse and mouse button is down.
			updateX(e.movementX)
			updateY(e.movementY)
		}

		// When user releases mouse button, start deceleration.
		const handleMouseUp = () => {
			startInertiaX()
			startInertiaY()
		}

		// When user presses mouse button again, disable inertia.
		const handleMouseDown = () => {
			stopIntertiaX()
			stopIntertiaY()
		}

		window.addEventListener('mousemove', handlePan)
		window.addEventListener('mouseup', handleMouseUp)
		window.addEventListener('mousedown', handleMouseDown)

		return () => {
			window.removeEventListener('mousemove', handlePan)
			window.removeEventListener('mouseup', handleMouseUp)
			window.removeEventListener('mousedown', handleMouseDown)
		}
	}, [ref, startInertiaX, startInertiaY, stopIntertiaX, stopIntertiaY, transformRef, updateX, updateY])
}
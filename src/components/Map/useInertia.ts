import { useEffect, useRef } from 'react'

const DECELERATION = 0.90
const MIN_VELOCITY = 0.15

/**
 * Hook that decreases a given value until it is 0.
 * @param initialValue The initial value.
 * @param onUpdate Function that runs every time the value is updated.
 * @returns A 3-tuple, with the first value being a function to update the value, second one starts the velocity interpolation, and third one stops it.
 */
export default function useInertia(initialValue = 0, onUpdate: (value: number) => void
): [(value: number) => void, () => void, () => void] {
	const valueRef = useRef(initialValue)
	const velocityRef = useRef(0)
	const animationRef = useRef<number | null>(null)

	// Set the current velocity to the the last delta and add the delta to the current value.
	const updateValue = (delta: number) => {
		velocityRef.current = delta
		valueRef.current += delta
		onUpdate(valueRef.current)
	}

	const startInertia = () => {
		const animate = () => {
			// Decelerate
			velocityRef.current *= DECELERATION
			// Add to value
			valueRef.current += velocityRef.current

			onUpdate(valueRef.current)

			// Keep decelerating until velocity is below threshold.
			if (Math.abs(velocityRef.current) > MIN_VELOCITY) {
				animationRef.current = requestAnimationFrame(animate)
			} else {
				animationRef.current = null
			}
		}

		if (!animationRef.current) {
			animationRef.current = requestAnimationFrame(animate)
		}
	}

	const stopInertia = () => {
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current)
			animationRef.current = null
		}
	}

	useEffect(() => {
		return () => stopInertia()
	}, [])

	return [updateValue, startInertia, stopInertia]
}
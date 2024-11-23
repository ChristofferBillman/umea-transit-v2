import { ChangeEvent, InputHTMLAttributes, useRef, useState, FocusEvent } from 'react'

import { Input, M } from '@components/common'

import StopListItem from '@components/StopListItem'

import useOutsideClick from '@hooks/useOutsideClick'

import { stops } from '../../data/stops'

import clsx from 'clsx'
import css from './StopSearchInput.module.css'

type Props = InputHTMLAttributes<HTMLInputElement>

export function StopSearchInput({ onChange, value, defaultValue = '', ...props }: Props) {

	const [internalValue, setInternalValue] = useState(defaultValue)
	const isControlled = value !== undefined
	const inputValue = isControlled ? value : internalValue

	const ref = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	useOutsideClick(() => setOpen(false), [ref])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e)
		}

		if (!isControlled) {
			setInternalValue(e.target.value)
		}
	}

	const handleSetStop = (stopName: string) => {
		const syntheticEvent = {
			target: {
				value: stopName
			}
		} as ChangeEvent<HTMLInputElement>

		handleChange(syntheticEvent)
		setTimeout(() => setOpen(false), 5)
	}

	const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
		if (!ref.current?.contains(e.relatedTarget as Node)) {
			setOpen(false)
		}
	}

	const filteredStops = stops.filter(stop => (
		stop.name.toLowerCase()
			.includes(
				String(inputValue).trim().toLowerCase()
			)
	)).slice(0, 5)

	return (
		<div
			ref={ref}
			className={css.container}
			onBlur={handleBlur}
		>
			<Input
				{...props}
				value={inputValue}
				onChange={handleChange}
				onFocus={() => setOpen(true)}
			/>

			<div
				className={clsx(css.resultsContainer, open && css.open)}
			>
				{String(inputValue).trim() === '' ?
					<M className={css.info}>Visar resultat när du börjar skriva...</M>
					:
					filteredStops.map(stop => (
						<StopListItem
							stopName={stop.name}
							onClick={handleSetStop}
							key={stop.name}
							lines={stop.lineIds}
						/>
					))
				}
				{filteredStops.length === 5 && String(inputValue).trim() !== '' &&
					<M className={css.info}>Fortsätt skriva för att förfina resultaten...</M>
				}

				{filteredStops.length === 0 &&
					<M className={css.info}>Inga träffar.</M>
				}

			</div>
		</div>
	)
}

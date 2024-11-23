import { useState } from 'react'

import { Button, H1, Icon, Input } from '@components/common'
import StopSearchInput from '@components/StopSearchInput'

import { Stop } from '@api'

export function Directions() {

	const [from, setFrom] = useState<Stop | null>(null)
	const [to, setTo] = useState<Stop | null>(null)

	return (
		<>
			<H1>Hitta resa</H1>
			<StopSearchInput
				placeholder='Från'
				setSelectedStop={setFrom}
			/>
			<Icon name='swap_vert' />
			<StopSearchInput
				placeholder='Till'
				setSelectedStop={setTo}
			/>

			<div style={{ display: 'flex', marginTop: '1rem', gap: '1rem' }}>
				<Button>
					<Icon name='schedule' />
					Nu
				</Button>
				<Button>
					<Icon name='filter_list' />
					Filter
				</Button>
			</div>
		</>
	)
}

import { Button, H1, Icon, Input } from '@components/common'

export function Directions() {
	return (
		<>
			<H1>Hitta resa</H1>
			<Input
				placeholder='Från'
			/>
			<Icon name='swap_vert' />
			<Input
				placeholder='Till'
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

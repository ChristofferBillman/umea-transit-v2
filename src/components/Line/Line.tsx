import { lines } from 'data/lines'
import Path from '@components/Path'

interface Props {
	line: typeof lines[0]
}
export function Line({ line }: Props) {
	return (
		<Path
			d={line.path}
			stroke={line.color}
			strokeLinecap='round'
			strokeWidth='4'
			key={line.id}
		/>
	)
}

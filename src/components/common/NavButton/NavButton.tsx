import { useNavigate } from 'react-router-dom'

import { Button } from '@components/common'
import { ButtonProps } from '../Button/Button'

interface Props extends ButtonProps {
	linksTo: string
}
export function NavButton({ children, onClick, linksTo }: Props) {

	const navigate = useNavigate()

	const handleNav = () => {
		navigate(linksTo)
		if (onClick) onClick()
	}

	return (
		<Button onClick={handleNav}>
			{children}
		</Button>
	)
}

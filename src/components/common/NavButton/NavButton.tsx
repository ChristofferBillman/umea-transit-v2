import { useNavigate } from 'react-router-dom'

import { Button } from '@components/common'
import { ButtonProps } from '../Button/Button'

interface Props extends ButtonProps {
	linksTo: string
}
export function NavButton({ onClick, linksTo, ...props }: Props) {

	const navigate = useNavigate()

	const handleNav = () => {
		navigate(linksTo)
		if (onClick) onClick()
	}

	return (
		<Button
			{...props}
			onClick={handleNav}
		/>
	)
}

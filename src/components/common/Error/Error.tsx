import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { E } from '../E/E'

import css from './Error.module.css'

export function Error() {

	const error = useRouteError() as Error
	console.log(error)
	if (!isRouteErrorResponse(error)) {
		return <div className={css.container}>
			<E>Hoppsan, något gick snett!</E>
			<p>Anledning oklar. Kolla konsolen.</p>
		</div>
	}

	return (
		<div className={css.container}>
			<E>Hoppsan, något gick snett!</E>
			<p>{error.message}</p>
		</div>
	)
}
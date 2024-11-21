import { DetailedHTMLProps } from 'react'

import css from './Skeleton.module.css'

import clsx from 'clsx'

interface Props extends Omit<DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
	loading: boolean
	errored: boolean
	renderData: () => void
	renderError: () => void
}

export function Skeleton({ loading, errored, renderData, renderError, className, ...props }: Props) {
	return (
		<div
			{...props}
			className={clsx(loading && css.loader, errored && css.errored, className)}
		>
			<>
				{!loading && errored && renderError()}
				{!loading && !errored && renderData()}
			</>
		</div>
	)
}

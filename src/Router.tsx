import { createRef, ReactNode, RefObject } from 'react'

import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import App from './App'

import { routes } from './App'

interface Route {
	path: string,
	element: ReactNode,
	nodeRef: RefObject<HTMLElement> | undefined
}

const typedRoutes = routes as Route[]

typedRoutes.forEach((route) => route.nodeRef = createRef<HTMLElement>())

const router = createBrowserRouter([
	{
		path: '/',
		element: <App outlet={<TransitionedRouter />} />,
		children: routes.map((route) => ({
			index: route.path === '/',
			path: route.path === '/' ? undefined : route.path,
			element: route.element,
		}))
	}
])

function TransitionedRouter() {
	const location = useLocation()
	const currentOutlet = useOutlet()

	const { nodeRef } = typedRoutes.find((route) => route.path === location.pathname) ?? {}

	return (
		<SwitchTransition>
			<CSSTransition
				key={location.pathname}
				nodeRef={nodeRef}
				timeout={300}
				classNames='page'
				unmountOnExit
			>
				{() => (
					<div ref={nodeRef as RefObject<HTMLDivElement>} className='page'>
						{currentOutlet}
					</div>
				)}
			</CSSTransition>
		</SwitchTransition>
	)
}

export default function Router() {
	return <RouterProvider router={router} />
}
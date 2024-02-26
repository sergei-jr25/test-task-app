import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './config/routes'

const AppRouter: FC = () => {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} path={route.path} element={<route.element />} />
			))}
		</Routes>
	)
}
export default AppRouter

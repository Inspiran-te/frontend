import { useRoutes } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () => {
	//Todo Добавить auth (после аутенфикации отображается PrivateRoutes)
	//const auth = false

	//const routes = auth ? PrivateRoutes : PublicRoutes

	const element = useRoutes([...(PublicRoutes)])
	console.log('AppRoutes', PublicRoutes)
	return <>{element}</>
}
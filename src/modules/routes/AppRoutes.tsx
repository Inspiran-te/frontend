import { useRoutes } from 'react-router-dom'
import { store } from '../../redux/store'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () => {
	const authenticated = store.getState().auth.auth.authenticated

	const routes = authenticated ? [...PrivateRoutes, ...PublicRoutes(authenticated)] : PublicRoutes(authenticated);

	const element = useRoutes([...routes]);

	console.log('AppRoutes', routes)

	return <>{element}</>
}
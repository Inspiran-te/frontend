import { Registration } from '../../pages/registration'
import { Login } from '../../pages/login'
import { RecoverPassword } from '../../pages/recover'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = (authenticated: boolean) => {
	const defaultRedirectPath = authenticated ? '/api/main' : '/auth/login';

	return [
		{
			path: '/',
			element: <Navigate to={defaultRedirectPath} />,
		},
		{
			path: '/auth/*',
			children: [
				{
					path: 'register',
					element: <Registration />,
				},
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'recover',
					element: <RecoverPassword />,
				},
			],
		},
	];
};
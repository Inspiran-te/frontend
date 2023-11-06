import { Registration } from '../../pages/registration'
import { Login } from '../../pages/login'
import { RecoverPassword } from '../../pages/recover'

export const PublicRoutes = [
	{
		path: '/auth/*',
		children: [
			{
				path: 'register',
				element: <Registration />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'recover',
				element: <RecoverPassword />
			}
		]
	}
]
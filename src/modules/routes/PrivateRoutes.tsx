import { Resume } from "../../pages/resume";

export const PrivateRoutes = [
    {
		path: '/api/*',
		children: [
			{
				path: 'resume',
				element: <Resume />
			},
		]
	}
]
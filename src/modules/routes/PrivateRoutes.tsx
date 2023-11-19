import { Resume } from "../../pages/resume";
import { Main } from '../../pages/main'
import { CareerAdvices } from '../../pages/careeradvices'
import { Help } from '../../pages/help'
import { ResponseTable } from '../../pages/responsetable'
import { KnowledgeBase } from '../../pages/knowledgebase'

export const PrivateRoutes = [
    {
		path: '/api/*',
		children: [
			{
				path: 'main',
				element: <Main />
			},
			{
				path: 'resume',
				element: <Resume />
			},
			{
				path: 'responsetable',
				element: <ResponseTable />
			},
			{
				path: 'knowledgebase/*',
				element: <KnowledgeBase />
			},
			{
				path: 'careeradvices',
				element: <CareerAdvices />
			},
			{
				path: 'help',
				element: <Help />
			},
		]
	}
]
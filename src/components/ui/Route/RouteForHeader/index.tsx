import { FC } from 'react'
import { ILinkHeader } from './types'
import * as SC from './styles'

const LinkForHeader: FC<ILinkHeader> = ({ text, children, to, ...props }) => (
	<SC.LinkHeader to={to} {...props}>
		{text}
		{children}
	</SC.LinkHeader>
)

export default LinkForHeader
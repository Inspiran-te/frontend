import { FC } from 'react'
import { ILink } from './types'
import * as SC from './styles'

const Link: FC<ILink> = ({ text, children, to, ...props }) => (
	<SC.Link to={to} {...props}>
		{text}
		{children}
	</SC.Link>
)

export default Link
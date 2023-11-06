import { FC } from 'react'
import { ISpan } from './types'
import * as SC from './styles'

const Span: FC<ISpan> = ({ text, children, ...props }) => (
	<SC.Span {...props}>
		{text}
		{children}
	</SC.Span>
)

export default Span
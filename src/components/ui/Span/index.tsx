import { FC } from 'react'
import { ISpan } from './types'
import * as SC from './styles'

const Span: FC<ISpan> = ({ text, children, ...props }) => (
	<SC.SpanWrapper {...props}>
		{text}
		{children}
	</SC.SpanWrapper>
)

export default Span
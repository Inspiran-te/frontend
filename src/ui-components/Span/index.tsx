import { FC } from 'react'
import { ISpan } from './types'
import { SpanWrapper } from './styles'

const Span: FC<ISpan> = ({ text, children, ...props }) => (
	<SpanWrapper {...props}>
		{text}
		{children}
	</SpanWrapper>
)

export default Span
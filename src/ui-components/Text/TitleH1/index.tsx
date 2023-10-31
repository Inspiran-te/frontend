import { FC } from 'react'
import { ITitleH1 } from './types'
import { TitleWrapper } from './styles'

const TitleH1: FC<ITitleH1> = ({ text, ...props }) => (
	<TitleWrapper {...props}>
		{text}
	</TitleWrapper>
)

export default TitleH1
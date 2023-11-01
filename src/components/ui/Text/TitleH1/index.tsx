import { FC } from 'react'
import { ITitleH1 } from './types'
import * as SC from './styles'

const TitleH1: FC<ITitleH1> = ({ text, ...props }) => (
	<SC.TitleWrapper {...props}>
		{text}
	</SC.TitleWrapper>
)

export default TitleH1
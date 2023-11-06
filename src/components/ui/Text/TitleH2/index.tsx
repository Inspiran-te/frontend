import { FC } from 'react'
import { ITitleH2 } from './types'
import * as SC from './styles'

const TitleH2: FC<ITitleH2> = ({ text, ...props }) => (
	<SC.TitleWrapper {...props}>
		{text}
	</SC.TitleWrapper>
)

export default TitleH2
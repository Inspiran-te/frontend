import { FC } from 'react'
import { ITitleInSection as Props } from './types'
import * as SC from './styles'

const TitleInSection: FC<Props> = ({ title, ...props }) => (
	<SC.TitleSectionWrapper {...props}>
		<SC.TitleText {...props}>
			{title}
		</SC.TitleText>
	</SC.TitleSectionWrapper>
)

export default TitleInSection
import { FC } from 'react'
import { ILabel } from './types'
import { LabelWrapper } from './styles'

const Label: FC<ILabel> = ({ text, ...props }) => (
	<LabelWrapper {...props}>
		{text}
	</LabelWrapper>
)

export default Label
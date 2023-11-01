import { FC } from 'react'
import { ILabel } from './types'

import * as SC from './styles'
const Label: FC<ILabel> = ({ text, ...props }) => (
	<SC.LabelWrapper {...props}>
		{text}
	</SC.LabelWrapper>
)

export default Label
import { FC } from 'react'
import { ILabel } from './types'

import * as SC from './styles'
const Label: FC<ILabel> = ({ text, children, ...props }) => (
	<SC.LabelWrapper {...props}>
		{text}
		{children}
	</SC.LabelWrapper>
)

export default Label
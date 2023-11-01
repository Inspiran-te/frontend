import React from 'react'
import { IButtonProps } from './types'
import * as SC from './styles'

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
	<SC.ButtonWrapper {...props}>{children}</SC.ButtonWrapper>
)
  

import React from 'react'
import { ITextProps } from './types'
import * as SC from './styles'

export const TextArea: React.FC<ITextProps> = ({ children, ...props }) => <SC.TextAreaWrapper {...props}>{children}</SC.TextAreaWrapper>
  

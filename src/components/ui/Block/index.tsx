import React from 'react'
import { IBlockProps } from './types'
import * as SC from './styles'

export const Block: React.FC<IBlockProps> = ({ children, ...props }) => <SC.BlockWrapper {...props}>{children}</SC.BlockWrapper>
  

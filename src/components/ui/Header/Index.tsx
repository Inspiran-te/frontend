import React from 'react'
import { IHeaderProps } from './types'
import * as SC from './styles'

export const Headers: React.FC<IHeaderProps> = ({ children, ...props }) => (
    <SC.HeaderWrapper {...props}>
        {children}
    </SC.HeaderWrapper>
)


import * as SC from './styles'
import { FC } from 'react'
import { IWrapperProps } from './types'

export const Wrapper: FC<IWrapperProps> = ({ children, ...props }) => <SC.Wrapper {...props}>{children}</SC.Wrapper>
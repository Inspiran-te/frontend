import { FC } from 'react'
import * as SC from './styles'
import { IWrapperLeftProps } from './types'

export const WrapperLeft: FC<IWrapperLeftProps> = ({children, ...props}) => <SC.WrapperLeft{...props}>{children}</SC.WrapperLeft>
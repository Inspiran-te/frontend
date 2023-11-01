import { FC } from 'react'
import * as SC from './styles'
import { IButtonProps } from '../../Button/types'

export const ButtonsWrapper: FC<IButtonProps> = ({children, ...props}) => <SC.ButtonsWrapper {...props}>{children}</SC.ButtonsWrapper>
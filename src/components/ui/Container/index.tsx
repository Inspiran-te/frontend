import * as SC from './styles'
import { FC } from 'react'
import { IContainerProps } from './types'

export const Container: FC<IContainerProps> = ({ children, ...props }) => <SC.Container {...props}>{children}</SC.Container>
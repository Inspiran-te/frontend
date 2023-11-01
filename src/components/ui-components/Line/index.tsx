import { FC } from 'react'
import { ILine } from './types'
import * as SC from './styles'

export const GreyLine: FC<ILine> = ({ ...props }) => <SC.Line {...props} />

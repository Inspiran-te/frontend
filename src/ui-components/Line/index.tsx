import { FC } from 'react'
import { ILine } from './types'
import { Line } from './styles'

export const GreyLine: FC<ILine> = ({ ...props }) => <Line {...props} />

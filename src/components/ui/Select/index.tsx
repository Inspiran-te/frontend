import { FC } from 'react'
import { ISelect } from './types'
import * as SC from './styles'

export const Select: FC<ISelect> = ({ children, ...props }) => (
    <SC.Select {...props}> 
            {children}   
    </SC.Select>
)

export const Options: FC<ISelect> = ({ children, ...props }) => (
    <SC.Options {...props}> 
            {children}   
    </SC.Options>
)
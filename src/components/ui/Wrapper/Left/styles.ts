import { styled } from 'styled-components'
import { IWrapperLeftProps } from './types'

export const WrapperLeft = styled.div<IWrapperLeftProps>`
  width: 600px;
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.white};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  border-radius: 40px;
  flex-direction: column;
  box-sizing: border-box;
	text-align: ${props => props.textAlign};
`
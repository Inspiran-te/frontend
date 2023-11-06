import { styled } from 'styled-components'
import { IWrapperProps } from './types'

export const Wrapper = styled.div<IWrapperProps>`
  width: ${props => props.width};
  padding: 20px;
  margin: 20px 40px 20px 40px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  box-sizing: border-box;
`
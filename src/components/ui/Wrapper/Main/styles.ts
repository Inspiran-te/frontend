import { styled } from 'styled-components'
import { IWrapperProps } from './types'

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding: 20px;
  margin: 20px 40px 20px 40px;
  background-color: ${props => props.theme.colors.blue_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
`
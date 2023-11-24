import styled from 'styled-components'
import { IButtonProps } from './types'

export const ButtonWrapper = styled.button<IButtonProps>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  background-color: ${(props) => props.backgroundColor};
  align-items: ${(props) => props.alignItems};
  display: ${(props) => props.display};
  font-family: ${(props) => props.fontFamily};
  flex-direction: ${(props) => props.flexDirection};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`


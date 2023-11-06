import styled from 'styled-components'
import { InputProps } from './types'

export const InputWrapper = styled.input<InputProps>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: ${(props) => props.outline};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  rows: ${props => props.rows};
  cols: ${props => props.cols};
`

import styled from 'styled-components'
import { InputProps } from './types'

export const InputWrapper = styled.input<InputProps>`
	margin-right: ${props => props.marginRight};
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
	border-color: ${props => props.borderColor};
  rows: ${props => props.rows};
  cols: ${props => props.cols};
  opacity: ${props => props.opacity};
  z-index: ${props => props.zIndex};
  cursor: ${props => props.cursor};
	text-align: ${props => props.textAlign};
	outline-color: ${props => props.outlineColor};
`

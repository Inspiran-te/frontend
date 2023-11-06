import styled from 'styled-components'
import { ISpan } from './types'

export const Span = styled.span<ISpan>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: ${props => props.textAlign};
  cursor: ${props => props.cursor};
  font-family: ${props => props.fontFamily};
	display: ${props => props.display};
	flex-direction: ${props => props.flexDirection};
  padding: ${props => props.padding};
`

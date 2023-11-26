import styled from 'styled-components'
import { ILabel } from './types'

export const LabelWrapper = styled.label<ILabel>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  font-family: ${props => props.fontFamily};
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  htmlFor: ${props => props.htmlFor};
  cursor: ${props => props.cursor};
`

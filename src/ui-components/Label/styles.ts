import styled from 'styled-components'
import { ILabel } from './types'

export const LabelWrapper = styled.label<ILabel>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  font-family: ${props => props.fontFamily};
`

import styled from 'styled-components'
import { ITitleH2 } from './types'

export const TitleWrapper = styled.h2<ITitleH2>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
`

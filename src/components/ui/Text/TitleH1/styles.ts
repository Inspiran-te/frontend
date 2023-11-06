import styled from 'styled-components'
import { ITitleH1 } from './types'

export const TitleWrapper = styled.h1<ITitleH1>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
	text-align: ${props => props.textAlign};
`

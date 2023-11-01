import styled from 'styled-components'
import { ITitleInSection } from './types'

export const TitleSectionWrapper = styled.div<ITitleInSection>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
`

export const TitleText = styled.text<ITitleInSection>`
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
`

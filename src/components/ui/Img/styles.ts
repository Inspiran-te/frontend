import styled from 'styled-components'
import { IImage } from './types'

export const ImageWrapper = styled.img<IImage>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  font-family: ${props => props.fontFamily};
  width: ${props => props.width};
  height: ${props => props.height};
  src: ${props => props.src};
  alt: ${props => props.alt};
  box-shadow: ${props => props.boxShadow};
  border: ${props => props.border};
	cursor: ${props => props.cursor};
`

import styled from 'styled-components'
import { ISelect } from './types'

export const Select = styled.select<ISelect>`
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
  border: ${props => props.border};
  outline: ${props => props.outline};
  box-shadow: ${props => props.boxShadow};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
`

export const Options = styled.option<ISelect>`
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
border: ${props => props.border};
`
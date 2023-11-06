import styled from 'styled-components'
import { IHeaderProps } from './types'

export const HeaderWrapper = styled.header<IHeaderProps>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  background-color: ${(props) => props.backgroundColor};
  align-items: ${(props) => props.alignItems};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  border-radius: ${(props) => props.borderRadius || '0'};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  font-size: ${props => props.fontSize};
  justify-content: ${props => props.justifyContent};
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  box-sizing: ${props => props.boxSizing};
  text-align: ${props => props.textAlign};
  position: ${props => props.position};
  top: ${props => props.top};
`


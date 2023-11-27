import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ILinkHeader } from './types'
import { theme } from '../../../../theme/theme'

export const LinkHeader = styled(NavLink)<ILinkHeader>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  color: ${props => props.color};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  cursor: ${props => props.cursor};
  font-family: ${props => props.fontFamily};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  text-decoration: ${props => props.textDecoration};
  gap: ${props => props.gap};
  
  &.active {
    color: ${theme.colors.Primary_Purple};
  }
`

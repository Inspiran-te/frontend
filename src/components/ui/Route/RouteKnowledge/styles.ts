import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ILink } from './types'
import { theme } from '../../../../theme/theme'

export const Link = styled(NavLink)<ILink>`
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  font-size: ${props => props.fontSize};
  font-bold: ${props => props.fontBold};
  color: ${theme.colors.black};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  cursor: ${props => props.cursor};
  font-family: ${props => props.fontFamily};
	display: ${props => props.display};
	flex-direction: ${props => props.flexDirection};
	text-decoration: ${props => props.textDecoration};
  gap: ${props => props.gap};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  align-items: ${props => props.alignItems};

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.Primary_Purple};
}
`
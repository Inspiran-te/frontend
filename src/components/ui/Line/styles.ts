import { styled } from 'styled-components'
import { ILine } from './types'

export const Line = styled.div<ILine>`
  width: ${props => props.width};
  height: 2px;
  opacity: 0.1;
  background: ${props => props.theme.colors.grey};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom}
`
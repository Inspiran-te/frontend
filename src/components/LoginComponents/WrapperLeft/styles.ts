import { styled } from 'styled-components'
import { theme } from '../../../theme/theme'

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  margin-left: 40px;
  margin-right: 40px;
`

export const WrapperLeft = styled.div`
  width: 600px;
  height: 840px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  flex-direction: column;
  margin-left: 17px;
  box-sizing: border-box;
`
import { styled } from 'styled-components'
import { ContainerProps } from './types'
import { theme } from '../../theme/theme'

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div<ContainerProps>`
  min-width: 94%;
  padding: 20px;
  margin: 20px 40px 20px 40px;
  background-color: ${props => props.theme.colors.blue_light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`
export const WrapperLeft = styled.div`
  width: 600px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  flex-direction: column;
`

export const WrapperRight = styled.div`
  height: 235px;
  background-color: ${props => props.theme.colors.blue_light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 96px;
`

export const Image = styled.img`
  width: 92px;
  height: 92px;
  margin-bottom: 24px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

export const Line = styled.div`
  width: 440px;
  height: 2px;
  opacity: 0.1;
  background: ${props => props.theme.colors.grey};
  margin-top: 32px;
  margin-bottom: 32px
`




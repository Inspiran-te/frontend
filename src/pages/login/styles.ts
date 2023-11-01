import { styled } from 'styled-components'
import { ContainerProps } from './types'
import { theme } from '../../theme/theme'

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div<ContainerProps>`
  width: 95%;
  padding: 20px;
  margin: 20px 40px 20px 40px;
  background-color: ${props => props.theme.colors.blue_light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`
// export const WrapperLeft = styled.div`
//   width: 600px;
//   height: 840px;
//   background-color: ${props => props.theme.colors.white};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 40px;
//   flex-direction: column;
//   margin-left: 17px;
//   box-sizing: border-box;
// `

// export const WrapperRight = styled.div`
//   height: 235px;
//   background-color: ${props => props.theme.colors.blue_light};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   box-sizing: border-box;
// `

// export const Image = styled.img`
//   width: 92px;
//   height: 92px;
//   margin-bottom: 24px;
// `

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   gap: 8px;
//   margin-top: 16px;
//   margin-left: 40px;
//   margin-right: 40px;
// `
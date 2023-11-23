import { styled } from 'styled-components'
import { IContainerProps } from './types'

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`
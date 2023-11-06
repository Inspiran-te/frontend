import { styled } from 'styled-components'

export const WrapperRight = styled.div`
  background-color: ${props => props.theme.colors.blue_light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`

export const Image = styled.img`
  width: 92px;
  height: 92px;
  margin-bottom: 24px;
`
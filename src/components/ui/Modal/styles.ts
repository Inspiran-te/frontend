import { styled } from 'styled-components'
import { IModalProps, IModalContentProps } from './types'

export const ModalWrapper = styled.div<IModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div<IModalContentProps>`
  width: ${props => props.width};
  height: 820px;
  border-radius: 24px;
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || 'white'};
`;

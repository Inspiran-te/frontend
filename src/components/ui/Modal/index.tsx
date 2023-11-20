import * as SC from './styles'
import { FC } from 'react'
import { IModalProps } from './types'
import { ModalContent, ModalWrapper } from './styles'

export const Modal: FC<IModalProps> = ({ children, ...props }) => (
	<ModalWrapper>
		<ModalContent {...props}>{children}</ModalContent>
	</ModalWrapper>
);
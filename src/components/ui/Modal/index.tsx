import * as SC from './styles'
import { FC } from 'react'
import { IModalProps } from './types'

export const Modal: FC<IModalProps> = ({ children, ...props }) => (
	<SC.ModalWrapper>
		<SC.ModalContent {...props}>{children}</SC.ModalContent>
	</SC.ModalWrapper>
);
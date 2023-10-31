import { FC, ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'
import { IButtonProps } from './types'

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
	<ButtonWrapper {...props}>{children}</ButtonWrapper>
)
  

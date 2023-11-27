import React from 'react'

export interface IModalProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	borderRadius?: string;
	children?: React.ReactNode
	visible?: boolean;
	onClose?: () => void
}
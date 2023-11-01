import React from 'react'

export interface IContainerProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	borderRadius?: string;
	children?: React.ReactNode
}
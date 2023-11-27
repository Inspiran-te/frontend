import { ReactNode } from 'react'

export interface IButtonProps {
	title?: string;
	color?: string;
	margin?: string;
	marginBottom?: string;
	marginTop?: string;
	fontSize?: string;
	fontBold?: string;
	fontWeight?: string;
	fontFamily?: string;
	backgroundColor?: string;
	display?: string;
	alignItems?: string;
	flexDirection?: string;
	children?: ReactNode;
	borderRadius?: string;
	width?: string;
	height?: string;
	padding?: string;
	border?: string;
	justifyContent?: string;
	onClick?: () => void
	cursor?: string;
	disabled?: boolean
}
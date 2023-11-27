import { ReactNode } from 'react'

export interface IBlockProps {
	title?: string;
	color?: string;
	padding?: string;
	marginBottom?: string;
	marginTop?: string;
	backgroundColor?: string;
	display?: string;
	alignItems?: string;
	flexDirection?: string;
	children?: ReactNode;
	borderRadius?: string;
	width?: string;
	height?: string;
	border?: string;
	fontSize?: string
	fontFamily?: string;
	fontWeight?: string;
	justifyContent?: string;
	marginLeft?: string;
	marginRight?: string;
	boxSizing?: string;
	textAlign?: string;
	position?: string;
	top?: string;
	boxShadow?: string;
	borderBottom?: string;
	flexWrap?: string;
	gap?: string;
	onClick?: () => void;
	borderColor?: string
}
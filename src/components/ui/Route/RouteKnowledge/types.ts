import { ReactNode } from 'react'

export interface ILink {
	text?: string;
	color?: string | object;
	width?: string;
	marginBottom?: string;
	marginTop?: string;
	fontSize?: string;
	fontBold?: string;
	fontWeight?: string;
	fontFamily?: string;
	children?: ReactNode;
	textAlign?: string;
	marginRight?: string;
	cursor?: string;
	display?: string;
	flexDirection?: string
	to?: string;
	textDecoration?: string
	gap?: string;
	active?: boolean; 
	padding?: string;
	borderRadius?: string;
	alignItems?: string;
}
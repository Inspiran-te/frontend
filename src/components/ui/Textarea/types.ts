import { ReactNode } from 'react'

export interface ITextProps {
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
	rows?: string;
	cols?: string;
	placeholder?: string;
	name?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	marginRight?: string
	marginBottom?: string;
	marginTop?: string;
	backgroundColor?: string;
	border?: string;
	width?: string;
	height?: string;
	outline?: string;
	fontFamily?: string;
	fontSize?: string;
	padding?: string;
	borderRadius?: string;
	rows?: string;
	cols?: string;
	opacity?: string;
	zIndex?: number;
	cursor?: string;
}
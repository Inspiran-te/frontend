import { ReactNode } from "react";

export interface ILabel {
	text?: string;
	color?: string;
	marginBottom?: string;
	marginTop?: string;
	fontSize?: string;
	fontBold?: string;
	fontWeight?: string;
	fontFamily?: string;
	children?: ReactNode;
	htmlFor?: string;
	display?: string;
	alignItems?: string;
}
import { ReactNode } from "react";

export interface ISpan {
    text?: string;
    color?: string;
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
}
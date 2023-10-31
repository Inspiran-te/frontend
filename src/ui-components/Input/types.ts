import { InputHTMLAttributes, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    marginBottom?: string;
    marginTop?: string;
    backgroundColor?: string; 
    border?: string;
    width?: string;
    height?: string;
    outline?: string;
}
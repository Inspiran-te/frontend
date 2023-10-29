import { InputHTMLAttributes, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    forwardRef?: React.Ref<HTMLInputElement>;
    marginBottom?: string;
    marginTop?: string;
    backgroundColor?: string;
    ref: Ref<HTMLInputElement>
}
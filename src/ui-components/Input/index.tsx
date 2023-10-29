import React from "react";
import { forwardRef } from "react";
import { InputProps } from "./types";

export const Input = (props: InputProps) => <Input {...props} />;

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>((props) => (
    <Input {...props} />
));
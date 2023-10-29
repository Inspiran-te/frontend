import { ReactNode } from "react";

export interface IButtonProps {
    title?: string;
    color?: string; 
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
  }
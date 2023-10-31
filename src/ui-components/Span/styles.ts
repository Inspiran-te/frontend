import styled from "styled-components";
import { ISpan } from "./types";

export const SpanWrapper = styled.span<ISpan>`
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop}; 
    margin-right: ${props => props.marginRight}; 
    font-size: ${props => props.fontSize}; 
    font-bold: ${props => props.fontBold}; 
    color: ${props => props.color}; 
    width: ${props => props.width}; 
    text-align:  ${props => props.textAlign}; 
    cursor: ${props => props.cursor};
	  font-family: ${props => props.fontFamily};
`

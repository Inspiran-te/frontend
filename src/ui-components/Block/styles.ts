import styled from "styled-components";
import { IBlockProps } from "./types";

export const BlockWrapper = styled.button<IBlockProps>`
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    background-color: ${(props) => props.backgroundColor};
    align-items: ${(props) => props.alignItems};
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    border-radius: ${(props) => props.borderRadius || "0"};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width}; 
    height: ${(props) => props.height}; 
`


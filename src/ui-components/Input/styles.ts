import styled from "styled-components";
import { InputProps } from "./types";

export const InputWrapper = styled.button<InputProps>`
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    background-color: ${(props) => props.backgroundColor};  
`

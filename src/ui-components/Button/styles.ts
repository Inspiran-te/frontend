import styled from "styled-components";
import { IButtonProps } from "./types";

export const ButtonWrapper = styled.button<IButtonProps>`
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    background-color: ${(props) => props.backgroundColor};
    align-items: ${(props) => props.alignItems};
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    
`


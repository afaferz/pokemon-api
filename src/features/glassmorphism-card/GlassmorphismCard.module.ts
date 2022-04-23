import styled from "styled-components";
import { darken, lighten } from "polished";

import { devices } from "../../common/styles/Breakpoints";

interface ICardWrapperProps {
    bgColor?: string;
    height?: number;
    width?: number;
}
export const CardWrapper = styled.div<ICardWrapperProps>`
    background-color: ${(props) => props.bgColor};
    border-radius: 2%;
    border-top: 3px inset ${props => lighten(0.80, (props.bgColor!))};
    border-left: 3px outset ${props => darken(0.10, (props.bgColor!))};;
    border-bottom: 2px solid ${props => darken(0.10, (props.bgColor!))};
    border-right: 2px solid ${props => darken(0.20, (props.bgColor!))};
    box-shadow: -1px 1px 10px hsla(0, 12%, 7%, 0.761);
    box-sizing: border-box;
    height: ${(props) => props.height}px;
    padding: 1rem;
    width: ${(props) => props.height ? props.height : 300}px;
    @media only screen and ${devices.desktop} {
        height: ${(props) => props.height}px;
        width: ${(props) => props.height ? props.height : 300}px;
    }
`
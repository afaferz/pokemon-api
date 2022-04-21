import styled from "styled-components";

import { devices } from "../../common/styles/Breakpoints";

export const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.background};
    height: 20rem;
    width: 70%;
    border-radius: 2%;
    border-top: 3px inset hsla(197, 96%, 78%, 0.596);
    border-left: 3px outset hsla(197, 57%, 72%, 0.596);
    border-bottom: 2px solid hsla(197, 69%, 59%, 0.596);
    border-right: 2px solid hsla(197, 69%, 59%, 0.596);
    box-shadow: -3px 3px 10px hsla(0, 12%, 7%, 0.761);
    padding: 1rem;
    box-sizing: border-box;
    @media only screen and ${devices.desktop} {
        height: 20rem;
        width: 20%;
    }
`
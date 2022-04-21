import styled from "styled-components";
import { devices } from "./Breakpoints";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.background};
    max-width: 450px;
    margin: 0 auto;

    @media only screen and ${devices.tablet} {
        max-width: 600px;
    }
    @media only screen and ${devices.laptop} {
        max-width: 992px;
    }
    @media only screen and ${devices.desktop} {
        max-width: 1024px;
    }
    @media only screen and ${devices.other} {
        max-width: 1400px;
    }
`
import styled from "styled-components";
import { devices } from './Breakpoints'

interface RowProps {
    wrap?: boolean;
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`

interface ColProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    gap?: string;
}

export const Col = styled.div<ColProps>`
    float: left;
    padding: ${({ gap }) => gap ? gap : 0};
    ${({ xs }) => (xs ? GetWidth(xs) : "width: 100%")};

    @media only screen and ${devices.tablet} {
        ${({ sm }) => sm && GetWidth(sm)}
    }
    @media only screen and ${devices.laptop} {
        ${({ md }) => md && GetWidth(md)}
    }
    @media only screen and ${devices.desktop} {
        ${({ lg }) => lg && GetWidth(lg)}
    }
    @media only screen and ${devices.other} {
        ${({ xl }) => xl && GetWidth(xl)}
    }
`
function GetWidth(span: number) {
    if (!span) return
    const width = span / 12 * 100;
    return `width: ${width}% `;
}
import styled from "styled-components";

export const PaginationList = styled.ul`
    display: inline-flex;
    list-style-type: none;
`

interface PaginationItemProps {
    active?: boolean;
}
export const PaginationItem = styled.li<PaginationItemProps>`
    align-items: center;
    background-color: ${({ active }) => active ? 'purple' : 'red'};
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 2px 2px 7px #c3c3c3;
    color: #fefefe;
    cursor: pointer;
    display: flex;
    height: 2rem;
    justify-content: center;
    margin: 0 4px;
    padding: .75rem;
    text-align: center;
    text-shadow: 3px 3px -1px #fefefe;
    transition: .5s all;
    font-weight: 900;
    width: 2rem;

    &:first-of-type, &:last-of-type {
        background-color: transparent;
        padding: 0;
    }
    button {
        all: unset;
        background: red;
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }
`
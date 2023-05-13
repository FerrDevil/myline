"use client"
import styled from "styled-components"
import Link from "next/link"

export const NavigationLinksWrapper = styled.nav`
    height: 100%;
    text-align: center;
    cursor: pointer;
    background-color: #2e3441;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #ccc;
    }
`

export const NavigationLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    padding-inline: 10px;
    height: 100%;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.$isActive? "#fff" : "#2e3441"};
    transition: background-color 0.2s;

    &:hover{
        background-color: #ccc;
    }
`
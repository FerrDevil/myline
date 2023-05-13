"use client"
import Link from "next/link"
import styled from "styled-components"

export const NavigationMenuWrapper = styled.div`
    position: relative;
    height: 100%;
    background-color: #2e3441;
`

export const NavigationMenuToggleButton = styled.button`
    all: unset;
    width: 60px;
    height: 100%;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover{
        background-color: #ccc;
    }
`



export const NavigationMenuSidebar = styled.aside`
    width: 250px;
    position: absolute;
    left: 0;
    bottom: 100%;
    transform: translateY(${props => props.$isShown? "0" : "100"}%);
    transition: transform 0.4s;
    background-color: #2e3441dd;
    z-index: -1;
    display: grid;
    padding: 20px;
`

export const NavigationMenuSidebarContent = styled.nav`
    display: grid;
    padding: 20px;
`


export const NavigationMenuLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    cursor: pointer;
`

export const NavigationMenuLinkTitle = styled.span`
    font-size: 16px;
`
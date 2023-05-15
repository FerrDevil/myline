"use client"
import Link from "next/link"
import styled from "styled-components"

import MenuSVG from "@/public/menu.svg"

export const NavigationMenuWrapper = styled.div`
    position: relative;
    height: 100%;
    background-color: var(--color-main-gray);
`

export const NavigationMenuToggleButton = styled.button`
    all: unset;
    padding: 10px;
    box-sizing: border-box;
    height: 100%;
    aspect-ratio: 1;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.2s;
    display: grid;
    grid-template-rows: 1fr;
    place-items: center;

    &:hover{
        background-color: #73767E;
    }
    &:hover > svg{
        fill: #51CACD;
    }
`

export const NavigationMenuToggleButtonSVG = styled(MenuSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #F7F6F2;
    transition: fill 0.3s;
    
`



export const NavigationMenuSidebar = styled.aside`
    width: 250px;
    position: absolute;
    left: 0;
    bottom: 100%;
    transform: translateY(${props => props.$isShown? "0" : "100"}%);
    transition: transform 0.4s;
    background-color: var(--color-main-gray);
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
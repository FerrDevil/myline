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
    width: 280px;
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
    
    width: 100%;
`


export const NavigationMenuLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;
    padding: 10px;
    &:hover > span, &:focus-within > span{
        color: #51CACD;
    }
`

export const NavigationMenuLinkTitle = styled.span`
    font-size: 20px;
    color: #fff;
`
export const NavigationMenuLinkWrapper = styled.div`
    display: grid;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
`

export const NavigationMenuRegisterLink = styled(Link)`
    font-size: 16px;
    background-color: #61DAFB;
    color: #404342;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    font-weight: 600;

`

export const NavigationMenuLoginLink = styled(Link)`
    font-size: 16px;
    border: 1px solid #61DAFB;
    background-color: #404342;
    color: #61DAFB;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    font-weight: 600;

`

export const NavigationMenuFooter = styled.footer`
    display: grid;
    width: 100%;
    gap: 10px;
    margin-top: 40px;
`

export const NavigationMenuFooterText = styled.span`
    font-size: 16px;
    color: #fff;
`

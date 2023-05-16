"use client"
import styled from "styled-components"
import Link from "next/link"

import HomeSVG from "@/public/home.svg"
import CategorySVG from "@/public/sell.svg"
import AboutSVG from "@/public/about.svg"


export const NavigationLinksWrapper = styled.nav`
    
    cursor: pointer;
    background-color: var(--color-main-gray);
    transition: background-color 0.2s;
    display: flex;
`

export const NavigationLinkHint = styled.span`
    opacity: 0;
    pointer-events: none;
    user-select: none;
    position: absolute; 
    bottom: 100%;
    padding: 5px 10px;
    color: #F7F6F2;
    background-color: var(--color-main-gray);
    transition: background-color 0.2s;
    display: flex;
    white-space: nowrap;
`

export const NavigationLink = styled(Link)`
    padding: 10px;
    position: relative;
    text-align: center;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${props => props.$isActive? "#F7F6F2" : "var(--color-main-gray)"};
    transition: background-color 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    & > svg{
        fill: ${props => props.$isActive? "#51CACD" : "#F7F6F2"};
    }

    &:hover, &:focus-within{
        outline: 1px solid transparent;
        background-color: #73767E;
    }

    
    &:hover > svg{
        fill: #51CACD;
    }

    &:hover > ${NavigationLinkHint}{
        opacity: 1;
        pointer-events: all;
        user-select: all;
        transition: opacity 0s 1s ease-in;
    }
    &:focus-within > ${NavigationLinkHint}{
        opacity: 1;
        pointer-events: all;
        user-select: all;
    }
`


export const NavigationHomeLinkSVG = styled(HomeSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #F7F6F2;
    transition: fill 0.3s;

`

export const NavigationCategoryLinkSVG = styled(CategorySVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #F7F6F2;
    transition: fill 0.3s;
`

export const NavigationAboutLinkSVG = styled(AboutSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: #F7F6F2;
    transition: fill 0.3s;
`


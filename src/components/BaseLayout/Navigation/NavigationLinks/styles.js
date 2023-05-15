"use client"
import styled from "styled-components"
import Link from "next/link"

import HomeSVG from "@/public/home.svg"
import CategorySVG from "@/public/sell.svg"


export const NavigationLinksWrapper = styled.nav`
    
    cursor: pointer;
    background-color: var(--color-main-gray);
    transition: background-color 0.2s;
    display: flex;
`

export const NavigationLink = styled(Link)`
    padding: 10px;
    
    text-align: center;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${props => props.$isActive? "#F7F6F2" : "var(--color-main-gray)"};
    transition: background-color 0.2s;
    display: block;
    

    & > svg{
        fill: ${props => props.$isActive? "#51CACD" : "#F7F6F2"};
    }

    &:hover{
        background-color: #73767E;
    }

    
    &:hover > svg{
        fill: #51CACD;
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


"use client"
import styled from "styled-components"
import Image from "next/image"

export const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns:  60px 1fr;
    place-items: center;
    padding-inline: 20px;
    width: 100%;
    height: 60px;
    background-image: linear-gradient( 90deg, #51CACD 0%, #61DAFB 50%);
    
`
export const HeaderLogoWrapper = styled.div`
    width: 60px;
    height: 50px;
    position: relative;
`

export const HeaderLogo = styled(Image).attrs(() => ({
    src: "/myline-logo.png",
    fill: true,
    alt: "logo",
    loading: "eager",
    sizes: "100vw"
}))`
    object-fit: contain;
    
`

export const HeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #F7F6F2;
    
`

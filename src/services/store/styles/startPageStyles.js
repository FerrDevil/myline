"use client"
import styled from "styled-components"

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
    object-fit: cover;
    margin: auto;
    z-index: -1000;
    user-select: none;
    pointer-events: none;
`
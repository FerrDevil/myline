"use client"
import styled from "styled-components"

export const NavigationWrapper = styled.nav`
    --height: 60px;
    display: grid;
    grid-template-columns: var(--height) 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: var(--height);
    background-color: var(--color-main-gray);
    isolation: isolate;
`
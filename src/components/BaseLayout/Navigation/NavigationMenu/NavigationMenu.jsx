"use client"
import { useState } from "react"
import { NavigationMenuLink, NavigationMenuLinkTitle, NavigationMenuSidebar, NavigationMenuSidebarContent, NavigationMenuToggleButton, NavigationMenuWrapper, NavigationMenuToggleButtonSVG } from "./styles"


const NavigationMenu = () => {

    const [isShown, setShown] = useState(false)
    return (
        <NavigationMenuWrapper>
            <NavigationMenuToggleButton onClick={() => {setShown(prev => !prev)}}>
                <NavigationMenuToggleButtonSVG/>
            </NavigationMenuToggleButton>
            <NavigationMenuSidebar $isShown={isShown}>
                <NavigationMenuSidebarContent>
                    <NavigationMenuLink href="/" onClick={() => {setShown(false)}}>
                        <NavigationMenuLinkTitle>Главная</NavigationMenuLinkTitle>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/categories" onClick={() => {setShown(false)}}>
                        <NavigationMenuLinkTitle>Категории</NavigationMenuLinkTitle>
                    </NavigationMenuLink>
                </NavigationMenuSidebarContent>
            </NavigationMenuSidebar>
        </NavigationMenuWrapper>
    )
}

export default NavigationMenu
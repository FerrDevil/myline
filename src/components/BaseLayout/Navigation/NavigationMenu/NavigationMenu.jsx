"use client"
import { useState } from "react"
import { NavigationMenuLink, NavigationMenuLinkTitle, NavigationMenuSidebar, NavigationMenuSidebarContent, NavigationMenuToggleButton, NavigationMenuWrapper, NavigationMenuToggleButtonSVG, NavigationMenuLinkWrapper, NavigationMenuRegisterLink, NavigationMenuLoginLink, NavigationMenuFooter, NavigationMenuFooterText } from "./styles"


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
                    <NavigationMenuLink href="/about" onClick={() => {setShown(false)}}>
                        <NavigationMenuLinkTitle>О компании</NavigationMenuLinkTitle>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/catalog" onClick={() => {setShown(false)}}>
                        <NavigationMenuLinkTitle>Каталог</NavigationMenuLinkTitle>
                    </NavigationMenuLink>
                    <NavigationMenuLinkWrapper>
                        <NavigationMenuRegisterLink href="/register">
                            Зарегистрироваться
                        </NavigationMenuRegisterLink>
                        <NavigationMenuLoginLink href="/login">
                            Войти
                        </NavigationMenuLoginLink>
                    </NavigationMenuLinkWrapper>
                    <NavigationMenuFooter>
                        <NavigationMenuFooterText>
                            © МАЙЛАЙН, 2023
                        </NavigationMenuFooterText>
                    </NavigationMenuFooter>
                    
                </NavigationMenuSidebarContent>
            </NavigationMenuSidebar>
        </NavigationMenuWrapper>
    )
}

export default NavigationMenu
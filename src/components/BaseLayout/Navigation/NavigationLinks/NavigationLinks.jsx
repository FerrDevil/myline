"use client"
import { usePathname } from "next/navigation"
import { NavigationCategoryLinkSVG, NavigationHomeLinkSVG, NavigationLink, NavigationLinksWrapper, NavigationAboutLinkSVG, NavigationLinkHint } from "./styles"



const NavigationLinks = () => {
    const pathname = usePathname()

    return (
        <NavigationLinksWrapper>
            <NavigationLink $isActive={ pathname === "/" }  href="/">
                <NavigationHomeLinkSVG/>
                <NavigationLinkHint>Главная</NavigationLinkHint>
            </NavigationLink>
            <NavigationLink $isActive={ pathname === "/about" }  href="/about">
                <NavigationAboutLinkSVG/>
                <NavigationLinkHint>О нас</NavigationLinkHint>
            </NavigationLink>
            <NavigationLink $isActive={ pathname === "/catalog" }  href="/catalog">
                <NavigationCategoryLinkSVG/>
                <NavigationLinkHint>Каталог</NavigationLinkHint>
            </NavigationLink>
        </NavigationLinksWrapper>
    )
}

export default NavigationLinks
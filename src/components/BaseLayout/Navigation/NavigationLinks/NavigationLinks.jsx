"use client"
import { usePathname } from "next/navigation"
import { NavigationCategoryLinkSVG, NavigationHomeLinkSVG, NavigationLink, NavigationLinksWrapper } from "./styles"



const NavigationLinks = () => {
    const pathname = usePathname()

    return (
        <NavigationLinksWrapper>
            <NavigationLink $isActive={"/" === pathname}  href="/">
                <NavigationHomeLinkSVG/>
            </NavigationLink>
            <NavigationLink $isActive={"/categories" === pathname}  href="/categories">
                <NavigationCategoryLinkSVG/>
            </NavigationLink>
        </NavigationLinksWrapper>
    )
}

export default NavigationLinks
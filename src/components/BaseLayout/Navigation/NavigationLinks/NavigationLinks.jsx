"use client"
import { usePathname } from "next/navigation"
import { NavigationLink, NavigationLinksWrapper } from "./styles"

const NavigationLinks = () => {
    const pathname = usePathname()
    

    const availableLinks = [
        {
           link: "/",
           title: "Главная",
           image: "",
        },
        {
            link: "/categories",
            title: "Категории",
            image: "",
         }
    ]

    return (
        <NavigationLinksWrapper>
            {availableLinks.map((link, linkIndex) => (
                <NavigationLink $isActive={link.link === pathname} key={linkIndex} href={link.link}>
                    {link.title}
                </NavigationLink>
            ))}
        </NavigationLinksWrapper>
    )
}

export default NavigationLinks
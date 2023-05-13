import NavigationLinks from "./NavigationLinks/NavigationLinks"
import NavigationMenu from "./NavigationMenu/NavigationMenu"
import { NavigationWrapper } from "./styles"

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationMenu/>
            <NavigationLinks/>
        </NavigationWrapper>
    )
}

export default Navigation
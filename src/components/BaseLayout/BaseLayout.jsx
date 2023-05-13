import { Main } from "./styles"
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation"

const BaseLayout = ({children}) => {
    return (
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            <Navigation/>
        </>
        
    )
}

export default BaseLayout
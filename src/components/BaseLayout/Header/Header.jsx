import { HeaderLogo, HeaderLogoWrapper, HeaderTitle, HeaderWrapper } from "./styles"

const Header = () => {
    
    return(
        <HeaderWrapper>
            <HeaderLogoWrapper>
                <HeaderLogo/>
            </HeaderLogoWrapper>
            <HeaderTitle>
                Программа Красивых Зубов
            </HeaderTitle>
            <div></div>
        </HeaderWrapper>
    )
}

export default Header
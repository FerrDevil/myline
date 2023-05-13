import { HeaderTitle, HeaderWrapper } from "./styles"

const Header = () => {
    const titles = [
        {
            link: "",
            title: "Главная"
        }
    ]
    return(
        <HeaderWrapper>
            <HeaderTitle>
                {titles[0].title}
            </HeaderTitle>
        </HeaderWrapper>
    )
}

export default Header
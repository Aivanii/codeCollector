import { HeaderContainer, Img, ImgHolder, AccountBtnsContainer, Btn, AccountBtnSignUp, ListContainer, ListElem } from "./HeaderStyles"

const isLogged = false;

export default function Header() {
    return (
        <HeaderContainer>
            <ImgHolder href="/">
                <Img src="https://i.postimg.cc/k5bY4r07/logo.png"></Img>
            </ImgHolder>
            <nav>
                <ListContainer>
                    <ListElem>
                        <Btn href = "/home">
                            Home
                        </Btn>
                    </ListElem>
                    <ListElem>
                        <Btn href = "/catalog">
                            Catalog
                        </Btn>
                    </ListElem>
                    <ListElem>
                        <Btn>
                            About
                        </Btn>
                    </ListElem>
                    <ListElem>
                        <Btn>
                            Help
                        </Btn>
                    </ListElem>
                </ListContainer>
            </nav>
            {!isLogged
                ? <AccountBtnsContainer>
                    <Btn href="#">LOGIN</Btn>
                    <AccountBtnSignUp href="#">SIGN UP</AccountBtnSignUp>
                </AccountBtnsContainer>
                :
                <  ></  >
            }

        </HeaderContainer>
    );
}
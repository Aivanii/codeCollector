import { HeaderContainer, Img, ImgHolder, AccountBtnsContainer, Btn, AccountBtnSignUp, ListContainer, ListElem } from "./HeaderStyles"

const isLogged = false;

export default function Header() {
    return (
        <HeaderContainer>
            <ImgHolder href="/">
                <Img src="../icons/logo.png"></Img>
            </ImgHolder>

                <ListContainer>
                    <ListElem>
                        <Btn>
                            Home
                        </Btn>
                    </ListElem>
                    <ListElem>
                        <Btn>
                            Catalogue
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
                
            {!isLogged
                ? <AccountBtnsContainer>
                    <Btn href="#">LOGIN</Btn>
                    <AccountBtnSignUp href="#">SIGN UP</AccountBtnSignUp>
                </AccountBtnsContainer>
                :
                <></>
            }

        </HeaderContainer>
    );
}
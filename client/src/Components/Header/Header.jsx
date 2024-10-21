import { useEffect, useState } from "react";
import {
    HeaderContainer, Img, ImgHolder, AccountBtnsContainer, Btn, AccountBtnSignUp, ListContainer,
    ListElem, AuthorizationContainer, InputData, Label, SubmitBtn, Hr, AuthSpan, DarkDiv
} from "./HeaderStyles"

const isLogged = false;

export default function Header() {

    const [activeForm, setActiveForm] = useState(null);

    const changeTransformActiveForm = (event) => {
        if (!document.getElementById(activeForm).contains(event.target) &&
            !document.getElementById("LogInPanel").contains(event.target)) {
            setActiveForm(null);
        }
    };

    useEffect(() => {

        const AuthForm = document.querySelector("#AuthForm");
        const SignForm = document.querySelector("#SignForm");
        const DarkDiv = document.querySelector("#DarkDiv");
        AuthForm.style.marginTop = "0";
        SignForm.style.marginTop = "0";
        DarkDiv.style.background = "none";
        if (!activeForm) return;

        if (activeForm === "AuthForm") {
            AuthForm.style.marginTop = "35%";
            document.addEventListener("click", changeTransformActiveForm);
        }
        if (activeForm === "SignForm") {
            SignForm.style.marginTop = "35%";
            document.addEventListener("click", changeTransformActiveForm);
        }
        DarkDiv.style.background = "#00000086";
        return () => {
            document.removeEventListener("click", changeTransformActiveForm);
        };
    }, [activeForm]);

    return (
        <>
            <HeaderContainer>
                <ImgHolder href="/">
                    <Img src="https://i.postimg.cc/k5bY4r07/logo.png"></Img>
                </ImgHolder>
                <nav>
                    <ListContainer>
                        <ListElem>
                            <Btn href="/home">
                                Home
                            </Btn>
                        </ListElem>
                        <ListElem>
                            <Btn href="/catalog">
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
                    ? <AccountBtnsContainer id="LogInPanel">
                        <Btn href="#" onClick={() => { setActiveForm("AuthForm") }}>LOGIN</Btn>
                        <AccountBtnSignUp href="#" onClick={() => { setActiveForm("SignForm") }}>SIGN UP</AccountBtnSignUp>
                    </AccountBtnsContainer>
                    :
                    <  ></  >
                }

            </HeaderContainer>
            <AuthorizationContainer id="AuthForm">
                <AuthSpan>Авторизация</AuthSpan>
                <Hr></Hr>
                <Label htmlFor="authUsername">Имя пользователя:</Label>
                <InputData type="text" id="authUsername" name="authUsername"></InputData>
                <br></br>
                <Label htmlFor="authPassword">Пароль:</Label>
                <InputData type="password" id="authPassword" name="authPassword"></InputData>
                <br></br>
                <Hr></Hr>
                <AuthSpan id="AuthStatusSpan"></AuthSpan>
                <SubmitBtn type="submit">Подтвердить</SubmitBtn>
            </AuthorizationContainer>
            <AuthorizationContainer id="SignForm">
                <AuthSpan>Регистрация</AuthSpan>
                <Hr></Hr>
                <Label htmlFor="SignUsername">Имя пользователя:</Label>
                <InputData type="text" id="SignUsername" name="SignUsername"></InputData>
                <br></br>
                <Label htmlFor="SignEmail">Почта:</Label>
                <InputData type="email" id="SignEmail" name="SignEmail"></InputData>
                <br></br>
                <Label htmlFor="SignPassword">Пароль:</Label>
                <InputData type="password" id="SignPassword" name="SignPassword"></InputData>
                <br></br>
                <Hr></Hr>
                <AuthSpan id="AuthStatusSpan"></AuthSpan>
                <SubmitBtn type="submit">Подтвердить</SubmitBtn>
            </AuthorizationContainer>
            <DarkDiv id="DarkDiv"></DarkDiv>
        </>
    );
}
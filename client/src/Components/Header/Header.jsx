import { useEffect, useState } from "react";
import axios from 'axios';
import {
    HeaderContainer, Img, ImgHolder, AccountBtnsContainer, Btn, AccountBtnSignUp, ListContainer,
    ListElem, AuthorizationContainer, InputData, Label, SubmitBtn, Hr, AuthSpan, DarkDiv
} from "./HeaderStyles"
import SendAuthData from "./SendAuthData";

export default function Header() {
    let isLogged = false;
    let url = new URL(window.location.href).pathname;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                alert("тут должна будет быть проверка на вход пользователя", response);
            } catch {
                alert("ошибка загрузки данных");
            }
        };
        fetchData();
    }, []);

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
        AuthForm.style.top = "0";
        SignForm.style.top = "0";
        DarkDiv.style.background = "none";
        if (!activeForm) return;

        if (activeForm === "AuthForm") {
            AuthForm.style.top = "50%";
            document.addEventListener("click", changeTransformActiveForm);
        }
        if (activeForm === "SignForm") {
            SignForm.style.top = "50%";
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
                        <Btn onClick={() => { setActiveForm("AuthForm") }}>LOGIN</Btn>
                        <AccountBtnSignUp onClick={() => { setActiveForm("SignForm") }}>SIGN UP</AccountBtnSignUp>
                    </AccountBtnsContainer>
                    :
                    <>
                        <span>тут должно быть
                            <br></br>
                            изображение пользователя</span>
                    </>
                }

            </HeaderContainer>
            <AuthorizationContainer id="AuthForm">
                <AuthSpan>Авторизация</AuthSpan>
                <Hr></Hr>
                <Label htmlFor="authUsername">Имя пользователя:</Label>
                <InputData type="text" id="authUsername" name="authUsername" required></InputData>
                <br></br>
                <Label htmlFor="authPassword">Пароль:</Label>
                <InputData type="password" id="authPassword" name="authPassword" required></InputData>
                <br></br>
                <Hr></Hr>
                <AuthSpan id="AuthStatusSpan"></AuthSpan>
                <SubmitBtn onClick={(event) => { SendAuthData(event, "log") }}>Подтвердить</SubmitBtn>
            </AuthorizationContainer>
            <AuthorizationContainer id="SignForm">
                <AuthSpan>Регистрация</AuthSpan>
                <Hr></Hr>
                <Label htmlFor="SignUsername">Имя пользователя:</Label>
                <InputData type="text" id="SignUsername" name="SignUsername" required></InputData>
                <br></br>
                <Label htmlFor="SignEmail">Почта:</Label>
                <InputData type="email" id="SignEmail" name="SignEmail" required></InputData>
                <br></br>
                <Label htmlFor="SignPassword">Пароль:</Label>
                <InputData type="password" id="SignPassword" name="SignPassword" required></InputData>
                <br></br>
                <Hr></Hr>
                <AuthSpan id="SignStatusSpan"></AuthSpan>
                <SubmitBtn onClick={(event) => { SendAuthData(event, "reg") }}>Подтвердить</SubmitBtn>
            </AuthorizationContainer>
            <DarkDiv id="DarkDiv"></DarkDiv>
        </>
    );
}
import { Container, Label, Input, SubContainer, ImgContainer, Img } from "./MainUserStyles";
import { useState } from "react";
import SendUserNewData from "./SendUserNewData";
export default function MainUser() {
    const [userName, setUserName] = useState("UserName");
    const [userEmail, setUserEmail] = useState("example@mail.ru");
    return (
        <Container>
            <SubContainer>
                <ImgContainer>
                    <Img src="https://images.hdqwalls.com/download/anonymus-cyber-guy-p3-1336x768.jpg"
                        alt="Изображение пользовательского аватара" />
                </ImgContainer>
            </SubContainer>
            <SubContainer>
                <Label htmlFor="UserUsername">Имя пользователя: </Label>
                <Input type="text" id="UserUsername" name="UserUsername"
                    value={userName} 
                    onChange = {(e) => {setUserName(e.target.value)}}
                    onBlur = {(e) => {SendUserNewData(0, "name", e.target.value)}}>
                </Input>
                <Label htmlFor="UserEmail">Почта пользователя: </Label>
                <Input type="text" id="UserEmail" name="UserEmail"
                    value={userEmail} onChange = {(e) => {setUserEmail(e.target.value)}}>
                </Input>
            </SubContainer>
        </Container>
    );
}
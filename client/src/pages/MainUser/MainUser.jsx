import { Container, Label, Input, SubContainer, ImgContainer, Img } from "./MainUserStyles";
import { useState, useEffect } from "react";
import axios from 'axios';
import SendUserNewData from "./SendUserNewData";
export default function MainUser() {
    const [userName, setUserName] = useState("Loading...");
    const [userEmail, setUserEmail] = useState("Данные не передаются");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
                setUserName(response.data.users);
            } catch {
                alert("ошибка загрузки данных");
            }
        };
        fetchData();
    }, []);
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
                    onChange={(e) => { setUserName(e.target.value) }}
                    onBlur={(e) => { SendUserNewData(0, "name", e.target.value) }}>
                </Input>
                <Label htmlFor="UserEmail">Почта пользователя: </Label>
                <Input type="text" id="UserEmail" name="UserEmail"
                    value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }}>
                </Input>
            </SubContainer>
        </Container>
    );
}
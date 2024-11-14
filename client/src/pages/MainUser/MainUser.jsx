import { Container, Label, Input, SubContainer, ImgContainer, Img, BtnSendImg, Btn } from "./MainUserStyles";
import { useState, useEffect } from "react";
import axios from 'axios';
import SendUserNewData from "./SendUserNewData";
import Deletesessia from "./DeleteSessia";
export default function MainUser() {
    const [userdata, setUserdata] = useState({ name: "loading", email: "loading" });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
                if (response.data.isLogged) {
                    console.log(response.data);
                    setUserdata(response.data);
                    return;
                }
                setUserdata({ isLogged: false });
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
                    <Img src={userdata.imgAdress}
                        alt="Изображение пользовательского аватара" />
                        <BtnSendImg 
                        type="file" 
                        id="imageInput" 
                        accept="image/*"
                        onChange = {() => SendUserNewData(
                            userdata.id,
                            "avatar",
                            document.getElementById('imageInput').files[0]
                        )}/>
                </ImgContainer>
            </SubContainer>
            <SubContainer>
                <Label htmlFor="User Username">Имя пользователя: </Label>
                <Input
                    type="text"
                    id="User Username"
                    name="User Username"
                    value={userdata.name}
                    onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
                    onBlur={(e) => SendUserNewData(userdata.id, "name", e.target.value)}
                />

                <Label htmlFor="User Email">Почта пользователя: </Label>
                <Input
                    type="text"
                    id="User Email"
                    name="User Email"
                    value={userdata.email}
                    onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                    onBlur={(e) => SendUserNewData(userdata.id, "email", e.target.value)}
                />

                <Btn onClick = {() => {Deletesessia()}}>Выйти из аккаунта</Btn>
            </SubContainer>
        </Container>
    );
}
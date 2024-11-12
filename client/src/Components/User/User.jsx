import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { AbsoluteFooter } from "../Footer/Footer";
import axios from 'axios';
import { Main, LeftDiv, RightDiv, TitleElem } from "./UserStyles";
import LeftMenuItems from "./LeftMenuItems";
import BgCircles from "../BackgroundCirclies/BgCircles";
import LoadingElem from "../Articles/LoadingElem";
import ErrorElem from "../Articles/ErrorElem";

export default function User({ RightMenu, Title = "Заголовок" }) {

    const [userData, setUserdata] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
                if (response.data.isLogged) {
                    setUserdata(response.data);
                    return;
                }
                setUserdata({ isLogged: false });
            } catch {
                alert("ошибка загрузки данных");
            }
        };
        const time = Math.floor((Math.random() * 30000 % 10000));
        console.log(`Задержка скачивания: ${time / 1000}s\n(Удалить потом эту строчку когда-нибудь)`)
        setTimeout(fetchData, time);
    }, []);
    return (
        <>
            <Header></Header>
            {
                (userData.isLogged)
                    ?
                    ((userData.id === +window.location.href.split("/")[4])
                        ?
                        <>
                            <Main>
                                <LeftDiv>
                                    <LeftMenuItems></LeftMenuItems>
                                </LeftDiv>
                                <RightDiv>
                                    <TitleElem>
                                        {Title}
                                    </TitleElem>
                                    <RightMenu />
                                </RightDiv>
                            </Main>
                            <Footer></Footer>
                        </>
                        :
                        <>
                            <ErrorElem text="Попытка входа в профиль другого пользователя" />
                            <AbsoluteFooter></AbsoluteFooter>
                        </>)
                    :
                    <>
                        <LoadingElem />
                        <AbsoluteFooter></AbsoluteFooter>
                    </>
            }
            <BgCircles></BgCircles>
        </>
    );
}
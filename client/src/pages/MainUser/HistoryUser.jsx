import { useState, useEffect } from "react";
import { Btn, Container, BtnContainer, FilterContainer, Ul, Li, Link } from "./HistoryStyles";
import { LoadingElemRelative } from "../../Components/Articles/LoadingElem";
import { ErrorElemRelative } from "../../Components/Articles/ErrorElem";
import axios from 'axios';

export default function HistoryUser() {
    const [historyContainers, setHistoryContainers] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState("loading");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
                //setHistoryContainers(response.data); 
                setLoadingStatus("success");
            } catch {
                setLoadingStatus("failed");
            }
        };
        fetchData();
    }, []);
    //<ErrorElem text="Попытка входа в профиль другого пользователя" />

    let Containers = historyContainers.map((item, index) => {
        const url1 = "/articles/" + item[0].themeFilters[0];
        const url2 = "/articles/" + item[0].themeFilters[0] + "/" + item[0].themeFilters[1];
        return (
            <BtnContainer key={index}>
                <FilterContainer>
                    <Ul>
                        <Li>
                            <Link href="/">Home</Link>
                        </Li>
                        ❯
                        <Li>
                            <Link href={url1}>{item[0].themeFilters[0]}</Link>
                        </Li>
                        ❯
                        <Li>
                            <Link href={url2}>{item[0].themeFilters[1]}</Link>
                        </Li>
                    </Ul>
                </FilterContainer>
                <Btn>{item[0].themeName}</Btn>
            </BtnContainer>
        );
    });
    return (
        <Container>
            {loadingStatus === "loading" ? (
                <LoadingElemRelative />
            ) : loadingStatus === "failed" ? (
                <ErrorElemRelative />
            ) : (
                <>
                    {(Containers.length === 0)
                        ?
                        <ErrorElemRelative text="Нет данных истории" />
                        :
                        (<>
                            {Containers}
                        </>)
                    }
                </>
            )}

        </Container>);
}
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingElem from "../Articles/LoadingElem";
import ErrorElem from "../Articles/ErrorElem";
import Footer from "../Footer/Footer";
import axios from 'axios';
import { Link } from "../TwoFiltersPage/TwoFiltersPageStyles";
import { Container } from "../TwoFiltersPage/TwoFiltersPageStyles";

export default function Search() {
    const { request } = useParams();
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/search/${request}`, { withCredentials: true });
                console.log(response.data);
                if (response) {
                    setData(response.data);
                }
                else {
                    setData([]);
                }
                setLoadingStatus("success");
            } catch (err) {
                console.error(err);
                alert("ошибка загрузки данных");
                setLoadingStatus("failed");
            }
        };
        fetchData();
    }, []);
    if (loadingStatus === "loading") return (
        <>
            <main>
                <LoadingElem />
            </main>
            <Footer />

        </>
    );
    if (loadingStatus === "failed") return (
        <>
            <main>
                <ErrorElem />
            </main>
            <Footer />
        </>
    );
    return (
        <>
            <main>
                {
                    data.length === 0 ? (
                        <>
                            <ErrorElem text="Нет элементов, соответствующих поиску" />
                        </>
                    ) :
                        (
                            <Container>
                                {data.map((elem, index) => {
                                    if (index === 0) {
                                        return (
                                            <div key={index}>
                                                <div className="TopContainer">
                                                    <div className="FlexContainer">
                                                        <ul className="TopUl">
                                                            <li className="TopLi">
                                                                <a className="TopLiLink" href="/home">Home</a>
                                                            </li>
                                                            {(elem[0]) && (
                                                                <li className="TopLi">
                                                                    <a className="TopLiLink" href={"/articles/" + elem[0]}>{elem[0]}</a>
                                                                </li>)

                                                            }
                                                            {elem[1] && (
                                                                <li className="TopLi">
                                                                    <a className="TopLiLink" href={"/articles/" + elem[0] + "/" + elem[1]}>{elem[1]}</a>
                                                                </li>)
                                                            }

                                                        </ul>
                                                    </div>
                                                </div>
                                                <br></br>
                                            </div>
                                        );
                                    }
                                    return <Link key={index} href={elem.href}>{elem.title.replace(/_/g, " ")}</Link>
                                })}
                            </Container>
                        )
                }
            </main >
            <Footer />
        </>
    );
}
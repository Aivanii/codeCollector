import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingElem from "../Articles/LoadingElem";
import ErrorElem from "../Articles/ErrorElem";
import Footer from "../Footer/Footer";
import { AbsoluteFooter } from "../Footer/Footer";
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
                if (response) {
                    setData(response.data.users[0]);
                }
                else {
                    setData([]);
                }
                setLoadingStatus("success");
            } catch {
                alert("ошибка загрузки данных");
                setLoadingStatus("failed");
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {
                loadingStatus === "loading" ? (
                    <>
                        <LoadingElem />
                        <AbsoluteFooter />
                    </>
                ) : loadingStatus === "failed" ? (
                    <>
                        <ErrorElem />
                        <AbsoluteFooter />
                    </>
                ) : data.length === 0 ? (
                    <>
                        <ErrorElem text="Нет элементов, соответствующих поиску" />
                        <AbsoluteFooter />
                    </>
                ) :
                    (
                        <Container>
                            {data.map((elem, index) => {
                                return <Link key={index} href = {elem.href}>{elem.title.replace(/_/g, " ")}</Link>
                            })}
                            <Footer />
                        </Container>
                    )
            }
        </>
    );
}
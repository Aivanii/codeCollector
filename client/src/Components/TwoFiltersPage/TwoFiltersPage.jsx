import { Container, Span } from "./TwoFiltersPageStyles";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingElem from "../Articles/LoadingElem";
import Footer from "../Footer/Footer";
import ErrorElem from "../Articles/ErrorElem";
export default function TwoFiltersPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let url = new URL(window.location.href).pathname;
    url = url.split('/');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}`);
                setData(response.data.users);
            } catch {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {error ? (
                <ErrorElem/>
            ) : loading ?
                <LoadingElem />
                : (
                    <>
                        <Container>
                            <Span style = {{color: "lime"}}>Данные получены успешно!</Span>
                        </Container>
                        <Footer />
                    </>
                )}

        </>
    );
}
import { Container, Link, Span } from "./TwoFiltersPageStyles";
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
<<<<<<< HEAD
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}`);
=======
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}`, {withCredentials: true});
>>>>>>> da96dfce048c911be57c190f10c6f3c755007c07
                setData(response.data.users[0]);
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
            <div className="TopContainer">
                <div className="FlexContainer">
                    <ul className="TopUl">
                        <li className="TopLi">
                            <a className="TopLiLink" href="/home">Home</a>
                        </li>
                        <li className="TopLi">
                            <a className="TopLiLink" href={"/articles/" + url[2]}>{url[2].replace(/_/g, " ")}</a>
                        </li>
                        <li className="TopLi">
                            <a className="TopLiLink" href={"/articles/" + url[2] + "/" + url[3]}>{url[3].replace(/_/g, " ")}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br></br>
            {error ? (
                <ErrorElem />
            ) : loading ?
                <LoadingElem />
                : (
                    <>
                        <Container>
                            {
                                (data.length > 0)
                                    ?
                                    (data.map((elem, index) => {
                                        return <Link key={index} href={`/articles/${url[2]}/${url[3]}/` + elem}>{elem.replace(/_/g, " ")}</Link>
                                    }))
                                    :
                                    <>
                                        <br></br>
                                        <Span>
                                            Статей по выбранной технологии на данный момент нет.
                                            Приносим свои искренние извинения. Нам очень важно благополучие
                                            наших пользователей, так что мы в скорейшем времени
                                            приложим все возможные усилия для устранения этих неполадок!
                                        </Span>
                                    </>
                            }

                        </Container>
                        <Footer />
                    </>
                )}

        </>
    );
}
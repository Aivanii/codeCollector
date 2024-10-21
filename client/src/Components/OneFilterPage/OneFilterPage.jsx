import { Container, Link, Span } from "../TwoFiltersPage/TwoFiltersPageStyles";
import { useEffect, useState } from 'react';
import Footer from "../Footer/Footer";
import axios from 'axios';
import LoadingElem from "../Articles/LoadingElem";
import ErrorElem from "../Articles/ErrorElem";
export default function OneFilterPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let url = new URL(window.location.href).pathname;
    url = url.split('/');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}`);
                setData(response.data.users[0]);
            } catch {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };
        setTimeout(fetchData(), 2000);
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
                        {
                            (data.length > 0)
                                ?
                                (data.map((elem, index) => {
                                    return <Link key={index} href={`/articles/${url[2]}/` + elem}>{elem.replace(/_/g, " ")}</Link>
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
                        <Footer />
                    </>
                )}

        </>
    );
}
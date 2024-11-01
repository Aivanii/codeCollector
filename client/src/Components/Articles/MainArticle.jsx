import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingElem from './LoadingElem';
import Footer from '../Footer/Footer';
import ErrorElem from './ErrorElem';
export default function MainArticle() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let url = new URL(window.location.href).pathname;
    url = url.split('/');
    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}/${url[4]}`);
                setData(response.data.users);
=======
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}/${url[4]}`, {withCredentials: true});
                setData(response.data.users[0]);
>>>>>>> da96dfce048c911be57c190f10c6f3c755007c07
            } catch {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };
        const time = Math.floor((Math.random() * 30000 % 10000));
        console.log(`Задержка скачивания: ${time / 1000}s\n(Удалить потом эту строчку когда-нибудь)`)
        setTimeout(fetchData, time);
    }, []);


    return (
        <>
            {error ? (
                <ErrorElem />
            ) : loading ?
                <LoadingElem />
                : (
                    <>
                        <div className="Container" dangerouslySetInnerHTML={{ __html: data }}></div>
                        <Footer />
                    </>
                )}

        </>
    );
}


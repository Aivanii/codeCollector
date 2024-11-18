import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingElem from './LoadingElem';
import Footer from '../Footer/Footer';
import ErrorElem from './ErrorElem';
import SendHistoryArticle from './SendHistoryArticle';
import LeftMenu from './LeftMenu';

export default function MainArticle() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isArticleFav = false;
    let url = new URL(window.location.href).pathname;
    url = url.split('/');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}/${url[4]}`, { withCredentials: true });
                setData(response.data.users[0]);
                SendHistoryArticle(
                    {
                        "themeName": window.location.href.split("/")[6].split("#")[0],
                        "themeFilters": [window.location.href.split("/")[4], window.location.href.split("/")[5]]
                    }
                );
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

    useEffect(() => {
        const DateElem = document.querySelector(".DateSpan");
        const OldSpan = document.querySelector("#FavSpan");
        if (!DateElem) return;
        if (!OldSpan) {
            const newSpan = document.createElement('span');
            newSpan.style.marginLeft = ".5rem";
            newSpan.style.fontSize = "1.5rem";
            newSpan.style.cursor = "pointer";
            newSpan.style.color = "gold";
            newSpan.id = "FavSpan";
            if (isArticleFav) {
                newSpan.textContent = '★';
            } else {
                newSpan.textContent = '☆';
            }
            newSpan.onclick = () => {
                ;
                if (newSpan.textContent === '★') {
                    newSpan.textContent = '☆';
                } else {
                    newSpan.textContent = '★';
                }
            };
            DateElem.insertAdjacentElement('beforeend', newSpan);
            return;
        }

    }, [loading]);

    return (
        <>
            {error ? (
                <ErrorElem />
            ) : loading ?
                <LoadingElem />
                : (
                    <>
                        <div className="Container" dangerouslySetInnerHTML={{ __html: data }}></div>
                        <LeftMenu />
                        <Footer />
                    </>
                )}

        </>
    );
}


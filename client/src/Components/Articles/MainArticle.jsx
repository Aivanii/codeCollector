import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function MainArticle() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    let url = new URL(window.location.href).pathname
    url = url.split('/')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/articles/${url[2]}/${url[3]}/${url[4]}`);
                setData(response.data.users);
            } catch (err) {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };1

        fetchData();
    }, []);


    return (
        <div className="Container" dangerouslySetInnerHTML={{ __html: data }}></div>
    );
}


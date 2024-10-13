import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function MainArticle() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.location.href);
                setData(response.data);
            } catch (err) {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="Container" dangerouslySetInnerHTML={{ __html: data }}></div>
    );
}


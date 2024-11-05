import axios from 'axios';
export default async function SendHistoryArticle(data) {
    try {
        await axios.post(`http://localhost:8080/ccылку сюда, б`, data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.log('Catch block error:', error);
    }
};
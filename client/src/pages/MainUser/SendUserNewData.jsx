import axios from 'axios';
export default function SendUserNewData(userId, userField, userValue) {
    const Data = new FormData();
    Data.append('id', userId);
    Data.append(userField, userValue);
    console.log(Data)
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/reg', Data,
                {
                    withCredentials: true,
                }
            );
            alert("успешно");
            console.log(JSON.stringify(response.data));
            location.reload()
        } catch (error) {
            console.log('Catch block error:', error);
        }
    };
    fetchData();
}
import axios from 'axios';
export default function SendUserNewData(userId, userField, userValue){
    const Data = {
        "id": userId,
        [userField] : userValue
    }
    console.log(Data)
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/reg', data,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }
            );
            alert("успешно");
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log('Catch block error:', error);
        }
        fetchData();
    };
}
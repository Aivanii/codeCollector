<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> da96dfce048c911be57c190f10c6f3c755007c07
export default function SendUserNewData(userId, userField, userValue){
    const Data = {
        "id": userId,
        [userField] : userValue
    }
<<<<<<< HEAD
    fetch("/123", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(Data)
    });
    alert("успешно");
    console.log(Data);
=======
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
>>>>>>> da96dfce048c911be57c190f10c6f3c755007c07
}
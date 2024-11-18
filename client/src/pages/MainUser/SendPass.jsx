import axios from "axios";
export default function SendPass({oldPass, newPass}){
    if (oldPass.length !== oldPass.trim().length) return "Новый пароль не может начинаться или заканчиваться на пробел";
    if (oldPass.length < 8) return "Новый пароль должен содержать не менее 8 символов";
    if (oldPass.length > 32) return "Новый пароль должен содержать не более 32 символов";
    const uniqueLetters = new Set(oldPass.split(''));
    if (uniqueLetters.size < 6) return "Новый пароль должен содержать не менее 6 уникальных символов";
    const Data = new FormData();
    Data.append('oldPass', oldPass);
    Data.append('newPass', newPass);
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/сюда ссылку, б', Data,
                {
                    withCredentials: true,
                }
            );
            alert("успешно");
            return(response);
        } catch (error) {
            console.log('Catch block error:', error);
            return(error);
        }
    };
    fetchData();
}
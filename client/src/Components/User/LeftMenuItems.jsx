import { LeftDivUl, Li, Link } from "./UserStyles";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function LeftMenuItems() {
    const [userId, setUserId] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
                if (response.data.isLogged) {
                    setUserId(response.data.id);
                }
            } catch {
                alert("ошибка загрузки данных");
            }
        };
        fetchData();
    }, []);
    console.log(userId);

    const navigate = useNavigate();

    return (
        <LeftDivUl>
            <Li>
                <Link onClick={() => { navigate(`/user/${userId}`) }}>
                    Страница пользователя
                </Link>
            </Li>
            <Li>
                <Link onClick={() => { navigate(`/user/${userId}/history`) }}>
                    История
                </Link>

            </Li>
            <Li>
                <Link onClick={() => { navigate(`/user/${userId}/change_pass`) }}>
                    Смена пароля
                </Link>

            </Li>
            <Li>
            <Link onClick={() => { navigate(`/user/${userId}/delete_acc`) }}>
                    Удаление аккаунта
                </Link>
            </Li>
        </LeftDivUl >
    );
}
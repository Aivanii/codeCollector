import axios from 'axios';

export default function SendDelAcc(e) {
    e.preventDefault();
    if(!window.confirm("Вы точно уверены?")) return;
    if(!window.confirm("Вы не сможете больше пользоваться ващей учётной записью. Всё ещё хотите продолжить?")) return;
    alert("Вы сделали свой выбор...");
    try {
        axios.post('http://localhost:8080/ссылку, б', "",
            {
                withCredentials: true,
            }
        );

        window.location.href = '/';
    } catch (error) {
        console.log('Catch block error:', error);
    }
}

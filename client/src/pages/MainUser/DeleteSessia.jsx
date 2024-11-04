import axios from 'axios';

export default function DeleteSessia() {
    try {
        axios.post('http://localhost:8080/user_out', "",
            {
                withCredentials: true,
            }
        );
        
        //window.location.href = '/';
    } catch (error) {
        console.log('Catch block error:', error);
    }
}

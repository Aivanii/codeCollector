import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, method = "GET", body = null, options = {}) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getAxios = async () => {
            try {
                const response = await axios({
                    url,
                    method,
                    data: body,
                    ...options,
                });
                await setData(response);
            }
            catch (err) {
                setError(err);
            }
        }
        const timeoutId = setTimeout((getAxios), 0);

        return () => clearTimeout(timeoutId);
    }, [url, method, body, options]);

    return { data, error };
}
export default useAxios;
import {useEffect, useState} from "react";
import axios from "axios";

export const useFetch = <D, >(url: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<D>()
    const [error, setError] = useState<string | undefined>()
    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(undefined)
                setIsLoading(true)

                const response = await axios.get(
                    url
                );
                console.log('response', response)
                setData(response.data)
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message);  // Витягуємо повідомлення з Error
                } else {
                    setError(String(e));  // У випадку, якщо це не Error, конвертуємо в рядок
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url]);
    return {
        error,
        isLoading,
        data
    }
}

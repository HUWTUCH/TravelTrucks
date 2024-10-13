import {Location} from "./CampersLocation/RentalLocation.tsx";
import {useEffect} from "react";
import axios from "axios";

export const Catalog = () => {
        useEffect(() => {
            async function fetchArticles() {
                const response = await axios.get(
                    "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
                );
                console.log(response.data);
            }

            fetchArticles();
        }, []);
    return (
        <>
            <Location/>
        </>
    );
}

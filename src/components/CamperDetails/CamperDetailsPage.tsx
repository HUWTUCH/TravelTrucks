import {NavLink, Outlet, useParams} from "react-router-dom";
import {useFetch} from "../../lib/hooks/use-fetch";
import {
    CamperDetails,
    HeaderDescriptionCamperDetails,
    ImageCamper, Images, OutletFormContainer,
} from "../styled-components/styled-components.tsx";
import like from "../../assets/images/icons/like.svg";
import starRating from "../../assets/images/icons/star_rating.png";
import locationIcon from "../../assets/images/icons/location_icon.png";
import {FormBooking} from "./booking-form.tsx";

interface Camper {
    id: number;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    engine: string;
    transmission: string;
    kitchen: boolean;
    AC: boolean;
    radio: boolean;
    gas: boolean;
    bathroom: boolean;
    refrigerator: boolean;
    water: boolean;
    microwave: boolean;
    gallery: {
        thumb: string;
        original: string;
    }[];
    reviews: {
        reviewer_name: string;
        reviewer_rating: number;
        comment: string;
    }[];
}

export const Details = () => {
    const {id} = useParams<{ id: string }>(); // Отримуємо id із параметрів маршруту
    const {data: camper, isLoading, error} = useFetch<Camper>(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!camper) {
        return <p>Camper not found!</p>;
    }

    return (
        <CamperDetails>
            <div style={{display: "flex", gap: 28, flexDirection: 'column'}}>
                <HeaderDescriptionCamperDetails>
                    <div className='name-price'>
                        <p>{camper.name}</p>
                        <div className='rating-location'>
                            <p><img src={starRating}/>{camper.rating}({camper.reviews.length} Reviews)</p>
                            <p><img src={locationIcon}/>{camper.location}</p>
                        </div>
                        <p>€{camper.price}
                            <button><img src={like}/></button>
                        </p>
                    </div>
                </HeaderDescriptionCamperDetails>
                <Images>
                    <ImageCamper src={camper.gallery[0].original}/>
                    <ImageCamper src={camper.gallery[1].original}/>
                    <ImageCamper src={camper.gallery[2].original}/>
                </Images>
                <p className='description-text'>{camper.description}</p>
            </div>
            <ul className='navigate-list'>
                <li className='navigate-item'>
                    <NavLink to='features'
                             className={({isActive}) =>
                                 isActive ? "navigate-link-active" : "navigate-link"
                             }>
                        Features
                    </NavLink>
                </li>
                <li className='navigate-item'>
                    <NavLink to='reviews'
                             className={({isActive}) =>
                                 isActive ? "navigate-link-active" : "navigate-link"
                             }>
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <p style={{width: '100%', height: 1, backgroundColor: 'white', marginBottom: 24}}/>
            <OutletFormContainer>
                <Outlet context={{camper}}/>
                <FormBooking/>
            </OutletFormContainer>
        </CamperDetails>
    );
};

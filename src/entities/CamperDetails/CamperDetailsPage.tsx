import {NavLink, Outlet, useParams} from "react-router-dom";
import {useFetch} from "../../shared/lib/hooks/use-fetch.tsx";
import {
    CamperDetails,
    HeaderDescriptionCamperDetails,
    ImageCamper, Images, OutletFormContainer,
} from "../../app/styles/styled-components.tsx";
import like from "../../shared/assets/images/icons/like.svg";
import starRating from "../../shared/assets/images/icons/star_rating.png";
import locationIcon from "../../shared/assets/images/icons/location_icon.png";
import {FormBooking} from "./booking-form.tsx";
import {Camper} from "../types.ts";

export const Details = () => {
    const {id} = useParams<{ id: string }>();
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

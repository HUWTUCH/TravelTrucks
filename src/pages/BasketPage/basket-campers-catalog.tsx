import {removeFromCart} from "../../features/cart/slice.tsx";
import {RootState} from "../../app/redux/store.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    BasketComponent,
    Camper,
    DescriptionCamper,
    HeaderDescriptionCamper,
    ImageCamper, ShowMore
} from "../../app/styles/styled-components.tsx";
import starRating from "../../shared/assets/images/icons/star_rating.png";
import locationIcon from "../../shared/assets/images/icons/location_icon.png";
import {FeaturesAmenities} from "../../features/Features/features-amenities.tsx";
import {Link} from "react-router-dom";
import likeActive from "../../shared/assets/images/icons/like_yes.png";

export const Basket = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <BasketComponent>
            <h2>Your Like Campers</h2>
            {cartItems.length > 0 ? (
                cartItems.map(camper => (
                    <Camper key={camper.id}>
                        <ImageCamper src={camper.gallery[0].original}/>
                        <DescriptionCamper>
                            <HeaderDescriptionCamper>
                                <div className='name-price'>
                                    <p>{camper.name}</p>
                                    <p>€{camper.price}
                                        <button onClick={() => handleRemoveClick(camper.id)}><img
                                            src={likeActive}/></button>
                                    </p>
                                </div>
                                <div className='rating-location'>
                                    <p><img src={starRating}/>{camper.rating}({camper.reviews.length} Reviews)</p>
                                    <p><img src={locationIcon}/>{camper.location}</p>
                                </div>
                            </HeaderDescriptionCamper>
                            <p className='description-text'>{camper.description.slice(0, 48) + '...'}</p>
                            <FeaturesAmenities itemFeatures={camper}/>
                            <Link to={`/campers/${camper.id}`}>
                                <ShowMore type='button'>Show More</ShowMore>
                            </Link>
                        </DescriptionCamper>
                    </Camper>
                ))
            ) : null}
        </BasketComponent>
    );
}

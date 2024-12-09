import {
    CamperComponent,
    DescriptionCamper,
    HeaderDescriptionCamper,
    ImageCamper, LoadMore,
    MainCatalogCampers, ShowMore
} from "../../../../shared/ui/styled-components.tsx";
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../../entities/user/slice.tsx';
import locationIcon from "../../../../shared/assets/images/icons/location_icon.png";
import starRating from "../../../../shared/assets/images/icons/star_rating.png";
import like from "../../../../shared/assets/images/icons/like.svg";
import likeActive from "../../../../shared/assets/images/icons/like_yes.png";
import {FeaturesAmenities} from "../features/features-amenities.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Camper} from "../../../../entities/camper/types.ts";

interface MainCampersProps {
    campers: Camper[];
}
export const MainCampers = ({campers}: MainCampersProps) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const dispatch = useDispatch();
    const [likedCampers, setLikedCampers] = useState<number[]>([]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    }
    const handleLikeClick = (camper: MainCampersProps['campers'][number]) => {
        if (likedCampers.includes(camper.id)) {
            setLikedCampers(prevState => prevState.filter(id => id !== camper.id));
        } else {
            setLikedCampers(prevState => [...prevState, camper.id]);
        }
        dispatch(addToCart(camper));
    };

    const isAllCampersLoaded = visibleCount >= campers.length;

    console.log('Campers in catalog-campers', campers);
    return (
        <MainCatalogCampers>
            {campers.length > 0 ? (
                campers.slice(0, visibleCount).map(camper => (
                    <CamperComponent key={camper.id}>
                        <ImageCamper src={camper.gallery[0].original}/>
                        <DescriptionCamper>
                            <HeaderDescriptionCamper>
                                <div className='name-price'>
                                    <p>{camper.name}</p>
                                    <p>€{camper.price}
                                        <button onClick={() => handleLikeClick(camper)}><img
                                            src={likedCampers.includes(camper.id) ? likeActive : like}/></button>
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
                    </CamperComponent>
                ))
            ) : null}
            {!isAllCampersLoaded && (
                <LoadMore onClick={handleLoadMore} type='button'>Load More</LoadMore>
            )}
        </MainCatalogCampers>
    );
};

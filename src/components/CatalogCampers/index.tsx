import {
    Camper,
    DescriptionCamper,
    HeaderDescriptionCamper,
    ImageCamper, LoadMore,
    MainCatalogCampers, ShowMore
} from "../styled-components/styled-components.tsx";
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/slice';
import locationIcon from "../../assets/images/icons/location_icon.png";
import starRating from "../../assets/images/icons/star_rating.png";
import like from "../../assets/images/icons/like.svg";
import likeActive from "../../assets/images/icons/like_yes.png";
import {FeaturesAmenities} from "../Features/features-amenities.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";

interface MainCampersProps {
    campers: {
        id: number,
        name: string,
        price: number,
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
            thumb: string,
            original: string,
        }[],
        reviews: {
            reviewer_name: string,
            reviewer_rating: number,
            comment: string,
        }[],
    }[],
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
            // Якщо вже "вподобаний" - видаляємо його
            setLikedCampers(prevState => prevState.filter(id => id !== camper.id));
        } else {
            // Якщо ще не "вподобаний" - додаємо
            setLikedCampers(prevState => [...prevState, camper.id]);
        }
        dispatch(addToCart(camper));
    };

    const isAllCampersLoaded = visibleCount >= campers.length;

    console.log('Campers in CatalogCampers', campers);
    return (
        <MainCatalogCampers>
            {campers.length > 0 ? (
                campers.slice(0, visibleCount).map(camper => (
                    <Camper key={camper.id}>
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
                    </Camper>
                ))
            ) : null}
            {!isAllCampersLoaded && (
                <LoadMore onClick={handleLoadMore} type='button'>Load More</LoadMore>
            )}
        </MainCatalogCampers>
    );
};

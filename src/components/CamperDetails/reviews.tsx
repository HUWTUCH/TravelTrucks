import {useOutletContext} from "react-router-dom";
import {ReviewsBlock} from "../styled-components/styled-components.tsx";
import starRating from '../../assets/images/icons/star_rating.png';

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
export const Reviews = () => {
    const { camper } = useOutletContext<{ camper: Camper }>();
    return (
        <ReviewsBlock>
            <ul>
                {camper.reviews.map((review, index) => (
                    <li key={index}>
                        <div className='review-header'>
                            <h1 className='avatar'>{review.reviewer_name[0].toUpperCase()}</h1>
                            <div className='user-info'>
                                <p className='user-name'>{review.reviewer_name}</p>
                                {/*<p className='rating'>Rating: {review.reviewer_rating}</p>*/}
                                <div className='rating'>
                                    {Array.from({ length: review.reviewer_rating }).map((_, starIndex) => (
                                        <img
                                            key={starIndex}
                                            src={starRating} // Замініть шлях на реальний шлях до вашого зображення
                                            alt="star"
                                            className="star"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='comment'>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </ReviewsBlock>
    );
}

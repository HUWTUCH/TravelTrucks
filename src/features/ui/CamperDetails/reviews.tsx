import {useOutletContext} from "react-router-dom";
import {ReviewsBlock} from "../../../app/styles/styled-components.tsx";
import starRating from '../../../shared/assets/images/icons/star_rating.png';
import {Camper} from "../../../entities/types.ts";

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
                                <div className='rating'>
                                    {Array.from({ length: review.reviewer_rating }).map((_, starIndex) => (
                                        <img
                                            key={starIndex}
                                            src={starRating}
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

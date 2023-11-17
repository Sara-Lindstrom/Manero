import React, { useEffect, useState } from 'react';
import ViewReviewsComponent from './ViewReviewsComponent';
import { fetchReviewsByProduct } from '../helpers/ReviewHandler';

interface ReviewData {
    username: string;
    comment: string;
    rating: number;
    reviewDate: string;
}
interface ReviewListComponentProps {
    productId: string;
}

const ReviewListComponent: React.FC<ReviewListComponentProps> = ({ productId }) => {
    const [reviews, setReviews] = useState<ReviewData[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const fetchedReviews = await fetchReviewsByProduct(productId);
            setReviews(fetchedReviews);
        };

        fetchReviews();
    }, [productId]);

    return (
        <>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <ViewReviewsComponent key={review.reviewDate + review.username} viewReviewData={review} />
                ))
            ) : (
                <span className="noReviews">This product have no reviews yet</span>
            )}
        </>
    );
};

export default ReviewListComponent;
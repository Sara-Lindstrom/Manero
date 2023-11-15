import React, { useEffect, useState } from 'react';
import ViewReviewsComponent from './ViewReviewsComponent';
import { fetchReviewsByProduct } from '../helpers/ReviewHandler';

interface ReviewData {
    username: string;
    comment: string;
    rating: number;
    reviewDate: string;
}

interface ProductReviewListComponentProps {
    productId: string;
}

const ReviewListComponent: React.FC<ProductReviewListComponentProps> = ({ productId }) => {
    const [reviews, setReviews] = useState<ReviewData[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const fetchedReviews = await fetchReviewsByProduct(productId);
            setReviews(fetchedReviews);
        };

        fetchReviews();
    }, [productId]);

    return (
        <div className="product-reviews-list">
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <ViewReviewsComponent key={review.reviewDate + review.username} viewReviewData={review} />
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
};

export default ReviewListComponent;
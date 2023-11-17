import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReviewsByProduct } from '../helpers/ReviewHandler';
import ViewReviewsComponent from '../components/ViewReviewsComponent';
interface Review {
    username: string;
    comment: string;
    rating: number;
    reviewDate: string;
}

const AllReviewView: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [reviews, setReviews] = useState<Review[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAndSetReviews = async () => {
            if (productId) {
                const reviewsData = await fetchReviewsByProduct(productId);
                setReviews(reviewsData);
            } else {
                navigate('/error');
            }
        };

        fetchAndSetReviews();
    }, [productId, navigate]);

    return (
        <div>
            <h2>All Reviews for Product {productId}</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <ViewReviewsComponent key={index} viewReviewData={review} />
                ))
            ) : (
                <p>No reviews available for this product.</p>
            )}
        </div>
    );
};

export default AllReviewView;
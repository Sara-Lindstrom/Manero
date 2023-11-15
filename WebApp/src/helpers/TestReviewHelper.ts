import axios from "axios";

export interface Review {
    userId: string;
    productId: string;
    date: string;
    comment: string;
    rating: number;
}

export interface ReviewData {
    comment: string;
    rating: number;
    productId: string;
}

// Function for fetching reviews for a product
export const fetchReviewsForProduct = async (productId: string): Promise<Review[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/TestReviews';

    try {
        const response = await axios.get(`${API_URL}/GetProductReviews/${productId}`);

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw new Error('Error fetching reviews. Please try again later.');
    }

    return [];
};

export const submitReview = async (
    reviewData: ReviewData,
    onSuccess?: () => void,
    onFail?: () => void
): Promise<void> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Reviews';
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('No token found');
        onFail?.();
        return;
    }

    try {
        const response = await axios.post(API_URL, reviewData, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in the Authorization header
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200 || response.status === 201) {
            console.log('Review submitted successfully');
            onSuccess?.();
        } else {
            console.error('Unexpected response status:', response.status);
            onFail?.();
        }
    } catch (error) {
        console.error("Error submitting review:", error);
        onFail?.();
    }
};

export default submitReview;
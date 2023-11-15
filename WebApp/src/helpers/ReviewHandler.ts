import axios from 'axios';

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
                'Authorization': `Bearer ${token}`,
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

// Fetch reviews by productId
export const fetchReviewsByProduct = async (productId: string): Promise<any[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Reviews/GetProductReviews';
    const uppercaseProductId = productId.toUpperCase();
    try {
        const response = await axios.get(`${API_URL}/${uppercaseProductId}`);

        if (response.status === 200) {
            return response.data;
        } else {
            console.error('Failed to fetch reviews:', response.status, response.statusText);
            return [];
        }
    } catch (error) {
        console.error('Error fetching product reviews:', error);

        return [];
    }
};
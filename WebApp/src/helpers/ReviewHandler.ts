import axios, { AxiosResponse } from 'axios';

// Function to create a review using the provided data and authentication token
export const createReview = async (
  reviewData: {
    ProductID: string;
    Rating: number;
    Comment: string;
  },
  token: string | null
): Promise<any> => {
  try {

    // Define the API URL for creating reviews, fallback to a default URL if not provided
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Review';
    
    // Make a POST request to the API to create a review
    const response: AxiosResponse<any> = await axios.post(
      API_URL,
      reviewData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
}
    );

    // Check if the network response is successful (status code 200)
    if (response.status !== 200) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    // Extract the created review from the response data
    const createdReview = response.data;
    console.log('Review created successfully:', createdReview);

    return createdReview;
  } catch (error) {
    // Handle errors during the review creation process
    if (axios.isAxiosError(error)) {
      console.error('An error occurred while creating a review:', error.response?.data, error.response?.status);
    } else {
      console.error('An error occurred while creating a review:', error);
    }
    throw error;
  }
};


// Function to decode a JSON Web Token (JWT) and extract user information
function jwtDecode(token: string): { [key: string]: string } {
  return JSON.parse(atob(token.split('.')[1]));
}


// Function to get user information (token and user ID) from local storage
export const getUserInfo = async (): Promise<{ token: string; userId: string }> => {
  try {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('token');

    // Throw an error if the token is missing
    if (!token) {
      throw new Error('Token is missing.');
    }

    // Decode the JWT token to extract user information
    const decodedToken = jwtDecode(token);

    // Throw an error if the user ID cannot be extracted from the token
    if (!decodedToken || !decodedToken.nameid) {
      throw new Error('Failed to extract user ID from token.');
    }

     // Extract user ID from the decoded token and return the token and user ID
    const userId = decodedToken.nameid;
    return { token, userId };
  } catch (error) {
    // Handle errors during the user information retrieval process
    console.error('Error fetching user information:', error);
    throw error;
  }
};


interface ReviewType {
  reviewID: string;
  username: string;
  comment: string;
  rating: number;
  reviewDate: string;
}


// Fetch reviews for a specific product
export const fetchProductReviews = async (productId: string): Promise<ReviewType[] | null> => {
  const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Review/Reviews';

    try {
    const response = await axios.get(API_URL, {
      params: {
        productId: productId
            }
        });

    if (response.status === 200) {
      return response.data;
        }
    } catch (error) {
    console.error("An error occurred while fetching product reviews:", error);
    }
  
  return null;
};
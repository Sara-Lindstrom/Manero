import { ChangeEvent, FormEvent } from 'react';
import { AxiosResponse } from 'axios';
import axios from 'axios';

type Navigate = (path: string) => void;
 
// Define the type for product data that will be used in the ProductHandler
export type ProductFormData = {
    id: number;
    name: string;
    image: string;
    price: number;
    salesprice: number;
    rating: number;
    category: string;
    size: string;
    color: string;
};
 
// Function to fetch best-selling products
export const fetchBestSellers = async (): Promise<ProductFormData[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Products/BestSellers';
    try {
        const response: AxiosResponse<ProductFormData[]> = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching best sellers:", error);
        return [];
    }
};
 
// // Function to add a product to the wishlist
// export const addToWishlist = async (productId: string): Promise<boolean> => {
//     const API_URL = `${process.env.REACT_APP_API_URL || 'https://localhost:7055'}/api/Wishlist/${productId}`;
//     try {
//         const response: AxiosResponse = await axios.post(API_URL);
//         return response.status === 200;
//     } catch (error) {
//         console.error("An error occurred while adding to wishlist:", error);
//         return false;
//     }
// };
 
// // Function to add a product to the cart
// export const addToCart = async (productId: string): Promise<boolean> => {
//     const API_URL = `${process.env.REACT_APP_API_URL || 'https://localhost:7055'}/api/Cart/${productId}`;
//     try {
//         const response: AxiosResponse = await axios.post(API_URL);
//         return response.status === 200;
//     } catch (error) {
//         console.error("An error occurred while adding to cart:", error);
//         return false;
//     }
// };
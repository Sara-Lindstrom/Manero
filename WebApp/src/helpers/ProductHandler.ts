import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IProduct } from '../Interfaces/IProduct';
import { ICategories } from '../Interfaces/ICategories';

// type Navigate = (path: string) => void;
 
// Function to fetch best-selling products
export const fetchByCategoryTag = async (categories : string, tags? : string | string[]): Promise<IProduct[]> => {

    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetByCategory';
     // Prepare query parameters
     const params = new URLSearchParams();
    
     // If categories is an array, add each category to the query parameters
     if (Array.isArray(categories)) {
         categories.forEach(category => params.append('category', category));
     } else {
         // If categories is a single string, just set it directly
         params.append('category', categories);
     }
 
     // Do the same for tags if it's provided
     if (tags) {
         if (Array.isArray(tags)) {
             tags.forEach(tag => params.append('tag', tag));
         } else {
             params.append('tag', tags);
         }
     }
 
    try {
        const response: AxiosResponse<IProduct[]> = await axios.get(API_URL,  { params });

        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching best sellers:", error);
        return [];
    }
};

export const fetchAllCategories = async (): Promise<ICategories[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetAllCategories';

    try {
        const response: AxiosResponse<ICategories[]> = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching categories:", error);
        return [];
    }
}

export const fetchNewestProducts = async (): Promise<IProduct[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetNewest';

   try {
       const response: AxiosResponse<IProduct[]> = await axios.get(API_URL);
       return response.data;
   } catch (error) {
       console.error("An error occurred while fetching newest products:", error);
       return [];
   }
} 

export const fetchBestSellingProducts = async (): Promise<IProduct[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetBestSelling';

    try {
        const response: AxiosResponse<IProduct[]> = await axios.get(API_URL);

        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching best sellers:", error);
        return [];
    }
}

export const fetchProductById = async ( productId: string ): Promise<IProduct> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetById';
    const params = { id: productId };  


    try {
        const response: AxiosResponse<IProduct> = await axios.get(API_URL, { params });

        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching best sellers:", error);
        throw error;
    }
}

// Method to fetch all products by category and then filter them out
export const fetchProductsByCategory = async (category: string): Promise<IProduct[]> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetByCategoryName';
    const params = { categoryName: category }; 

    try {
        const response = await axios.get<IProduct[]>(API_URL, { params });
        return response.data;
    } catch (error) {
        return [];
    }
};


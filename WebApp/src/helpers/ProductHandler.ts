import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IProduct } from '../Interfaces/IProduct';
import { ICategories } from '../Interfaces/ICategories';
import { IColor } from '../Interfaces/IColor';
import { ISize } from '../Interfaces/ISize';
import { IImage } from '../Interfaces/IImage';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product';

// Utility function to shuffle an array
export const shuffleArray = <T>(array: T[]): T[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

import { ITags } from '../Interfaces/ITags';


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


export const fetchAllTags = async (category : string,) => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product/GetCategoryTags';
    const params = new URLSearchParams();

    params.append('category', category);

    try {
        const response: AxiosResponse<ITags[]> = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching tags:", error);
        return [];
    }
};


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

//Function to fetch colors for a product
export const fetchColorsForProduct = async (productId: string): Promise<IColor[]> => {
    try {
        const response: AxiosResponse<IColor[]> = await axios.get(`${API_URL}/GetColorsForProduct`, { params: { productId } });
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching colors for the product:", error);
        return [];
    }
};

//Function to fetch sizes for a product
export const fetchSizesForProduct = async (productId: string): Promise<ISize[]> => {
    try {
        const response: AxiosResponse<ISize[]> = await axios.get(`${API_URL}/GetSizesForProduct`, { params: { productId } });
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching sizes for the product:", error);
        return [];
    }
};

// Function to fetch all images for a product
export const fetchImagesForProduct = async (productId: string): Promise<IImage[]> => {
    try {
        const response: AxiosResponse<IImage[]> = await axios.get(`${API_URL}/GetImagesForProduct`, { params: { productId } });
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching images for the product:", error);
        return [];
    }
};
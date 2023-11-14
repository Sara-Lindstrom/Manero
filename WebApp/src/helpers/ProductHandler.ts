import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IProduct } from '../Interfaces/IProduct';
import { ICategories } from '../Interfaces/ICategories';
import { IColor } from '../Interfaces/IColor';
import { ISize } from '../Interfaces/ISize';
import { IImage } from '../Interfaces/IImage';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/Product';

// Function to fetch a product by its ID
export const fetchProductById = async (productId: string): Promise<IProduct | null> => {
    const API_URL = `${process.env.REACT_APP_API_URL || 'https://localhost:7055'}/api/Product/GetById/${productId}`;

    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching the product:", error);
        return null;
    }
};
 
// Function to fetch best-selling products
export const fetchBestSellers = async (categories : string, tags? : string | string[]): Promise<IProduct[]> => {

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

// // Function to add a product to the wish-list
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
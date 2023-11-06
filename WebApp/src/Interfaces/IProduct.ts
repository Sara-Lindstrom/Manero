import { IReview } from "./IReview";
import { IImage } from "./IImage";

export interface IProduct {
    id: string;
    name: string;
    description:string;
    price: number;
    salesprice?: number;
    rating?: number;
    
    reviews?: IReview[];
    category: string[];
    size?: string[];
    color: string[];
    image?: IImage[];
}
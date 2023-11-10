import { IReview } from "./IReview";
import { IImage } from "./IImage";
export interface IProduct {
    id: string;
    name: string;
    description:string;
    price: number;
    salesPrice?: number;
    rating?: number;
    createdDate: Date;
    
    reviews?: IReview[];
    category: string[];
    size?: string[];
    color: string[];
    images: IImage[];
}
import { IProduct } from "../Interfaces/IProduct"

export const SortByNewest = (products:IProduct[])=>{
    // const sortedProducts = [...products].sort((a, b) => {return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();});
    const sortedProducts: IProduct[] = [...products].sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
    return sortedProducts
};


export const SortByBestSeller = () => {

}

export const SortBySale = () => {

}

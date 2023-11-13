import { IProduct } from "../Interfaces/IProduct"

export const SortByNewest = (products: IProduct[]) => {
    const sortedProducts: IProduct[] = [...products].sort((a, b) => {
        const dateA = a.createdDate instanceof Date ? a.createdDate : new Date(a.createdDate);
        const dateB = b.createdDate instanceof Date ? b.createdDate : new Date(b.createdDate);

        return dateB.getTime() - dateA.getTime();
    });
    return sortedProducts;
};

export const SortByBestSeller = (products: IProduct[]) => {
    // Assuming that a higher rating signifies a bestseller.
    // Products without ratings might be considered as unrated and sorted last.
    const sortedProducts: IProduct[] = [...products].sort((a, b) => {
        // If both products have ratings, sort them by rating
        if (a.rating && b.rating) {
            return b.rating - a.rating;
        }
        // If only product A has a rating, consider it higher
        if (a.rating) {
            return -1;
        }
        // If only product B has a rating, consider it higher
        if (b.rating) {
            return 1;
        }
        // If neither product has a rating, consider them equal in terms of bestseller status
        return 0;
    });
    return sortedProducts;
};

export const SortBySale = (products: IProduct[]) => {
    // Calculate the discount percentage if salesPrice is available
    const calculateDiscount = (product: IProduct) => {
        if (product.salesPrice) {
            return ((product.price - product.salesPrice) / product.price) * 100;
        }
        return 0;
    };

    // Sort by whether a product is on sale and then by the discount percentage
    const sortedProducts: IProduct[] = [...products].sort((a, b) => {
        const discountA = calculateDiscount(a);
        const discountB = calculateDiscount(b);

        // Products with higher discounts come first
        if (discountA > discountB) {
            return -1;
        }
        if (discountA < discountB) {
            return 1;
        }
        // If the discount is the same, they are considered equal in terms of sale status
        return 0;
    });

    return sortedProducts;
};
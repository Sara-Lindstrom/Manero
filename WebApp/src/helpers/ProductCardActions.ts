// hooks/useProductCardActions.tsx
import { useState } from 'react';
import { IProduct } from '../Interfaces/IProduct';
import { addToCart as addToCartHandler } from '../helpers/ProductHandler';

interface UseProductCardActions {
    addToCart: (productId: number, quantity: number) => Promise<boolean>;
    handleQuantityAdjustment: (increment: boolean) => void;
    quantity: number;
}

const ProductCardActions = (product: IProduct): UseProductCardActions => {
    const [quantity, setQuantity] = useState(1);

    const addToCart: UseProductCardActions['addToCart'] = async (productId, quantity) => {
        // Use addToCartHandler or any other logic
        // You can replace addToCartHandler with your custom logic
        const addedToCart = await addToCartHandler(productId, quantity);

        if (addedToCart) {
            console.log("Product added to cart successfully!");
            return true;
        } else {
            console.log("Failed to add product to cart.");
            return false;
        }
    };

    const handleQuantityAdjustment: UseProductCardActions['handleQuantityAdjustment'] = (increment) => {
        // Increment or decrement the quantity based on the value of 'increment'
        const newQuantity = increment ? quantity + 1 : Math.max(1, quantity - 1);
        setQuantity(newQuantity);
    };

    return { addToCart, handleQuantityAdjustment, quantity };
};

export default ProductCardActions;

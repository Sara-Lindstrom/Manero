﻿import React, { useEffect, useState } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { IProduct, CardType } from '../Interfaces/IProduct';
import { CartItems, addToCart, fetchCartItems } from '../helpers/ProductHandler';
import { fetchUserId } from '../helpers/AddressHandler';

interface CartWithItemsProps {
    cartItems: CartItems[];
    userToken: string;
    products: IProduct[];
}

const CartWithItems: React.FC<CartWithItemsProps> = ({ products, cartItems, userToken }) => {
    const [internalCartItems, setInternalCartItems] = useState<CartItems[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(5);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [wishlist, setWishlist] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get the user ID using the provided userToken
                const userId = await fetchUserId(userToken);

                if (userId !== null) {
                    // Fetch cart items using the obtained user ID
                    const products: IProduct[] = await fetchCartItems(userId);

                    // Convert products to cart items
                    const cartItems: any[] = products.map(product => ({
                        ...product,
                        quantity: 1,  // Assuming a default quantity of 1
                        userId: userId || '',  // Use the obtained user ID or an empty string as a fallback
                    }));

                    setInternalCartItems(cartItems);
                } else {
                    // Handle the case where userId is null (perhaps show an error or redirect to login)
                    console.error("User ID is null. Handle this case accordingly.");
                }
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
                // Handle error as needed, e.g., show a notification to the user
            }
        };

        fetchData();
    }, [userToken]);

    useEffect(() => {
        // Calculate subtotal
        const calculatedSubtotal = internalCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        setSubtotal(calculatedSubtotal);

        // Calculate total
        const calculatedTotal = calculatedSubtotal - discount + deliveryFee;
        setTotal(calculatedTotal);
    }, [internalCartItems, discount, deliveryFee]);

    const handleQuantityAdjustment = (productId: number, newQuantity: number) => {
        const updatedCartItems = internalCartItems.map(item => {
            // Convert item.id to a number for comparison
            if (Number(item.id) === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setInternalCartItems(updatedCartItems);
    };


    const addToCart = (product: IProduct) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[product.id]) {
                updatedCart[product.id]++;
            } else {
                updatedCart[product.id] = 1;
            }
            return updatedCart;
        });
    };

    const addToWishlist = (product: IProduct) => {
        if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <section className="cart-section">
            <div className="container">a

                <div className="cart-product-cards">
                    {internalCartItems ? (
                        internalCartItems.map((cartItem) => (
                            <ProductCardComponent
                                key={cartItem.id}
                                product={cartItem.product}
                                addToWishlist={addToWishlist}
                                showQuantityAdjustment={true}
                            />
                        ))
                    ) : (
                        <p>No products in the cart.</p>
                    )}
                </div>

                <p className='cart-promocode'>Promocode applied <i className="fa-solid fa-check"></i></p>
                <div className='cart-summary'>
                    <p className='cart-subtotal'>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </p>
                    <p className='cart-discount'>
                        <span>Discount:</span>
                        <span>- {discount.toFixed(2)}</span>
                    </p>
                    <p className='cart-delivery'>
                        <span>Delivery Fee:</span>
                        <span>{deliveryFee.toFixed(2)}</span>
                    </p>
                    <p className='cart-total'>
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </p>
                </div>
                <button className='btn dark-btn form-btn'>PROCEED TO CHECKOUT</button>
            </div>
        </section>
    )
}

export default CartWithItems
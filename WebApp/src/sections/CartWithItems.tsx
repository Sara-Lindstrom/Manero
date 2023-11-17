import React, { useEffect, useState } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import { CardType, IProduct } from '../Interfaces/IProduct';

interface CartWithItemsProps {
    cartItems: IProduct[];
}

const CartWithItems: React.FC<CartWithItemsProps> = ({ cartItems }) => {
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate subtotal
        const calculatedSubtotal = cartItems.reduce((acc, item) => {
            const itemPrice = item.salesPrice ?? item.price;
            return acc + itemPrice;
        }, 0);
        setSubtotal(calculatedSubtotal);

        // Placeholder for discount (you can replace this with your discount logic)
        const calculatedDiscount = 0;
        setDiscount(calculatedDiscount);

        // Calculate total
        const calculatedTotal = calculatedSubtotal - calculatedDiscount + deliveryFee;
        setTotal(calculatedTotal);
    }, [cartItems, deliveryFee]);

    return (
        <section className="cart-section">
            <div className="container">

                <div className="cart-product-cards">
                    {cartItems.length > 0 ? (
                        cartItems.map((cartItem) => (
                            <ProductCardComponent
                                key={cartItem.id}
                                product={cartItem}
                                cardType={CardType.NormalCard}
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
                        <span>- ${discount.toFixed(2)}</span>
                    </p>
                    <p className='cart-delivery'>
                        <span>Delivery Fee:</span>
                        <span>${deliveryFee.toFixed(2)}</span>
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

export default CartWithItems;
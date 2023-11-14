import React, { useState } from 'react';
import { IProduct, CardType } from '../Interfaces/IProduct';
import { addToCart as addToCartHandler } from '../helpers/ProductHandler';

// Rendering a product card with either SmallCard or NormalCard as CardType
interface ProductCardComponentProps {
    product: IProduct;
    cardType: CardType;
    addToWishlist?: (product: IProduct) => void;
    addToCart?: (productId: number, quantity: number) => void;
    showQuantityAdjustment?: boolean;
    handleQuantityAdjustment?: (productId: number, newQuantity: number) => void;
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({ product, addToCart, cardType, addToWishlist, showQuantityAdjustment }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {
        if (addToCartHandler) {
            const productId = Number(product.id);
            const addedToCart = await addToCartHandler(productId, quantity);

            if (addedToCart) {
                console.log("Product added to cart successfully!");
            } else {
                console.log("Failed to add product to cart.");
            }
        }
    };

    const handleQuantityAdjustment = (increment: boolean) => {
        // Increment or decrement the quantity based on the value of 'increment'
        const newQuantity = increment ? quantity + 1 : Math.max(1, quantity - 1);
        setQuantity(newQuantity);
    };

    const renderQuantityAdjustment = () => {
        if (showQuantityAdjustment) {
            return (
                <div className='product-card-info-below-buttons'>
                    <button className='product-card-info-below-button' onClick={() => handleQuantityAdjustment(true)}>
                        <i className="fa-regular fa-plus"></i>
                    </button>
                    <span className='product-quantity'>{quantity}</span>
                    <button className='product-card-info-below-button' onClick={() => handleQuantityAdjustment(false)}>
                        <i className="fa-regular fa-minus"></i>
                    </button>
                </div>
            );
        }
        return null;
    };


    const renderButtons = () => {
        if (!showQuantityAdjustment) {
            return (
                <>
                    <button className='product-card-info-below-button' onClick={() => addToWishlist && addToWishlist(product)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className='product-card-info-below-button' onClick={handleAddToCart}>
                        <i className="fa-regular fa-shopping-cart"></i>
                    </button>
                </>
            );
        }
        return null;
    };

    // Need to change name to a more generic (this is Featured products list)
    const renderSmallCardLayout = () => (
        <div className="product-list container">
            <ul className='product-list-info-below-grid'>
                    <li className='product-list-info-below' key={product.id}>
                        <a className='product-card-info-below' href={`/product/${product.id}`}>
                            <div className='product-card-info-below'>
                                {product.salesPrice !== null && (
                                    <div className='product-sale-label'>SALE</div>
                                )}
                                {product.images.length >= 1 && (
                                    product.images[0].imagePath !== undefined && (
                                        <img className='product-card-info-below-img' src={product.images[0].imagePath} alt={product.name} />
                                    ))}
                                <p className='product-card-rating'><i className="fa-regular fa-star"></i>({product.rating})</p>
                                <h2 className='product-card-name'>{product.name}</h2>
                                <div className='product-card-price-container'>
                                    {product.salesPrice !== null ? (
                                        <>
                                            <p className='product-card-price-strikethrough'>${product.price}</p>
                                            <p className='product-card-salesprice'>${product.salesPrice}</p>
                                        </>
                                    ) : (
                                        <p className='product-card-price'>${product.price}</p>
                                    )}
                                    </div>
                                <div className='product-card-info-below-buttons'>
                                    {showQuantityAdjustment && renderQuantityAdjustment()}
                                    {renderButtons()}
                                </div>
                            </div>
                        </a>
                    </li>
            </ul>
        </div>
    ); 

    // Need to change name to a more generic (this is Best seller list)
    const renderNormalCardLayout = () => (
        <section>
            <ul className='best-seller-product-list'>
                    <li className='best-seller-product-list-info-below' key={product.id}>
                        <a className='best-seller-product-card' href={`/product/${product.id}`}>
                            <div className='best-seller-product-card-info-below'>
                                {product.salesPrice !== null && (
                                    <div className='best-seller-product-sale-label'>SALE</div>
                                )}
                                {product.images.length >= 1 && (
                                    product.images[0].imagePath !== undefined && (
                                        <img className='product-card-info-below-img' src={product.images[0].imagePath} alt={product.name} />
                                    ))}
                                <div className='best-seller-product-text'>
                                    <h2 className='best-seller-product-card-name'>{product.name}</h2>
                                    <div className='best-seller-product-card-price-container'>
                                        {product.salesPrice !== null ? (
                                            <>
                                                <p className='product-card-price-strikethrough'>${product.price}</p>
                                                <p className='product-card-salesprice'>${product.salesPrice}</p>
                                            </>
                                        ) : (
                                            <p className='product-card-price'>${product.price}</p>
                                        )}
                                    </div>
                                    <p className='best-seller-product-card-rating'><i className="fa-regular fa-star"></i>({product.rating})</p>
                                </div>
                                <div className='best-seller-product-card-info-below-buttons'>
                                    <button className='best-seller-product-card-info-below-button' onClick={() => addToWishlist && addToWishlist(product)}>
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </li>
            </ul>
        </section>

    );

    const renderCardContent = () => {
        switch (cardType) {
            case CardType.SmallCard:
                return renderSmallCardLayout();
            case CardType.NormalCard:
                return renderNormalCardLayout();
        }
    };

    return <>{renderCardContent()}</>;
};

export default ProductCardComponent;
import React, { useState } from 'react';
import { IProduct, CardType } from '../Interfaces/IProduct';
import { addToCart as addToCartHandler } from '../helpers/ProductHandler';
import ProductCardActions from '../helpers/ProductCardActions';

// Rendering a product card with either SmallCard or NormalCard as CardType
interface ProductCardComponentProps {
    product: IProduct;
    cardType?: CardType;
    addToWishlist?: (product: IProduct) => void;
    showQuantityAdjustment?: boolean;
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({ product, cardType, addToWishlist, showQuantityAdjustment }) => {
    const { addToCart, handleQuantityAdjustment, quantity } = ProductCardActions(product);

    const handleAddToCart = async () => {
        const productId = Number(product.id);
        try {
            const addedToCart = await addToCart(productId, quantity);

            if (addedToCart) {
                console.log("Product added to cart successfully!");
            } else {
                console.log("Failed to add product to cart.");
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    const renderStars = (product: IProduct) => {
        if (product.rating == undefined) {
            product.rating = 0;
        }

        const filledStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        const remainder = 5 - filledStars - (hasHalfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<i className="fa-solid fa-star" key={"star_" + i}></i>);
        }

        if (hasHalfStar) {
            stars.push(<i className="fa-solid fa-star-half-stroke" key={"half_star"}></i>);
        }

        for (let i = 0; i < remainder; i++) {
            stars.push(<i className="fa-regular fa-star" key={"empty_star_" + i}></i>);
        }
        return stars
    }

    const renderButtons = () => {
        if (showQuantityAdjustment) {
            // If showQuantityAdjustment is true, render only quantity adjustment buttons
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

        // If showQuantityAdjustment is false, render cart and wishlist buttons
        return (
            <>
                <button className='product-card-button' onClick={() => addToWishlist && addToWishlist(product)}>
                    <i className="fa-regular fa-heart"></i>
                </button>
                <button className='product-card-button' onClick={handleAddToCart}>
                    <i className="fa-regular fa-shopping-cart"></i>
                </button>
            </>
        );
    };



    // Need to change name to a more generic (this is Featured products list)
    const renderSmallCardLayout = () => (
        <a className="product-card" key={product.id} href={`/product/${product.id}`}>
            {product.salesPrice !== null && (
                <div className='product-sale-label'>SALE</div>
            )}
            {product.images.length >= 1 && (
                product.images[0].imagePath !== undefined && (
                    <img className='product-card-img' src={product.images[0].imagePath} alt={product.name} />
            ))}
            <div className='product-card-info'>
                <p className='product-card-rating'>{renderStars(product)} ({product.reviews?.length})</p>
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
            </div>
            <div className='product-card-buttons'>
                {renderButtons()}
            </div>
        </a>
    ); 

    // Need to change name to a more generic (this is Best seller list)
    const renderNormalCardLayout = () => (
        <section key={product.id}>
            <a className="flexed-product-card"  href={`/product/${product.id}`}>
                {product.salesPrice !== null && (
                    <div className='product-sale-label'>SALE</div>
                )}
                {product.images.length >= 1 && (
                product.images[0].imagePath !== undefined && (
                    <div className='img-container'>
                        <img className='flexed-product-card-img' src={product.images[0].imagePath} alt={product.name} />
                    </div>
                ))}
                <div className='flexed-product-card-info'>
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
                    <p className='product-card-rating'>{renderStars(product)} ({product.reviews?.length})</p>
                </div>
                <div className='product-card-buttons'>
                    <button className='product-card-button' onClick={() => addToWishlist && addToWishlist(product)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className='product-card-button' onClick={handleAddToCart}>
                        <i className="fa-regular fa-shopping-cart"></i>
                    </button>
                </div>
            </a>
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
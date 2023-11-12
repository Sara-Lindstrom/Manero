import React from 'react';
import { IProduct, CardType } from '../Interfaces/IProduct';

// Rendering a single products card with either SmallCard or NormalCard as CardType
interface ProductCardComponentProps {
    product: IProduct;
    cardType: CardType;
    addToWishlist: (product: IProduct) => void;
    addToCart: (product: IProduct) => void;
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({ product, addToCart, cardType, addToWishlist }) => {
    const renderSmallCardLayout = () => (
        <div className="small-card">
            <img src={product.images && product.images.length > 0 ? product.images[0].imagePath : ''}
                alt={product.name}
                className="small-card-img" />
            <div className="product-details">
                <h5 className="product-name">{product.name}</h5>
                <p>{product.categories}</p> 
                <p className="product-price">
                    {product.salesPrice ? (
                        <>
                            <span className="product-card-price-strikethrough">${product.price.toFixed(2)}</span>
                            <span className="product-card-salesprice">${product.salesPrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span>${product.price.toFixed(2)}</span>
                    )}
                </p>
                {product.rating && (
                    <div className="product-rating">
                        {/* Here you'd render the stars based on the rating */}
                        <span className="stars">*****</span>
                        ({product.rating})
                    </div>
                )}
            </div>
            <button className="heart-icon" onClick={() => addToWishlist(product)}><i className="fa-regular fa-heart"></i></button>
            <div className="card-actions">
                <button onClick={() => addToCart(product)}>Add to Cart
                    <i className="fa-regular fa-shopping-cart"></i></button>
            </div>
        </div>
    );  

    const renderNormalCardLayout = () => (
        <div className="normal-card">
            <button className="heart-icon" onClick={() => addToWishlist(product)}><i className="fa-regular fa-heart"></i></button>
            <img src={product.images && product.images.length > 0 ? product.images[0].imagePath : ''}
                alt={product.name}
                className="normal-card-img" />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p>{product.categories}</p>
                <p className="product-price">
                    {product.salesPrice ? (
                        <>
                            <span className="product-card-price-strikethrough">${product.price.toFixed(2)}</span>
                            <span className="product-card-salesprice">${product.salesPrice.toFixed(2)}</span>
                        </>
                    ) : (
                        <span>${product.price.toFixed(2)}</span>
                    )}
                </p>
                {product.rating && (
                    <div className="product-rating">
                        {/* Here you'd render the stars based on the rating */}
                        <span className="stars">*****</span>
                        ({product.rating})
                    </div>
                )}
            </div>
            <button className="card-actions" onClick={() => addToCart(product)}>
                <i className="fa-regular fa-shopping-cart"></i>
            </button>
        </div>
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
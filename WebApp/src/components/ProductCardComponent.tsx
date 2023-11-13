import React from 'react';
import { IProduct, CardType } from '../Interfaces/IProduct';

// Rendering a product card with either SmallCard or NormalCard as CardType
interface ProductCardComponentProps {
    product: IProduct;
    cardType: CardType;
    addToWishlist: (product: IProduct) => void;
    addToCart: (product: IProduct) => void;
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({ product, addToCart, cardType, addToWishlist }) => {

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
                                    <button className='product-card-info-below-button' onClick={() => addToWishlist(product)}>
                                        <i className="fa-regular fa-heart"></i>
                                    </button>
                                    <button className='product-card-info-below-button' onClick={() => addToCart(product)}>
                                        <i className="fa-regular fa-shopping-cart"></i>
                                    </button>
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
                                    <button className='best-seller-product-card-info-below-button' onClick={() => addToWishlist(product)}>
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
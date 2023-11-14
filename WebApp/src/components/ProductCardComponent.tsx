import React from 'react';
import { IProduct, CardType } from '../Interfaces/IProduct';

// Rendering a product card with either SmallCard or NormalCard as CardType
interface ProductCardComponentProps {
    product: IProduct;
    cardType?: CardType;
    addToWishlist: (product: IProduct) => void;
    addToCart: (product: IProduct) => void;
}

const renderStars = (product : IProduct) => {
    if(product.rating == undefined){
        product.rating = 0;
    }
    
    const filledStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const remainder = 5 - filledStars - (hasHalfStar ? 1 : 0);
  
    const stars = [];
  
    for (let i = 0; i < filledStars; i++) {
      stars.push(<i className="fa-solid fa-star"></i>);
    }
  
    if (hasHalfStar) {
      stars.push(<i className="fa-solid fa-star-half-stroke"></i>);
    }
  
    for (let i = 0; i < remainder; i++) {
      stars.push(<i className="fa-regular fa-star"></i>);
    }
    return stars
}
  

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({ product, addToCart, cardType, addToWishlist }) => {

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
                <button className='product-card-button' onClick={() => addToWishlist(product)}>
                    <i className="fa-regular fa-heart"></i>
                </button>
                <button className='product-card-button' onClick={() => addToCart(product)}>
                    <i className="fa-regular fa-shopping-cart"></i>
                </button>
            </div>
        </a>
    ); 

    // Need to change name to a more generic (this is Best seller list)
    const renderNormalCardLayout = () => (
        <section>
            <a className="flexed-product-card" key={product.id} href={`/product/${product.id}`}>
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
                    <button className='product-card-button' onClick={() => addToWishlist(product)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className='product-card-button' onClick={() => addToCart(product)}>
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
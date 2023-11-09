import React, { useState, useEffect } from 'react';
import img from '../Images/pexels-photo-7209396.jpeg';
import { IProduct } from '../Interfaces/IProduct';

interface ProductListProps {
    products: IProduct[];
}

const BestSellerProductList: React.FC<ProductListProps> = ({ products }) => {
        const [wishlist, setWishlist] = useState<IProduct[]>([]);
        const [cart, setCart] = useState<{ [key: string]: number }>({});

        const addToWishlist = (product: IProduct) => {
            if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
                setWishlist([...wishlist, product]);
            }
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
      
    return (
        <section>
            <ul className='best-seller-product-list'>
                {products.map((product) => (
                    <li className='best-seller-product-list-info-below' key={product.id}>
                        <a className='best-seller-product-card' href={`/product/${product.id}`}>
                            <div className='best-seller-product-card-info-below'>
                                {product.salesPrice !== null && (
                                    <div className='best-seller-product-sale-label'>SALE</div>
                                )}
                                <img className='product-card-info-below-img' src={product.images[0].imagePath} alt={product.name}/>
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
                ))}
            </ul>
        </section>
    )
}


export default BestSellerProductList;
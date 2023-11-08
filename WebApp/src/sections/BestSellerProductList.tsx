import React, { useState, useEffect } from 'react';
import img from '../Images/pexels-photo-7209396.jpeg';

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    salesprice: number;
    rating: number;
    category: string;
    size: string;
    color: string;
}

interface ProductListProps {
    limit: number;
    selectedCategories: string | string[];
}

const BestSellerProductList: React.FC<ProductListProps> = ({ limit, selectedCategories }) => {
        const [products, setProducts] = useState<Product[]>([]);
        const [wishlist, setWishlist] = useState<Product[]>([]);
        const [cart, setCart] = useState<{ [key: string]: number }>({});

        const hardcodedProducts: Product[] = [
            { id: 1, name: 'Product 1', image: img, price: 19.99, salesprice: 0, rating: 3, category: 'Category 1', size: 'S', color: 'red' },
                { id: 2, name: 'Product 2', image: img, price: 24.99, salesprice: 0, rating: 4, category: 'Category 2', size: 'M', color: 'yellow' },
                { id: 3, name: 'Product 3', image: img, price: 14.99, salesprice: 9.99, rating: 5, category: 'Category 3', size: 'L', color: 'blue' },
                { id: 4, name: 'Product 3', image: img, price: 14.99, salesprice: 9.99, rating: 5, category: 'Category 4', size: 'XL', color: 'green' },
        ];

        useEffect(() => {
            let filteredProducts = [];
          
            if (Array.isArray(selectedCategories)) {
              // Handle multiple categories (an array)
              filteredProducts = hardcodedProducts.filter((product) =>
                selectedCategories.includes('All') || selectedCategories.includes(product.category)
              );
            } else {
              // Handle a single category (a string)
              filteredProducts = hardcodedProducts.filter((product) =>
                selectedCategories === 'All' || product.category === selectedCategories
              );
            }
          
            // Slice the filtered products based on the limit
            setProducts(filteredProducts.slice(0, limit));
        }, [selectedCategories, limit]);
        
        const addToWishlist = (product: Product) => {
            if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
                setWishlist([...wishlist, product]);
            }
        };
    
        const addToCart = (product: Product) => {
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
                                {product.salesprice > 0 && (
                                <div className='best-seller-product-sale-label'>SALE</div>
                                )}
                                <img className='best-seller-product-card-info-below-img' src={product.image} alt={product.name} />
                                <div className='best-seller-product-text'>
                                    <h2 className='best-seller-product-card-name'>{product.name}</h2>
                                    <div className='best-seller-product-card-price-container'>
                                        {product.salesprice > 0 ? (
                                            <>
                                            <p className='best-seller-product-card-price-strikethrough'>${product.price.toFixed(2)}</p>
                                            <p className='best-seller-product-card-salesprice'>${product.salesprice.toFixed(2)}</p>
                                            </>
                                        ) : (
                                            <p className='best-seller-product-card-price'>${product.price.toFixed(2)}</p>
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
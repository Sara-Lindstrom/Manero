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

const ProductList: React.FC<ProductListProps> = ({ limit, selectedCategories }) => {
        const [products, setProducts] = useState<Product[]>([]);
        const [wishlist, setWishlist] = useState<Product[]>([]);
        const [cart, setCart] = useState<{ [key: number]: number }>({});

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
        <div className="product-list">
            <ul className='product-list-info-below-grid'>
                {products.map((product) => (
                    <li className='product-list-info-below' key={product.id}>
                        <a className='product-card-info-below' href={`/product/${product.id}`}>
                            <div className='product-card-info-below'>
                                {product.salesprice > 0 && (
                                <div className='product-sale-label'>SALE</div>
                                )}
                                <img className='product-card-info-below-img' src={product.image} alt={product.name} />
                                <p className='product-card-rating'><i className="fa-regular fa-star"></i>({product.rating})</p>
                                <h2 className='product-card-name'>{product.name}</h2>
                                <div className='product-card-price-container'>
                                    {product.salesprice > 0 ? (
                                        <>
                                        <p className='product-card-price-strikethrough'>${product.price.toFixed(2)}</p>
                                        <p className='product-card-salesprice'>${product.salesprice.toFixed(2)}</p>
                                        </>
                                    ) : (
                                        <p className='product-card-price'>${product.price.toFixed(2)}</p>
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
                ))}
            </ul>
        </div>
    )
}


export default ProductList;
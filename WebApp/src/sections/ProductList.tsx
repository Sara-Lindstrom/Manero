import React, { useState, useEffect } from 'react';
import { IProduct } from '../Interfaces/IProduct';
import {fetchBestSellers} from '../helpers/ProductHandler';

interface ProductListProps {
    limit: number;
    selectedCategories: string;
    selectedTags?: string | string[]
}

const ProductList: React.FC<ProductListProps> = ({ limit, selectedCategories, selectedTags}) => {

        const [products, setProducts] = useState<IProduct[]>([]);
        const [wishlist, setWishlist] = useState<IProduct[]>([]);
        const [cart, setCart] = useState<{ [key: string]: number }>({});

        const fetchProducts = async () => {
            let products = await fetchBestSellers(selectedCategories, selectedTags);
            setProducts(products);
        }        
    
        useEffect(() => {
            fetchProducts();
        }, []);

        // useEffect(() => {
        //     let filteredProducts = [];
          
        //     if (Array.isArray(selectedCategories)) {
        //       // Handle multiple categories (an array)
        //       filteredProducts = hardcodedProducts.filter((product) =>
        //         selectedCategories.includes('All') || selectedCategories.includes(product.category)
        //       );
        //     } else {
        //       // Handle a single category (a string)
        //       filteredProducts = hardcodedProducts.filter((product) =>
        //         selectedCategories === 'All' || product.category === selectedCategories
        //       );
        //     }
          
        //     // Slice the filtered products based on the limit
        //     setProducts(filteredProducts.slice(0, limit));
        // }, [selectedCategories, limit]);
        
        // const addToWishlist = (product: IProduct) => {
        //     if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
        //         setWishlist([...wishlist, product]);
        //     }
        // };
    
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
        <div className="product-list">
            <ul className='product-list-info-below-grid'>
                {products.length >= 1 && (
                products.map((product) => (            
                    <li className='product-list-info-below' key={product.id}>
                        <a className='product-card-info-below' href={`/product/${product.id}`}>
                            <div className='product-card-info-below'>
                                {product.salesprice !== null && (
                                <div className='product-sale-label'>SALE</div>
                                )}
                                {/* <img className='product-card-info-below-img' src={product.image[0].url} alt={product.name} /> */}
                                <p className='product-card-rating'><i className="fa-regular fa-star"></i>({product.rating})</p>
                                <h2 className='product-card-name'>{product.name}</h2>
                                <div className='product-card-price-container'>
                                    {product.salesprice !== null ? (
                                        <>
                                        <p className='product-card-price-strikethrough'>${product.price}</p>                                        
                                        <p className='product-card-salesprice'>${product.salesprice}</p>
                                        </>
                                    ) : (
                                        <p className='product-card-price'>${product.price}</p>
                                    )}
                                </div>
                                <div className='product-card-info-below-buttons'>
                                    {/* <button className='product-card-info-below-button' onClick={() => addToWishlist(product)}>
                                        <i className="fa-regular fa-heart"></i>
                                    </button> */}
                                    <button className='product-card-info-below-button' onClick={() => addToCart(product)}>
                                        <i className="fa-regular fa-shopping-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </li>
                )))}
            </ul>
        </div>
    )
}


export default ProductList;
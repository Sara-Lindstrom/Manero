import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../Images/pexels-photo-7209396.jpeg';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    salesprice: number;
    rating: number;
}

interface ProductListProps {
    selectedCategory: string;
}

const ProductList: React.FC<ProductListProps> = ({ selectedCategory }) => {
        const [products, setProducts] = useState<Product[]>([]);
        const [wishlist, setWishlist] = useState<Product[]>([]);
        const [cart, setCart] = useState<{ [key: number]: number }>({});
      
        useEffect(() => {
            const hardcodedProducts: Product[] = [
                { id: 1, name: 'Product 1', image: img, price: 19.99, salesprice: 0, rating: 3 },
                { id: 2, name: 'Product 2', image: img, price: 24.99, salesprice: 0, rating: 4  },
                { id: 3, name: 'Product 3', image: img, price: 14.99, salesprice: 9.99, rating: 5  },
                { id: 4, name: 'Product 3', image: img, price: 14.99, salesprice: 9.99, rating: 5  },
            ];

            setProducts(hardcodedProducts);
        }, []);
        
          //fetchProductsFromAPI()
            //.then((data) => setProducts(data))
            //.catch((error) => console.error(error));
        //}, []);
      
        const fetchProductsFromAPI = async (): Promise<Product[]> => {
          try {
            // Replace this with your actual API endpoint
            const response = await fetch('https://localhost3000/products');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            throw error;
          }
        };
        
        const addToWishlist = (product: Product) => {
            // Check if the product is not already in the wishlist
            if (!wishlist.find((item) => item.id === product.id)) {
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
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductListSection from '../sections/ProductListSection';
import HomepageShoecaseOffer from '../sections/HomepageShoecaseOffer';
import { CardType, IProduct } from '../Interfaces/IProduct';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import HomePageCategoryNav from '../sections/HomePageCategoryNav';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import React from 'react';
import { fetchBestSellingProducts, fetchNewestProducts } from '../helpers/ProductHandler';

const HomeView: React.FC = () => {
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [newestProducts, setNewestProducts] = useState<IProduct[]>([]);
    const [bestSellerProducts, setBestSellerProducts] = useState<IProduct[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
    }, [isAuthenticated]);

    useEffect(() => {
        const fetchProducts = async () => {
            const newestProductsdb = await fetchNewestProducts();
            const bestSellerProductsdb = await fetchBestSellingProducts();
            setNewestProducts(newestProductsdb);
            setBestSellerProducts(bestSellerProductsdb);
        };
        fetchProducts();

        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const addToWishlist = (product: IProduct) => {
        // No logic implemented
    };

    const addToCart = (product: IProduct) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };
            updatedCart[product.id] = (updatedCart[product.id] || 0) + 1;
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const cartItemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    
    return (
        <>
            <BreadcrumbSection cartItemCount={cartItemCount} showCartItem={true} currentPage="Home" showHamburgerButton={true} showBackButton={true} />
            <HomePageCategoryNav />
            <HomepageShoecaseOffer />
            <div className='product-showcase-section-container container'>
                <section className='product-showcase-section'>
                    <div className='product-showcase-section-header'>
                        <h2 className='product-showcase-name'>Featured Products</h2>
                        <Link to={`/products/${"newest"}`} className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <section className='categorynav'>
                        <div className='scrollsection'>
                            <div className="scrollmenu">
                                <li>
                                    <ProductListSection products={newestProducts.slice(0, 4)} cardType={CardType.SmallCard} addToCart={addToCart} addToWishlist={addToWishlist} />
                                </li>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='product-showcase-section'>
                    <div className='product-showcase-section-header'>
                        <h2 className='product-showcase-name'>Best Seller</h2>
                        <Link to={`/products/${"bestseller"}`} className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <ProductListSection products={bestSellerProducts.slice(0, 3)} cardType={CardType.NormalCard} flexed={false} addToCart={addToCart} addToWishlist={addToWishlist} />
                </section>
            </div>
            <HomepageShoecaseOffer />
            <IconsNavigationSection isAuthenticated={isAuthenticated} />
        </>

    );
};

export default HomeView;
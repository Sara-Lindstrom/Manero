import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductListSection from '../sections/ProductListSection';
import HomepageShoecaseOffer from '../sections/HomepageShoecaseOffer';
import { CardType } from '../Interfaces/IProduct';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import HomePageCategoryNav from '../sections/HomePageCategoryNav';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import React from 'react';


// Testview to demonstrate how and when to use cardType as reusable. In this case also sorted by category for the product
const TestView: React.FC = () => {
    return (
        <>
            <BreadcrumbSection currentPage="Test" showHamburgerButton={true} showBackButton={true} showCartItem={true} />
            <HomePageCategoryNav />
            <HomepageShoecaseOffer />
            <div className='product-showcase-section-container container'>
                <section className='product-showcase-section'>
                    <div className='product-showcase-section-header'>
                        <h2 className='product-showcase-name'>Featured Products</h2>
                        <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <ProductListSection category='Featured' cardType={CardType.SmallCard} />
                </section>
                <section className='product-showcase-section'>
                    <div className='product-showcase-section-header'>
                        <h2 className='product-showcase-name'>Best Seller</h2>
                        <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <ProductListSection category='BestSeller' cardType={CardType.NormalCard} />
                </section>
            </div>
            <HomepageShoecaseOffer />
        </>

    );
};

export default TestView;
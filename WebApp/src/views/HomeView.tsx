import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import HomePageCategoryNav from '../sections/HomePageCategoryNav';
import HomepageShoecaseOffer from '../sections/HomepageShoecaseOffer';
import FeatuerdProductList from '../sections/FeatuerdProductList';
import BestSellerProductList from '../sections/BestSellerProductList';
import BreadcrumbSection from '../sections/BreadcrumbSection';

const HomeView = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Category 1', 'Category 2', 'Category 3', 'Category 4']);

  return (

    <>
      <BreadcrumbSection currentPage="Best Sellers" showHamburgerButton={true} showBackButton={true} showCartItem={true}/>
      <HomePageCategoryNav />
      <HomepageShoecaseOffer />
      <section className='container'>
        <div className='product-showcase-section-header'>
          <h2 className='product-showcase-name'>Featured Products</h2>
          <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <FeatuerdProductList selectedCategories={selectedCategories} limit={4}/>
      </section>
      <section className='container'>
        <div className='product-showcase-section-header'>
          <h2 className='product-showcase-name'>Best Seller</h2>
          <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <BestSellerProductList selectedCategories={selectedCategories} limit={3}/>
      </section>
      <HomepageShoecaseOffer />
    </>
    
  )
}

export default HomeView
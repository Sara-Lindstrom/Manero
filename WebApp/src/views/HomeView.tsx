import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../sections/ProductList'

const HomeView = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Category 1', 'Category 2', 'Category 3', 'Category 4']);

  return (
    <section className='home-page-showcase'>
        <div className='container showcase-offers'>
            <h2>Take 50% off!</h2>
            <a href="#" className='btn white-btn'>SHOP NOW</a>
        </div>

        <div className='featured-products'>
            <h2 className='homepage-section-header'>Featured Products</h2>
            <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <ProductList selectedCategories={selectedCategories} limit={4} />


    </section>
  )
}

export default HomeView
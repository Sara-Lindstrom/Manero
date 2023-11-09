import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import HomePageCategoryNav from '../sections/HomePageCategoryNav';
import HomepageShoecaseOffer from '../sections/HomepageShoecaseOffer';
import FeatuerdProductList from '../sections/FeatuerdProductList';
import BestSellerProductList from '../sections/BestSellerProductList';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { IProduct } from '../Interfaces/IProduct';
import { fetchBestSellingProducts, fetchNewestProducts } from '../helpers/ProductHandler';
import IconsNavigationSection from '../sections/IconsNavigationSection';

const HomeView = () => {
  const [newestProducts, setNewestProducts] = useState<IProduct[]>([]);
  const [bestSellerProducts, setBestSellerProducts] = useState<IProduct[]>([]);


  const fetchProducts = async () => {
    let newestProductsdb = await fetchNewestProducts();
    let bestSellerProductsdb = await fetchBestSellingProducts();

    setNewestProducts(newestProductsdb);
    setBestSellerProducts(bestSellerProductsdb);
} 

  useEffect(() => {
    fetchProducts();
}, []);
  

  return (

    <>
      <BreadcrumbSection currentPage="Best Sellers" showHamburgerButton={true} showBackButton={true} showCartItem={true}/>
      <HomePageCategoryNav />
      <HomepageShoecaseOffer />
      <div className='product-showcase-section-container container'>
        <section className='product-showcase-section'>
          <div className='product-showcase-section-header'>
            <h2 className='product-showcase-name'>Featured Products</h2>
            <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <FeatuerdProductList products={newestProducts.slice(0, 4)} />
        </section>
        <section className='product-showcase-section'>
          <div className='product-showcase-section-header'>
            <h2 className='product-showcase-name'>Best Seller</h2>
            <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
          </div>
          <BestSellerProductList products={bestSellerProducts.slice(0, 3)} />
        </section>
      </div>
      <HomepageShoecaseOffer />
      <IconsNavigationSection />
    </>
    
  )
}

export default HomeView
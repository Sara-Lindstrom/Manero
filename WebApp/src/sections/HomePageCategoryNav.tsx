import React from 'react'
import homepageCategoryImage from '../Images/homepageCategoryImage.png'

const HomePageCategoryNav = () => {
  return (
    <section className='categorynav'>
      <div className='container scrollsection'>
        <div className="scrollmenu">
          <div className='home-page-nav-content'>
            <img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />
            <a href="/category#men" className='home-nav-text'>MEN</a>
          </div>
          <div className='home-page-nav-content'>
          <img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />            
          <a href="/category#women" className='home-nav-text'>WOMEN</a>
          </div>
          <div className='home-page-nav-content'>
          <img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />            
          <a href="/category#kids" className='home-nav-text'>KIDS</a>
          </div>
          <div className='home-page-nav-content'>
          <img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />            
          <a href="/category#accessories" className='home-nav-text'>ACCESSORIES</a>  
          </div>              
        </div>
      </div>
    </section>
  )
}
export default HomePageCategoryNav
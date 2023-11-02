import React from 'react'
import { Link } from 'react-router-dom';

const BestSellerPreviewSection = () => {

  return (
    <section className='best-seller-preview'>
        <div className='container best-seller-subheader'>
            <h2>Best Seller</h2>
            <Link to="/bestSellersView" className='homepage-section-viewall'>view all <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <div className=''>

        </div>

    </section>
  )
}

export default BestSellerPreviewSection
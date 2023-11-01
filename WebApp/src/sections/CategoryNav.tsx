import React, { useState } from 'react'

function CategoryNav() {
    const [activeLink, setActiveLink] = useState('home');
  
    const handleLinkClick = (link: string) => {
      setActiveLink(link);
    };

  return (
<section className='categorynav'>
      <div className='container scrollsection'>
        <div className="scrollmenu">
          <a href="#men" className={activeLink === 'men' ? 'active' : ''} onClick={() => handleLinkClick('men')} >MEN</a>

          <a href="#women" className={activeLink === 'women' ? 'active' : ''} onClick={() => handleLinkClick('women')}>WOMEN</a>

          <a href="#kids" className={activeLink === 'kids' ? 'active' : ''} onClick={() => handleLinkClick('kids')}>KIDS</a>

          <a href="#accessories" className={activeLink === 'accessories' ? 'active' : ''} onClick={() => handleLinkClick('accessories')} >ACCESSORIES</a>
        </div>
      </div>
    </section>


  )
}
export default CategoryNav;
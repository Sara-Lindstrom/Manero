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
          <a href="#men" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')} >MEN</a>

          <a href="#women" className={activeLink === 'news' ? 'active' : ''} onClick={() => handleLinkClick('news')}>WOMEN</a>

          <a href="#kids" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>KIDS</a>

          <a href="#accessories" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')} >ACCESSORIES</a>
        </div>
      </div>
    </section>


  )
}
export default CategoryNav;
import React from 'react'
import { NavLink } from 'react-router-dom'

const IconsNavigationSection = () => {
    return (
        <section className='iconsNav'>
            <div className='container'>
                <div className='icons'>
                    <div className='icon'><NavLink to="/" data-testid="homeLink" ><i className="fa-regular fa-house"></i></NavLink></div>
                    <div className='icon'><NavLink to="/search"  data-testid="searchLink"><i className="fa-regular fa-magnifying-glass"></i></NavLink></div>
                    <div className='icon'><NavLink to="/cart"  data-testid="cartLink"><i className="fa-regular fa-bag-shopping"></i></NavLink></div>
                    <div className='icon'><NavLink to="/wishlist"  data-testid="wishlistLink"><i className="fa-regular fa-heart"></i></NavLink></div>
                <div className='icon'><NavLink to="/profile"  data-testid="profileLink"><i className="fa-regular fa-user"></i></NavLink></div>
                </div>
            </div>
        </section>
    )
}

export default IconsNavigationSection
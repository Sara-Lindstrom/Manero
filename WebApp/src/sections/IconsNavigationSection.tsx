import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
interface IconsNavigationSectionProps {
    isAuthenticated: boolean;
}

const IconsNavigationSection: React.FC<IconsNavigationSectionProps> = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
    }, [isAuthenticated]);

    return (
        <section className='iconsNav'>
            <div className='container'>
                <div className='icons'>
                    <div className='icon'><NavLink to="/home" data-testid="homeLink" ><i className="fa-regular fa-house"></i></NavLink></div>
                    <div className='icon'><NavLink to="/pageNotFound" data-testid="searchLink"><i className="fa-regular fa-magnifying-glass"></i></NavLink></div>
                    <div className='icon'><NavLink to="/cart" data-testid="cartLink"><i className="fa-regular fa-bag-shopping"></i></NavLink></div>
                    <div className='icon'><NavLink to="/pageNotFound" data-testid="wishlistLink"><i className="fa-regular fa-heart"></i></NavLink></div>
                    <div className='icon'>
                        <NavLink to={isAuthenticated ? '/viewProfile' : '/signin'} data-testid="viewProfileLink">
                            <i className="fa-regular fa-user"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IconsNavigationSection;
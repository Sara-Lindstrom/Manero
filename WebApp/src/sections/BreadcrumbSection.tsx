import React, { useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../Images/logo.svg'
import SearchField from '../components/SearchField';
import BurgerMenuSection from './BurgerMenuSection';
import { getCartItemCount } from '../helpers/ProductHandler';
interface IBreadcrumbProps {

    showBackButton?: boolean; // show backbutton
    onNavigateBack?: () => void; //method for going back
    showHamburgerButton?: boolean; // show hamburgerbutton
    currentPage: string // current page string 
    showCurrentPage?: boolean; // show current page
    showSearchField?: boolean; // show search field
    cartItemCount?: number;
    showCartItem?: boolean; // If we want to hide the CartItem
}

const BreadcrumbSection: React.FC<IBreadcrumbProps> = ({ currentPage, showBackButton, onNavigateBack, showCartItem, showCurrentPage, showSearchField, showHamburgerButton, cartItemCount }) => {
    return (
        <section className='breadcrumb'>
            <div className='container'>
                <ul className='breadcrumb-list'>

                    <div className='first-column'>
                        {showHamburgerButton ? ( // Show hamburger if showHamburgerButton is true
                            <BurgerMenuSection />

                        ) : ( // Show backButton if showHamburgerButton is false or showBackButton is true
                            <li className='backButton'>
                                {showBackButton && onNavigateBack && (
                                    <button onClick={onNavigateBack}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                )}
                            </li>
                        )}
                    </div>

                    <div className='second-column'>
                        {/* If statement, if currentPage is true currentPage is showing, if seachField is true that one is showing ELSE logotype will show */}
                        {showCurrentPage ? (
                            <li className='currentPage'>{currentPage}</li>
                        ) : showSearchField ? (
                            <li className='searchField'>
                                < SearchField />
                            </li>
                        ) : (
                            <img className='logotype' src={logo} alt='logo' />
                        )}
                    </div>

                    <div className='third-column'>
                        <li className="cart">
                            {showCartItem ? (
                                <NavLink to={'/cart'}>
                                    <span className="translate-middle badge rounded-pill">
                                        {String(getCartItemCount())}
                                    </span>
                                    <i className="fa-regular fa-bag-shopping"></i>
                                </NavLink>
                            ) : null}
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default BreadcrumbSection;
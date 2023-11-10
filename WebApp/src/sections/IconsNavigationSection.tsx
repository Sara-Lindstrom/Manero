import { NavLink } from 'react-router-dom';

interface IconsNavigationSectionProps {
    isAuthenticated: boolean;
}

const IconsNavigationSection: React.FC<IconsNavigationSectionProps> = ({ isAuthenticated }) => {
    return (
        <section className='iconsNav'>
            <div className='container'>
                <div className='icons'>
                    <div className='icon'><NavLink to="/" data-testid="homeLink" ><i className="fa-regular fa-house"></i></NavLink></div>
                    <div className='icon'><NavLink to="/search" data-testid="searchLink"><i className="fa-regular fa-magnifying-glass"></i></NavLink></div>
                    <div className='icon'><NavLink to="/cart" data-testid="cartLink"><i className="fa-regular fa-bag-shopping"></i></NavLink></div>
                    <div className='icon'><NavLink to="/wishlist" data-testid="wishlistLink"><i className="fa-regular fa-heart"></i></NavLink></div>
                    {isAuthenticated && <div className='icon'><NavLink to="/viewProfile" data-testid="viewProfileLink"><i className="fa-regular fa-user"></i></NavLink></div>}
                </div>
            </div>
        </section>
    )
}

export default IconsNavigationSection;
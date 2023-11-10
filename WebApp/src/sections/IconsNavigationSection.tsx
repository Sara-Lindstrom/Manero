import { NavLink, useNavigate } from 'react-router-dom';

interface IconsNavigationSectionProps {
    isAuthenticated: boolean;
}

const IconsNavigationSection: React.FC<IconsNavigationSectionProps> = ({ isAuthenticated }) => {
    console.log('Is Authenticated:', isAuthenticated);

    const navigate = useNavigate();

    const handleProfileClick = () => {
        // Check if the user is authenticated
        if (isAuthenticated) {
            // Navigate to the profile page
            navigate('/viewProfile');
        } else {
            // Navigate to the sign-in page
            navigate('/signin');
        }
    };

    return (
        <section className='iconsNav'>
            <div className='container'>
                <div className='icons'>
                    <div className='icon'><NavLink to="/home" data-testid="homeLink" ><i className="fa-regular fa-house"></i></NavLink></div>
                    <div className='icon'><NavLink to="/search" data-testid="searchLink"><i className="fa-regular fa-magnifying-glass"></i></NavLink></div>
                    <div className='icon'><NavLink to="/cart" data-testid="cartLink"><i className="fa-regular fa-bag-shopping"></i></NavLink></div>
                    <div className='icon'><NavLink to="/wishlist" data-testid="wishlistLink"><i className="fa-regular fa-heart"></i></NavLink></div>
                    <div className='icon'>
                        <span onClick={handleProfileClick} data-testid="viewProfileLink">
                            <i className="fa-regular fa-user"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IconsNavigationSection;
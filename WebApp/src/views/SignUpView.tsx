import SignUpFormSection from '../sections/SignUpFormSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUpView: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Sign up" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />
            <div className='container title-container'>
                <i className="fa-light fa-pipe"></i>
                <h1 className='sub-title'>Sign Up</h1>
            </div>
            <SignUpFormSection navigate={navigate} />
            <div className='container my-4 text-center'>
                <NavLink className="link" to="/signin">Already Have An Account? Sign In.</NavLink>
            </div>
            <div className='container d-flex justify-content-center'>
                <button className='round-btn'><i className="fa-brands fa-facebook-f"></i></button>
                <button className='round-btn'><i className="fa-brands fa-twitter"></i></button>
                <button className='round-btn'><i className="fa-brands fa-google"></i></button>
            </div>
        </>
    )
}

export default SignUpView;
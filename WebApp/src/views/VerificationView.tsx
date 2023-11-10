import BreadcrumbSection from '../sections/BreadcrumbSection';
import { NavLink, useNavigate } from 'react-router-dom';
import VerificationSection from '../sections/VerificationSection';

const VerificationView = () => {

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Verify your phone number" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />

            <div className="verification-container">
                <NavLink className="link-outside" to="/accountconfirmed">Enter your OTP code here.</NavLink>
            </div>

            <VerificationSection navigate={navigate} />
        </>
    )
}

export default VerificationView
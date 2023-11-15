import BreadcrumbSection from '../sections/BreadcrumbSection';
import { NavLink, useNavigate } from 'react-router-dom';
import VerificationSection from '../sections/VerificationSection';

const VerificationView: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Verify your phone number" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />

            <div className="verification-container">
                <div className="link-outside">Enter your OTP code here.</div>
            </div>

            <VerificationSection navigate={navigate} />
        </>
    )
}

export default VerificationView
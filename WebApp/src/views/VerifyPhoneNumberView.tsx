import VerifyPhoneNumberSection from '../sections/VerifyPhoneNumberSection';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { useNavigate } from 'react-router-dom';

const VerifyPhoneNumberView: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Verify your phone number" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />

            <VerifyPhoneNumberSection navigate={navigate} />

        </>
    )
}

export default VerifyPhoneNumberView;
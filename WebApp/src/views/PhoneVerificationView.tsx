import BreadcrumbSection from '../sections/BreadcrumbSection';
import { NavLink, useNavigate } from 'react-router-dom';
import PhoneVerificationSection from '../sections/PhoneVerificationSection';

const PhoneVerificationView = () => {

  const navigate = useNavigate();
  const handleNavigateBack = () => {
    window.history.back();
  };

  return (
    <>
      <BreadcrumbSection currentPage="Verify your phone number" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />

      <div className="verification-container">
        <NavLink className="link-outside" to="/">Enter your OTP code here.</NavLink>
      </div>

      <PhoneVerificationSection navigate={navigate} />
    </>
  )
}

export default PhoneVerificationView
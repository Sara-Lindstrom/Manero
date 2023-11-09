import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ForgotPasswordSection from '../sections/ForgotPasswordSection'

const ForgotPasswordView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back();
  };
  
  return (
    <>
        <BreadcrumbSection currentPage="Forgot Password" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} showCartItem={false} showHamburgerButton={false} />

        <ForgotPasswordSection />
    </>
  )
}

export default ForgotPasswordView
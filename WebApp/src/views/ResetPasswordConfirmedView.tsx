import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ResetPasswordConfirmedSection from '../sections/ResetPasswordConfirmedSection'

const ResetPasswordConfirmedView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back();
  };
  
  return (
    <>
        <BreadcrumbSection currentPage="Forgot Password" showBackButton={false} onNavigateBack={handleNavigateBack} showCurrentPage={false} showCartItem={false} showHamburgerButton={false} />

        <ResetPasswordConfirmedSection />
    </>
  )
}

export default ResetPasswordConfirmedView
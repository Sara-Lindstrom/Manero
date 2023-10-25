import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ForgotPasswordSection from '../sections/ForgotPasswordSection'



const ForgotPasswordView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };
  return (
    <>
        <BreadcrumbSection currentPage="Forgot Password" showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <ForgotPasswordSection />
    </>
  )
}

export default ForgotPasswordView
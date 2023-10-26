import React from 'react'
import ChangePasswordSection from '../sections/ChangePasswordSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const ChangePasswordView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };
  return (
    <>
        <BreadcrumbSection currentPage="Reset password" showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <ChangePasswordSection />
    </>
  )
}

export default ChangePasswordView
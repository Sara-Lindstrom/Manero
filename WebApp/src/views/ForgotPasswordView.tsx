import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ForgotPasswordSection from '../sections/ForgotPasswordSection'



const ForgotPasswordView: React.FC = () => {
  return (
    <>
        <BreadcrumbSection currentPage="Forgot Password" />
        <ForgotPasswordSection />
    </>
  )
}

export default ForgotPasswordView
import React from 'react'
import ChangePasswordSection from '../sections/ChangePasswordSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const ChangePasswordView: React.FC = () => {
  return (
    <>
        <BreadcrumbSection currentPage="Reset password" />
        <ChangePasswordSection />
    </>
  )
}

export default ChangePasswordView
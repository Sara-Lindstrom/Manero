import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ViewProfileSection from '../sections/ViewProfileSection'

const ViewProfile: React.FC = () => { 
   

  return (
    <>
      <BreadcrumbSection currentPage='My Profile' showCurrentPage={true} showCartItem={true} showHamburgerButton={true} />
      <ViewProfileSection />
    </>
  )
}

export default ViewProfile
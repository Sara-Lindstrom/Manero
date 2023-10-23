import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'

const paymentMethodView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };

  return (
    <>
        <BreadcrumbSection currentPage='Payment Method' showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <PayoneersSection />
    </>
  )
}

export default paymentMethodView
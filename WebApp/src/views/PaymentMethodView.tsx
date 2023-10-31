import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'
import PaymentCardsSection from '../sections/PaymentCardsSection'

const paymentMethodView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Using window.history to go back to previous view
  };

  // state true or false on showBackbutton

  return (
    <>
        <BreadcrumbSection currentPage='Payment Method' showBackButton={true} onNavigateBack={handleNavigateBack} showSearchField={true} />
        <PaymentCardsSection />
        <PayoneersSection />
    </>
  )
}

export default paymentMethodView
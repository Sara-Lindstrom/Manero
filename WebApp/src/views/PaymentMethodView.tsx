import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'
import PaymentCardsSection from '../sections/PaymentCardsSection'

const paymentMethodView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Anv�nder window.history f�r att g� tillbaka ett steg
  };

  // state true or false on showBackbutton

  return (
    <>
        <BreadcrumbSection currentPage='Payment Method' showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <PaymentCardsSection />
        <PayoneersSection />
    </>
  )
}

export default paymentMethodView
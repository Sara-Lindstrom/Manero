import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'
import PaymentCardsSection from '../sections/PaymentCardsSection'

const paymentMethodView: React.FC = () => {
  return (
    <>
        <BreadcrumbSection currentPage='Payment Method' />
        <PaymentCardsSection />
        <PayoneersSection />
    </>
  )
}

export default paymentMethodView
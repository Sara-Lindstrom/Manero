import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'

const paymentMethodView: React.FC = () => {
  return (
    <>
        <BreadcrumbSection currentPage='Payment Method' />
        <PayoneersSection />
    </>
  )
}

export default paymentMethodView
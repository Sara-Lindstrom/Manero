import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import PayoneersSection from '../sections/PayoneerSection'
import PaymentCardsSection from '../sections/PaymentCardsSection'

const paymentMethodView: React.FC = () => {
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Payment Method' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <PaymentCardsSection />
            <PayoneersSection />
        </>
    )
}

export default paymentMethodView;
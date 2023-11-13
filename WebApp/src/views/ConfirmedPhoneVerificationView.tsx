import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ConfirmedPhoneVerificationSection from '../sections/ConfirmedPhoneVerificationSection'

const ConfirmedPhoneVerificationView: React.FC = () => {
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Account confirmed" showBackButton={false} onNavigateBack={handleNavigateBack} showCurrentPage={false} showCartItem={false} showHamburgerButton={false} />

            <ConfirmedPhoneVerificationSection />
        </>
    )
}

export default ConfirmedPhoneVerificationView;
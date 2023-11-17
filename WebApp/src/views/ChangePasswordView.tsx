import React from 'react'
import ChangePasswordSection from '../sections/ChangePasswordSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ChangePasswordView: React.FC = () => {
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage="Reset password" showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <ChangePasswordSection />
        </>
    )
}

export default ChangePasswordView;
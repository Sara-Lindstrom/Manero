import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import AddCardSection from '../sections/AddCardSection';

const AddCardView: React.FC = () => {
    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <AddCardSection />
        </>
    )
}

export default AddCardView;
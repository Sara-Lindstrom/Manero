import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import LeaveAReviewSection from '../sections/LeaveAReviewSection';

const LeaveAReviewView: React.FC = () => {

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <LeaveAReviewSection />
        </>
    )
}

export default LeaveAReviewView;
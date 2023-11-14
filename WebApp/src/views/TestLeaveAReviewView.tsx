import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import TestLeaveAReviewSection from '../sections/TestLeaveAReviewSection';

const TestLeaveAReviewView: React.FC = () => {

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <TestLeaveAReviewSection />
        </>
    )
}

export default TestLeaveAReviewView;
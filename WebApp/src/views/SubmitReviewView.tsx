import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import SubmitReviewSection from '../sections/SubmitReviewSection';
import { useParams } from 'react-router-dom';

const SubmitReviewView: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            {productId && <SubmitReviewSection productId={productId} />}
        </>
    );
};

export default SubmitReviewView;
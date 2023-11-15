import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ReviewListComponent from '../components/ReviewListComponent';
import { useParams } from 'react-router-dom';

const ReviewView: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            {productId && <ReviewListComponent productId={productId} />}
        </>
    );
};

export default ReviewView;
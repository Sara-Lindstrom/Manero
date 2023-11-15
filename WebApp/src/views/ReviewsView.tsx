import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ReviewListComponent from '../components/ReviewListComponent';
import { useParams } from 'react-router-dom';

const ReviewView: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const hardcodedProductId = "DDB9E337-B2E4-41FA-A97E-33BB39CBE80F";

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (
        <>
            <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
            <ReviewListComponent productId={hardcodedProductId} />
        </>
    );
};

export default ReviewView;
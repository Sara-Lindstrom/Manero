import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import Review from '../components/Review';

const ReviewsView = () => {

    const handleNavigateBack = () => {
        window.history.back();
      };

  return (
    <>
    <BreadcrumbSection currentPage='Reviews' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
    <Review />
    <Review />
    <Review />
    </>
  )
}

export default ReviewsView
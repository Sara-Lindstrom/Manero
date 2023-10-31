import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import CategoryNav from '../sections/CategoryNav';

const Categoryview: React.FC = () => {
    const handleNavigateBack = () => {
      window.history.back();
    };
  return (
    <>
        <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <CategoryNav/>
    </>
  )
}

export default Categoryview;
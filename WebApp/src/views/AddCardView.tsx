import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import AddCardSection from '../sections/AddCardSection';

const AddCardView: React.FC = () => {
  function handleNavigateBack(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
        <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <AddCardSection />
    </>
  );
};

export default AddCardView;

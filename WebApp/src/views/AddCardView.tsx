import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import AddCardSection from '../sections/AddCardSection';

const AddCardView: React.FC = () => {
  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };

  return (
    <>
        <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack}/>
        <AddCardSection />
    </>
  );
};

export default AddCardView;

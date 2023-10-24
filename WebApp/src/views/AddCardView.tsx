import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import AddCardSection from '../sections/AddCardSection';

const AddCardView: React.FC = () => {
  return (
    <>
        <BreadcrumbSection currentPage='Add a new card' />
        <AddCardSection />
    </>
  );
};

export default AddCardView;

import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import CategoryNav from '../sections/CategoryNav';
import CategorySection from '../sections/CategorySection';
import IconsNavigationSection from '../sections/IconsNavigationSection';


const CategoryView: React.FC = () => {
    const handleNavigateBack = () => {
      window.history.back();
    };
  return (
    <>
        <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack} showSearchField={true} showCartItem={true} />
        <CategoryNav />
        <CategorySection />
        <IconsNavigationSection />
    </>
  )
}

export default CategoryView;
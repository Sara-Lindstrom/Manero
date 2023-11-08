import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import CategorySection from '../sections/CategorySection';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import CategoryNav from '../sections/CategoryNav';


const CategoryView: React.FC = () => {
    const handleNavigateBack = () => {
      window.history.back();
    };
  return (
    <>
        <BreadcrumbSection currentPage='Category' showBackButton={true} onNavigateBack={handleNavigateBack} showSearchField={true} showCartItem={true} />
        <CategoryNav />
        <CategorySection />
        <IconsNavigationSection />
    </>
  )
}

export default CategoryView;
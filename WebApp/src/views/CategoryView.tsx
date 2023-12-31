import React, { useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import IconsNavigationSection from '../sections/IconsNavigationSection';
import CategoryNav from '../sections/CategoryNav';

const CategoryView: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleNavigateBack = () => {
        window.history.back();
    };
    
  return (
    <>
        <BreadcrumbSection currentPage='Category' showHamburgerButton={true} onNavigateBack={handleNavigateBack} showSearchField={true} showCartItem={true} />
        <CategoryNav />
        <IconsNavigationSection isAuthenticated={isAuthenticated}/>
    </>
  )
}

export default CategoryView;
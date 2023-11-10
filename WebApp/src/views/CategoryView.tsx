import React, { useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import CategorySection from '../sections/CategorySection';
import IconsNavigationSection from '../sections/IconsNavigationSection';
import CategoryNav from '../sections/CategoryNav';

const CategoryView: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleNavigateBack = () => {
        window.history.back();
    };
    return (
        <>
            <BreadcrumbSection currentPage='Add a new card' showBackButton={true} onNavigateBack={handleNavigateBack} showSearchField={true} showCartItem={true} />
            <CategoryNav />
            <CategorySection />
            <IconsNavigationSection isAuthenticated={isAuthenticated} />
        </>
    )
}

export default CategoryView;
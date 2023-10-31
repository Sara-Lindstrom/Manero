import React, { useState } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import ProductList from '../sections/ProductList';

const BestSellersView: React.FC = () => {
    const [isSliderDropdownVisible, setSliderDropdownVisible] = useState(false);
    const [selectedSliderCategory, setSelectedSliderCategory] = useState('All');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const sliderCategories = ['All', 'Slider Category 1', 'Slider Category 2', 'Slider Category 3', 'Slider Category 4'];
    const categories = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];

    const toggleSliderDropdown = () => {
        setSliderDropdownVisible(!isSliderDropdownVisible);
    };

    const handleSliderCategorySelect = (category: string) => {
        setSelectedSliderCategory(category);
        setSliderDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setDropdownVisible(false);
    };

    const handleNavigateBack = () => {
        window.history.back(); 
      };

    return (
        <>
         <BreadcrumbSection currentPage="Best Sellers" showBackButton={true} onNavigateBack={handleNavigateBack}/>

        <div className='best-seller-filter'>
            <div className="slider" onClick={toggleSliderDropdown}>
                <i className="fa-solid fa-sliders"></i>
                {isSliderDropdownVisible && (
                    <div className="category-dropdown">
                        <ul>
                            {sliderCategories.map((sliderCategory) => (
                                <li className='category-dropdown-obejcts'
                                    key={sliderCategory}
                                    onClick={() => handleSliderCategorySelect(sliderCategory)}
                                >
                                    {sliderCategory}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="sorting-by" onClick={toggleDropdown}>
                Sorting By <i className={`fa-solid ${isDropdownVisible ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                {isDropdownVisible && (
                    <div className="category-dropdown">
                        <ul>
                            {categories.map((category) => (
                                <li className='category-dropdown-obejcts'
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

        <ProductList  selectedCategory={selectedCategory} limit={4}  />
        </>
    )
}

export default BestSellersView;
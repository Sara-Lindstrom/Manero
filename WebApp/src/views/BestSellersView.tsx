import React, { useState } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { NavLink } from 'react-router-dom'
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
        setDropdownVisible(false); // Close the dropdown after selecting a category.
    };

    const handleNavigateBack = () => {
        window.history.back(); 
      };

    return (
        <>
         <BreadcrumbSection currentPage="Best Sellers" showBackButton={true} onNavigateBack={handleNavigateBack}/>

        <div className='best-seller-filter'>
            <i className="slider fa-solid fa-sliders" onClick={toggleSliderDropdown}></i>
                {isSliderDropdownVisible && (
                    <div className="category-dropdown">
                        <ul>
                            {sliderCategories.map((category) => (
                                <li
                                    key={category}
                                    onClick={() => handleSliderCategorySelect(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            <div className="sorting-by" onClick={toggleDropdown}>
                Sorting By <i className={`fa-solid ${isDropdownVisible ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                {isDropdownVisible && (
                    <div className="category-dropdown">
                        <ul>
                            {categories.map((category) => (
                                <li
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

         <ProductList selectedCategory={selectedCategory}  />
        </>
    )
}

export default BestSellersView;
import React, { useEffect, useState } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import ProductList from '../sections/ProductList';
import { fetchAllCategories } from '../helpers/ProductHandler';
import { ICategories } from '../Interfaces/ICategories';

const BestSellersView: React.FC = () => {
    const [isSliderDropdownVisible, setSliderDropdownVisible] = useState(false);
    const [categories, setCategories] = useState<ICategories[] | undefined>([]);
    const [selectedSorting, setSelectedSorting] = useState<string>('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const sortinOptions = ['Newest', 'Best Seller', "Sale"];   
    
    const fetchCategories = async () => {
        try {
            return await fetchAllCategories();
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }; 
    
    useEffect(() => {   
        fetchCategories().then(data => setCategories(data));
    }, []);

    const toggleSliderDropdown = () => {
        setSliderDropdownVisible(!isSliderDropdownVisible);
    };

    const handleSliderCategorySelect = (category: string) => {
        setSelectedSorting(category);
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
                            {categories!.length >= 1 && (
                                categories!.map((category, index) => (
                                    category != undefined && (
                                    <li className='category-dropdown-objects'
                                    key={category.categoryID || index}
                                    onClick={() => handleCategorySelect(category.categoryName)}
                                >
                                    {String(category.categoryName)}
                                </li>
                            ))))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="sorting-by" onClick={toggleDropdown}>
                Sorting By <i className={`fa-solid ${isDropdownVisible ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                {isDropdownVisible && (
                    <div className="category-dropdown">
                        <ul>
                            {sortinOptions!.length >= 1 && (
                                sortinOptions!.map((option, index) => (
                                    option != undefined && (
                                    <li className='category-dropdown-objects'
                                    key={index}
                                    onClick={() => handleCategorySelect(option)}
                                >
                                    {String(option)}
                                </li>
                            ))))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        <ProductList selectedCategories={selectedCategory} limit={4}/>
        </>
    )
}

export default BestSellersView;
import React, { useEffect, useState } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import ProductList from '../sections/ProductList';
import { fetchAllCategories, fetchBestSellers } from '../helpers/ProductHandler';
import { ICategories } from '../Interfaces/ICategories';
import { IProduct } from '../Interfaces/IProduct';
import { SortByBestSeller, SortByNewest, SortBySale } from '../helpers/ProductSorting';

const BestSellersView: React.FC = () => {
    const [isSliderDropdownVisible, setSliderDropdownVisible] = useState(false);
    const [categories, setCategories] = useState<ICategories[] | undefined>([]);
    const [selectedSorting, setSelectedSorting] = useState<string>('');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [products, setProducts] = useState<IProduct[]>([]);


    const sortinOptions = ['Newest', 'Popular', "Sale"];   
    
    const fetchCategories = async () => {
        try {
            return await fetchAllCategories();
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }; 
    
    const fetchProducts = async () => {
        let productsFromDb = await fetchBestSellers(selectedCategory);
        console.log("here");
        setProducts(productsFromDb);
    }      

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);
    
    useEffect(() => {   
        fetchCategories().then(data => setCategories(data));
    }, []);

    useEffect(() => {
        // Clone the products array to avoid mutating the original state
        let sortedProducts = [...products];
    
        // Perform sorting based on the selectedSorting value
        switch (selectedSorting) {
            case 'Newest':
                sortedProducts = SortByNewest(products);
                break;
            case 'Popular':
                sortedProducts = SortByBestSeller(products);
                break;
            case 'Sale':
                sortedProducts = SortBySale(products);
                break;
            default:
                break;
        }
        setProducts(sortedProducts);
    
    }, [selectedSorting]);

    const toggleSliderDropdown = () => {
        setSliderDropdownVisible(!isSliderDropdownVisible);
    };

    const handleSorting = (option: string) => {
        setSelectedSorting(option);
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
                                    onClick={() => handleSorting(option)}
                                >
                                    {String(option)}
                                </li>
                            ))))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        <ProductList products={products}/>
        </>
    )
}

export default BestSellersView;
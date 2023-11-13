import React, { useState, useEffect } from 'react';
import { fetchAllCategories } from '../helpers/ProductHandler';
import { ICategories } from '../Interfaces/ICategories';
import CategorySection from './CategorySection';

function CategoryNav() {
  const [activeLink, setActiveLink] = useState('men');
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    fetchAllCategories()
      .then((data) => {
        const customSortOrder = ['MEN', 'WOMEN', 'KIDS', 'ACCESSORIES'];
        const sortedCategories = data.slice().sort((a, b) => {
          const aIndex = customSortOrder.indexOf(a.categoryName);
          const bIndex = customSortOrder.indexOf(b.categoryName);
          return aIndex - bIndex;
        });
        setCategories(sortedCategories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
      <section className="categorynav">
        <div className="container scrollsection">
          <div className="scrollmenu">
            {categories.map((category) => (
              <a
                key={category.categoryID} href={`#${category.categoryID}`} className={activeLink === category.categoryID ? 'active' : ''} onClick={() => handleLinkClick(category.categoryID)}>
                {category.categoryName}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <CategorySection activeCategory={activeLink} />
    </>
  );
}

export default CategoryNav;
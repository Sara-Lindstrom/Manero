import React, { useState, useEffect } from 'react';

function CategoryNav() {
  const [activeLink, setActiveLink] = useState('men');
  const [categories, setCategories] = useState([]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Fetch categories from the API
    fetch('/api/categories') 
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const getCategoryContent = (category) => {
    // Define the content for each category based on the selected category
  };

  return (
    <section className="categorynav">
      <div className="container scrollsection">
        <div className="scrollmenu">
          {categories.map((category) => (
            <a
              key={category.id} href={`#${category.id}`} className={activeLink === category.id ? 'active' : ''} onClick={() => handleLinkClick(category.id)}> {category.title}
            </a>
          ))}
        </div>
      </div>

      {getCategoryContent(activeLink)}
    </section>
  );
}

export default CategoryNav;
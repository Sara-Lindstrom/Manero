import React, { useState, useEffect } from 'react';
import { fetchAllTags } from '../helpers/ProductHandler';
import { ITags } from '../Interfaces/ITags';

const CategorySection = ({ activeCategory }: { activeCategory: string }) => {
  const [tags, setTags] = useState<ITags[]>([]);

  useEffect(() => {
    // Fetch tags based on the active category
    fetchAllTags()
      .then((allTags) => {
        const activeCategoryTags = allTags.filter((tag) => tag.category === activeCategory);
        setTags(activeCategoryTags);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });
  }, [activeCategory]);

  return (
    <section className='categorysection'>
      <div className='container'>
        <div className='categorygrid'>
          {tags.map((tag) => (
            <a key={tag.tagID} href='#' className="category-item">
              <p>{tag.tagName}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
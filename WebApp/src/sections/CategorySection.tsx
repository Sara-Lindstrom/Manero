import React, { useState, useEffect } from 'react';
import { fetchAllTags } from '../helpers/ProductHandler';
import { ITags } from '../Interfaces/ITags';

const CategorySection = ({ activeCategory }: { activeCategory: string }) => {
  const [tags, setTags] = useState<ITags[]>([]);

  const getTags = async () => {
    try {
    setTags(await fetchAllTags(activeCategory));
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getTags();
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
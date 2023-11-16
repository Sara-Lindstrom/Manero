import { useEffect, useState } from 'react';
import homepageCategoryImage from '../Images/homepageCategoryImage.png';
import { fetchAllCategories } from '../helpers/ProductHandler';
import { ICategories } from '../Interfaces/ICategories';

const HomePageCategoryNav = () => {
    const [categories, setCategories] = useState<ICategories[]>([]);

    const getAllCategories = async () => {
        setCategories(await fetchAllCategories())
    }

    useEffect(() => {
      getAllCategories()
    }, [])
    

    return (
        <section className='categorynav'>
            <div className='container scrollsection'>
                <div className="scrollmenu">
                {categories!.length >= 1 && (
                categories!.map((category) => (
                    <a href={`/category#${category.categoryName}`} key={category.categoryID} className='home-nav-text'><img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />{category.categoryName.toUpperCase()}</a>
                )))}
                </div>
            </div>
        </section>
    )
}
export default HomePageCategoryNav;
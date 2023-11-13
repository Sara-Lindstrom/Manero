import homepageCategoryImage from '../Images/homepageCategoryImage.png';

const HomePageCategoryNav = () => {
    return (
        <section className='categorynav'>
            <div className='container scrollsection'>
                <div className="scrollmenu">
                    <a href="/category#men" className='home-nav-text'><img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />Men</a>
                    <a href="/category#women" className='home-nav-text'><img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />WOMEN</a>
                    <a href="/category#kids" className='home-nav-text'><img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />KIDS</a>
                    <a href="/category#accessories" className='home-nav-text'><img className='HomepageCategoryImage' src={homepageCategoryImage} alt='CategoryImage' />ACCESSORIES</a>
                </div>
            </div>
        </section>
    )
}
export default HomePageCategoryNav;
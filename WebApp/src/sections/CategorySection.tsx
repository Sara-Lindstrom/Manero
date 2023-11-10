interface Category {
    id: string;
    title: string;
    path: string;
    gridProps: string;
}

const categories: Category[] = [
    { id: 'item_1', title: 'Dresses', path: '/BestSellersView', gridProps: '1 / 1 / 2 / 3' },
    { id: 'item_2', title: 'Pants', path: '/BestSellersView', gridProps: '1 / 3 / 2 / 5' },
    { id: 'item_3', title: 'Accessories', path: '/BestSellersView', gridProps: '3 / 3 / 4 / 5' },
    { id: 'item_4', title: 'Shoes', path: '/BestSellersView', gridProps: '3 / 1 / 4 / 3' },
    { id: 'item_5', title: 'T-shirts', path: '/BestSellersView', gridProps: '2 / 1 / 3 / 5' },
];

const CategorySection = () => {
    return (
        <section className='categorysection'>
            <div className='container'>
                <div className='categorygrid'>
                    {categories.map((category) => (
                        <a key={category.id} href={category.path} className="category-item" style={{ gridArea: category.gridProps }}>
                            <p>{category.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default CategorySection;
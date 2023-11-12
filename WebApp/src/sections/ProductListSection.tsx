import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../helpers/ProductHandler';
import ProductListComponent from '../components/ProductListComponent';
import { IProduct, CardType as ICardType } from '../Interfaces/IProduct';

// A section that renders out product cards, can be reused in different views
interface ProductListSectionProps {
    category?: string;
    cardType?: ICardType; 
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ category, cardType }) => {
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [isProductsFound, setIsProductsFound] = useState(true);

    // Load products based on filter in view
    useEffect(() => {
        const loadProducts = async () => {
            if (category) {
                const fetchedProducts = await fetchProductsByCategory(category);
                if (fetchedProducts.length === 0) {
                    setIsProductsFound(false);
                } else {
                    setIsProductsFound(true);
                    setFilteredProducts(fetchedProducts);
                }
            } else {

            }
        };

        loadProducts();
    }, [category]);

    const handleAddToCart = (product: IProduct) => {
        // No functionality implemented
    };

    const handleAddToWishlist = (product: IProduct) => {
        // No functionality implemented
    };

    return (
        <section>
            <h2>Product list</h2>
            {isProductsFound ? (
                <ProductListComponent
                    products={filteredProducts}
                    cardType={cardType || ICardType.NormalCard} // Used as a fallback if no CardType was chosen
                    addToCart={handleAddToCart}
                    addToWishlist={handleAddToWishlist}
                />
            ) : (
                <p>No products with that category were found.</p>
            )}
        </section>
    );
};

export default ProductListSection;
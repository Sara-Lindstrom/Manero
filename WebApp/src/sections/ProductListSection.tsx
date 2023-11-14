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
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [wishlist, setWishlist] = useState<IProduct[]>([]);

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

    const addToCart = (productId: number, quantity: number) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                updatedCart[productId]++;
            } else {
                updatedCart[productId] = 1;
            }
            return updatedCart;
        });
    };

    const addToWishlist = (product: IProduct) => {
        if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <section>
            {isProductsFound ? (
                <ProductListComponent
                    products={filteredProducts}
                    cardType={cardType || ICardType.NormalCard} // Used as a fallback if no CardType was chosen
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                />
            ) : (
                <p>No products with that category were found.</p>
            )}
        </section>
    );
};

export default ProductListSection;
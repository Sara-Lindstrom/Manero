import { useState } from 'react';
import { IProduct, CardType as ICardType } from '../Interfaces/IProduct';
import ProductCardComponent from '../components/ProductCardComponent';

// A product list that renders out a product card, can be reused in different views. For specifics, see the ProductCardComponent
interface ProductListSectionProps {
    products: IProduct[];
    cardType?: ICardType;
    flexed?: boolean;
    addToCart?: (product: IProduct) => void;
    addToWishlist?: (product: IProduct) => void;
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ products, addToCart, addToWishlist, cardType, flexed = true }) => {
    const [wishlist, setWishlist] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    return (
        <section className={flexed ? "product-display-grid" : ""}>
            {products ? (
                products.map((product) => (
                    <ProductCardComponent
                        key={product.id}
                        product={product}
                        cardType={cardType}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist}
                        showQuantityAdjustment={false}
                    />
                ))) : (
                <span className="noReviews">No products were found.</span>
            )}
        </section>
    );
};

export default ProductListSection;
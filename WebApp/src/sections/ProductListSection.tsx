import { useState } from 'react';
import { IProduct, CardType as ICardType } from '../Interfaces/IProduct';
import ProductCardComponent from '../components/ProductCardComponent';

// A section that renders out product cards, can be reused in different views
interface ProductListSectionProps {
    products: IProduct[];
    cardType?: ICardType; 
    flexed?: boolean;
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ products, cardType, flexed = true }) => {
    return (
        <section className={flexed ? "product-display-grid" : ""}>
            {products ? (
                products.map((product) => (
                    <ProductCardComponent
                        key={product.id}
                        product={product}
                        cardType={cardType}
                        showQuantityAdjustment={false}
                    />
                ))
            ) : (
                <p>No products were found.</p>
            )}
        </section>
    );
};

export default ProductListSection;
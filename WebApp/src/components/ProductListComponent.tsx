import React from 'react';
import ProductCardComponent from './ProductCardComponent';
import { IProduct, CardType } from '../Interfaces/IProduct';

// Single product card
interface ProductListComponentProps {
    products: IProduct[];
    cardType: CardType;
    addToWishlist: (product: IProduct) => void;
    addToCart: (product: IProduct) => void;
}

const ProductListComponent: React.FC<ProductListComponentProps> = ({ products, cardType, addToCart, addToWishlist }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCardComponent
                    key={product.id}
                    product={product}
                    cardType={cardType}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                />
            ))}
        </div>
    );
};

export default ProductListComponent;
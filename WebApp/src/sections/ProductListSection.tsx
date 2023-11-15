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
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [wishlist, setWishlist] = useState<IProduct[]>([]);

    //const addToCart = (product: IProduct) => {
    //    setCart((prevCart) => {
    //        const updatedCart = { ...prevCart };
    //        if (updatedCart[productId]) {
    //            updatedCart[productId]++;
    //        } else {
    //            updatedCart[productId] = 1;
    //        }
    //        return updatedCart;
    //    });
    //};

    const addToWishlist = (product: IProduct) => {
        if (!wishlist.find((item) => item.name === product.name && item.size === product.size && item.color === product.color)) {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <section className={flexed ? "product-display-grid" : ""}>
            {/*{products ? (*/}
            {/*    products.map((product) => (*/}
            {/*        <ProductCardComponent*/}
            {/*        key={product.id}*/}
            {/*        product={product}*/}
            {/*        cardType={cardType}*/}
            {/*        addToCart={addToCart}*/}
            {/*        addToWishlist={addToWishlist}*/}
            {/*    />*/}
            {/*))) : (*/}
            {/*    <p>No products were found.</p>*/}
            {/*)}*/}
        </section>
    );
};

export default ProductListSection;
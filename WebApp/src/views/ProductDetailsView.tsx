import React, { useEffect, useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductsDetailsSection from '../sections/ProductsDetailsSection'
import { useParams } from 'react-router-dom';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById, getCartItemCount } from '../helpers/ProductHandler';
import ReviewListComponent from '../components/ReviewListComponent';

const ProductDetailsView = () => {
    const { productId } = useParams<{ productId?: string }>();
    const [product, setProduct] = useState<IProduct>();

    const getProduct = async () => {
        if (productId) {
            const dbResult = await fetchProductById(productId);
            setProduct(dbResult);
        }
    };

    useEffect(() => {
        getProduct()
    }, [productId]);

    const handleNavigateBack = () => {
        window.history.back();
    };


    return (
        <>
            <BreadcrumbSection currentPage='Product Details' showCurrentPage={false} showHamburgerButton={false} showBackButton={true} onNavigateBack={handleNavigateBack} showCartItem={true} cartItemCount={getCartItemCount()} />
            {product && (
                <>
                    <ProductsDetailsSection product={product} />
                    {productId && <ReviewListComponent productId={productId} />}
                </>
            )}
        </>
    );
}

export default ProductDetailsView
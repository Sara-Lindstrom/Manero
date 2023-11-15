import React, { useEffect, useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductsDetailsSection from '../sections/ProductsDetailsSection'
import { useParams } from 'react-router-dom';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById } from '../helpers/ProductHandler';
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

    //const getProduct = async () => {
    //if(productId !== undefined){
    //    const dbResult = await fetchProductById(productId);
    //    setProduct(dbResult);
    //}
    //}

    useEffect(() => {
    getProduct()
    }, [productId]);

    return (
        <>
            <BreadcrumbSection currentPage='Product Details' showCurrentPage={false} showHamburgerButton={true} showCartItem={true} />
            {product && (
                <>
                    <ProductsDetailsSection product={product} />
                    {/* Check if productId is not undefined before rendering ReviewListComponent */}
                    {productId && <ReviewListComponent productId={productId} />}
                </>
            )}
        </>
    );
}

export default ProductDetailsView
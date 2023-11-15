import React, { useEffect, useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductsDetailsSection from '../sections/ProductsDetailsSection'
import { useParams } from 'react-router-dom';
import { IProduct } from '../Interfaces/IProduct';
import { fetchProductById } from '../helpers/ProductHandler';

const ProductDetailsView = () => {  
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<IProduct>();


    const getProduct = async () => {
    if(productId !== undefined){
        const dbResult = await fetchProductById(productId);
        setProduct(dbResult);
    }
    }

    useEffect(() => {
    getProduct()
    }, [productId]);

    return (
        <>
            <BreadcrumbSection currentPage='Product Details' showHamburgerButton={true} showCartItem={true} />
            {product !== undefined && (
                <ProductsDetailsSection product={product}/>
            )}
        </>
    )
}

export default ProductDetailsView
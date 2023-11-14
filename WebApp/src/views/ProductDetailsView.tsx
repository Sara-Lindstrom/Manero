import React, { useState, useEffect } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductsDetailsSection from '../sections/ProductsDetailsSection'
import { fetchProductById } from '../helpers/ProductHandler';
import { IProduct } from '../Interfaces/IProduct';

const ProductDetailsView = () => {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (selectedProductId) {
                const productDetails = await fetchProductById(selectedProductId);
                if (productDetails) {
                    setSelectedProduct(productDetails);
                } else {
                    console.error('Error fetching product details.');
                }
            }
        };

        fetchProductDetails();
    }, [selectedProductId]);

    return (
        <>
            <BreadcrumbSection currentPage='Product Details' showBackButton={true} showCartItem={true} />
            {selectedProductId && <ProductsDetailsSection productId={selectedProductId} />}
        </>
    )
}

export default ProductDetailsView
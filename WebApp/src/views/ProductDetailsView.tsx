import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductsDetailsSection from '../sections/ProductsDetailsSection'

const ProductDetailsView = () => {
  return (
    <>
    <BreadcrumbSection currentPage='Product Details' showBackButton={true} showCartItem={true} />
    <ProductsDetailsSection />
    </>
  )
}

export default ProductDetailsView
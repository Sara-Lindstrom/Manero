import React from 'react';
import ProductListSection from '../sections/ProductListSection';
import { CardType } from '../Interfaces/IProduct';

// Testview to demonstrate how and when to use cardType as reusable. In this case also sorted by category for the product
const TestView = () => {
    return (
        <div>
            <h1>Welcome to this test page</h1>
            <ProductListSection category='BestSeller' cardType={CardType.NormalCard} />
            <ProductListSection category='Featured' cardType={CardType.SmallCard} />
        </div>
    );
};

export default TestView;
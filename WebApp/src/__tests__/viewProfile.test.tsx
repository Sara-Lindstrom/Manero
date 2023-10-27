import React, { HtmlHTMLAttributes } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewProfileSection from '../sections/ViewProfileSection';

describe('ViewProfileSection', () => {
    test('Find the links and simulate a click', () => {
        render(<BrowserRouter><ViewProfileSection /></BrowserRouter>);

        const orderHistoryLink = document.getElementById('order-history') as HTMLElement;
        fireEvent.click(orderHistoryLink);
        const paymentMethodLink = document.getElementById('payment-method') as HTMLElement;
        fireEvent.click(paymentMethodLink);
        const myAddressLink = document.getElementById('my-address') as HTMLElement;
        fireEvent.click(myAddressLink);
        const myPromocodeLink = document.getElementById('my-promocode') as HTMLElement;
        fireEvent.click(myPromocodeLink);
        const SignOutLink = document.getElementById('signout') as HTMLElement;
        fireEvent.click(SignOutLink);
    })
})
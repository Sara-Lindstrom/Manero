import React, { HtmlHTMLAttributes } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewProfileSection from '../sections/ViewProfileSection';


jest.mock('../helpers/FormHandlers', () => ({
    handleSignOut: jest.fn(),
}));
  
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('Find the links and simulate a click', () => {
    render(<BrowserRouter><ViewProfileSection /></BrowserRouter>);

    const orderHistoryLink = screen.getByTestId('order-history') as HTMLElement;
    fireEvent.click(orderHistoryLink);
    const paymentMethodLink = screen.getByTestId('payment-method') as HTMLElement;
    fireEvent.click(paymentMethodLink);
    const myAddressLink = screen.getByTestId('my-address') as HTMLElement;
    fireEvent.click(myAddressLink);
    const myPromocodeLink = screen.getByTestId('my-promocode') as HTMLElement;
    fireEvent.click(myPromocodeLink);
    const SignOutLink = screen.getByTestId('signout') as HTMLElement;
    fireEvent.click(SignOutLink);        
})
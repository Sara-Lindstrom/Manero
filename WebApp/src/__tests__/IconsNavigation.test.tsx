import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IconsNavigationSection from '../sections/IconsNavigationSection';

test('Should navigate to home', async () => {
    // Render the IconsNavigation component wrapped in a BrowserRouter.
    render(
    <BrowserRouter>
        <IconsNavigationSection isAuthenticated={false} />
    </BrowserRouter>
);

    // Find the "homeLink" element using the test ID.
    const homeNavLink = screen.getByTestId('homeLink');

    // Ensure that the "href" attribute of the link is '/'.
    expect(homeNavLink.getAttribute('href')).toBe('/home');

    // Simulate a click event on the link.
    fireEvent.click(homeNavLink);

    // Wait for navigation to occur, then check if the URL matches '/home'.
    await waitFor(() => {
    // Compare with window.location.pathname
    expect(window.location.pathname).toBe('/home');
    });
})

test('Should navigate to search', async () => {
    // Render the IconsNavigation component wrapped in a BrowserRouter.
    render(
    <BrowserRouter>
        <IconsNavigationSection isAuthenticated={false} />
    </BrowserRouter>
);

    // Find the "searchLink" element using the test ID.
    const searchNavLink = screen.getByTestId('searchLink');

    // Ensure that the "href" attribute of the link is '/search'.
    expect(searchNavLink.getAttribute('href')).toBe('/pageNotFound');

    // Simulate a click event on the link.
    fireEvent.click(searchNavLink);

    // Wait for navigation to occur, then check if the URL matches '/search'.
    await waitFor(() => {
    // Compare with window.location.pathname
        expect(window.location.pathname).toBe('/pageNotFound');
    });
})



test('Should navigate to cart', async () => {
    // Render the IconsNavigation component wrapped in a BrowserRouter.
    render(
    <BrowserRouter>
        <IconsNavigationSection isAuthenticated={false} />
    </BrowserRouter>
);

    // Find the "searchLink" element using the test ID.
    const cartNavLink = screen.getByTestId('cartLink');

    // Ensure that the "href" attribute of the link is '/cart'.
    expect(cartNavLink.getAttribute('href')).toBe('/cart');

    // Simulate a click event on the link.
    fireEvent.click(cartNavLink);

    // Wait for navigation to occur, then check if the URL matches '/cart'.
    await waitFor(() => {
    // Compare with window.location.pathname
    expect(window.location.pathname).toBe('/cart');
    });
})


test('Should navigate to wishlist', async () => {
    // Render the IconsNavigation component wrapped in a BrowserRouter.
    render(
    <BrowserRouter>
        <IconsNavigationSection isAuthenticated={false} />
    </BrowserRouter>
);

    // Find the "searchLink" element using the test ID.
    const wishlistNavLink = screen.getByTestId('wishlistLink');

    // Ensure that the "href" attribute of the link is '/wishlist'.
    expect(wishlistNavLink.getAttribute('href')).toBe('/pageNotFound');

    // Simulate a click event on the link.
    fireEvent.click(wishlistNavLink);

    // Wait for navigation to occur, then check if the URL matches '/wishlist'.
    await waitFor(() => {
    // Compare with window.location.pathname
        expect(window.location.pathname).toBe('/pageNotFound');
    });
})

//test('Should navigate to profile', async () => {
//    // Render the IconsNavigation component wrapped in a BrowserRouter.
//    render(
//    <BrowserRouter>
//        <IconsNavigationSection isAuthenticated={false} />
//    </BrowserRouter>
//);
//    // Find the "searchLink" element using the test ID.
//    const profileNavLink = screen.getByTestId('viewProfileLink');

//    // Ensure that the "href" attribute of the link is '/viewProfile'.
//    expect(profileNavLink.getAttribute('href')).toBe('/viewProfile');

//    // Simulate a click event on the link.
//    fireEvent.click(profileNavLink);
//    // Wait for navigation to occur, then check if the URL matches '/viewProfile'.
//    await waitFor(() => {
//    // Compare with window.location.pathname
//        expect(window.location.pathname).toBe('/viewProfile');
//    });
/*})*/
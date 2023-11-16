import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView';

jest.mock('../helpers/ProductHandler', () => ({
    fetchBestSellingProducts: jest.fn().mockResolvedValue([
        // Add mock data for bestseller products
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
        { id: '3', name: 'Product 3' },
    ]),
    fetchNewestProducts: jest.fn(),
    getCartItemCount: jest.fn()
}));

test('Basic Test', async () => {
    render(
        <MemoryRouter initialEntries={['/home']}>
            <Routes>
                <Route path="/home" element={<HomeView />} />
            </Routes>
        </MemoryRouter>
    );


    // Initially, the bestseller products section should be visible
    const bestSellerSection = screen.getByText(/Best Seller/i);
    expect(bestSellerSection).toBeTruthy();

    // Click on "view all" to navigate to the bestseller products page
    fireEvent.click(screen.getByText(/view all/i));

    // Wait for the bestseller products to be loaded
    await screen.findByText(/Product 1/i);
    await screen.findByText(/Product 2/i);
    await screen.findByText(/Product 3/i);

    // Check if the bestseller products are displayed
    expect(screen.getByText(/Product 1/i)).toBeTruthy();
    expect(screen.getByText(/Product 2/i)).toBeTruthy();
    expect(screen.getByText(/Product 3/i)).toBeTruthy();
});
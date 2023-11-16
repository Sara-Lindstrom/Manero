import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductsView from '../views/ProductsView';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('../helpers/ProductSorting', () => ({
    SortByBestSeller: jest.fn(),
    SortByNewest: jest.fn(),
    SortBySale: jest.fn()
}));

jest.mock('../helpers/ProductHandler', () => ({
    fetchAllCategories: jest.fn(),
    fetchBestSellingProducts: jest.fn(),
    fetchByCategoryTag: jest.fn(),
    fetchNewestProducts: jest.fn(),
    getCartItemCount: jest.fn()
}));

const mockedUseParams = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => mockedUseParams(), // Provide a mock implementation for useParams
}));

test('Dropdown is initially not visible and becomes visible after clicking "Sorting By"', () => {
    mockedUseParams.mockReturnValue({ sorting: 'newest' });

    render(
        <MemoryRouter initialEntries={['/products/newest']}>
            <Routes>
                <Route path="/products/:sorting" element={<ProductsView />} />
            </Routes>
        </MemoryRouter>
    );

    // Initially, the dropdown is not visible
    const sortingByElement = screen.getByText(/Sorting By/i);
    const dropdown = screen.queryByText(/Newest/i);

    expect(sortingByElement).toBeTruthy();
    expect(dropdown).toBeNull(); // Dropdown should not be visible initially

    // Click on "Sorting By" to toggle the dropdown
    fireEvent.click(sortingByElement);

    // After clicking, the dropdown should be visible
    const visibleDropdown = screen.getByText(/Newest/i); // Adjust the text based on your dropdown content
    expect(visibleDropdown).toBeTruthy();
});
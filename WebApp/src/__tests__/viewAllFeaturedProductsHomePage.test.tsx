import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomeView from '../views/HomeView';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/ProductHandler', () => ({
    fetchBestSellingProducts: jest.fn(),
    fetchNewestProducts: jest.fn(),
    getCartItemCount: jest.fn()
}));

test('HomeView snapshot', () => {
    const { asFragment } = render(<HomeView />);
    expect(asFragment()).toMatchSnapshot();
});

test('HomeView renders key elements', () => {
    render(
        <MemoryRouter>
            <HomeView />
        </MemoryRouter>
    );

    // Check if a specific element is present
    expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();
});
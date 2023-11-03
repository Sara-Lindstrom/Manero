import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeView from '../views/HomeView';

test('Basic Test', () => {
    expect(true).toBe(true);

    render(
        <MemoryRouter>
            <HomeView />
        </MemoryRouter>
    );

    const links = screen.getAllByRole('link', { name: 'view all' });

    // Check if at least one of the links has the expected href
    const hasExpectedHref = links.some(link => link.getAttribute('href') === '/bestSellersView');
    expect(hasExpectedHref).toBe(true);
});
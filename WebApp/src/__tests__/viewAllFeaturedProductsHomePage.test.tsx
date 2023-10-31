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

  const link = screen.getByText('view all');
  expect(link).toBeDefined();
  expect(link.getAttribute('href')).toBe('/bestSellersView');
});
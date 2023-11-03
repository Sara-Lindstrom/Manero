import React from 'react';
import { render, screen } from '@testing-library/react';
import CategorySection from '../sections/CategorySection';


test('CategorySection renders with correct categories', () => {
  render(<CategorySection />);

  // Check if all category titles are rendered
  const dressesElement = screen.getByText('Dresses');
  const pantsElement = screen.getByText('Pants');
  const accessoriesElement = screen.getByText('Accessories');
  const shoesElement = screen.getByText('Shoes');
  const tShirtsElement = screen.getByText('T-shirts');

  expect(dressesElement).toBeTruthy();
  expect(pantsElement).toBeTruthy();
  expect(accessoriesElement).toBeTruthy();
  expect(shoesElement).toBeTruthy();
  expect(tShirtsElement).toBeTruthy();
});
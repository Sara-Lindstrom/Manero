import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the matcher

// Import your React component
import CategoryNav from '../sections/HomePageCategoryNav';
import HomePageCategoryNav from '../sections/HomePageCategoryNav';

test('MEN link works', () => {
  render(<HomePageCategoryNav />);
  const menLink = screen.getByText('MEN');
  expect(menLink).toHaveAttribute('href', '/category#men');
});

test('WOMEN link works', () => {
  render(<HomePageCategoryNav />);
  const womenLink = screen.getByText('WOMEN');
  expect(womenLink).toHaveAttribute('href', '/category#women');
});

test('KIDS link works', () => {
  render(<HomePageCategoryNav />);
  const kidsLink = screen.getByText('KIDS');
  expect(kidsLink).toHaveAttribute('href', '/category#kids');
});

test('ACCESSORIES link works', () => {
  render(<HomePageCategoryNav />);
  const accessoriesLink = screen.getByText('ACCESSORIES');
  expect(accessoriesLink).toHaveAttribute('href', '/category#accessories');
});
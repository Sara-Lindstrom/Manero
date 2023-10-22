import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadcrumbSection from '../sections/BreadcrumbSection';

test('Show specific page in breadcrumb', () => {
  const currentPage = 'Payment Method'; // Specify the page

  // Render the page in breadcrumb section
  render(<BreadcrumbSection currentPage={currentPage} />);

  // Find the specific page by text
  const breadcrumbText = screen.getByText(currentPage);

  // Verify that the specific page is showing 
  expect(breadcrumbText).toBeTruthy();
});
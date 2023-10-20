import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadcrumbSection from '../sections/BreadcrumbSection';

test('Visa aktuell sida i breadcrumb', () => {
  const currentPage = 'Payment Method'; // Ange den aktuella sidan

  render(<BreadcrumbSection currentPage={currentPage} />);

  // Hitta texten för den aktuella sidan i breadcrumb
  const breadcrumbText = screen.getByText(currentPage);

  // Verifiera att breadcrumb visar den aktuella sidan korrekt
  expect(breadcrumbText).toBeTruthy();
});
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BestSellersView from '../views/BestSellersView';

test('it should handle sorting dropdown click events', async () => {
  render(<BestSellersView />);

  // Use waitFor to wait for the element to appear
  await waitFor(() => {
    screen.getByText('Sorting By');
  });

  // Find the sorting element
  const sortingBy = screen.getByText('Sorting By');

  // Check if the sorting dropdown is initially hidden
  expect(screen.queryByText('Category 1')).toBeNull();

  // Simulate a click on the sorting dropdown to show the dropdown
  fireEvent.click(sortingBy);

  // Check if the sorting dropdown is visible
  expect(screen.getByText('Category 1')).toBeTruthy();
});
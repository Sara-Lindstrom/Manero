import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BestSellersView from '../views/BestSellersView'; // Import your component

test('toggleDropdown function is called when "Sorting By" is clicked', () => {
  const { getByText, queryByText } = render(<BestSellersView />);

  // Initially, the dropdown is not visible
  const sortingByElement = getByText('Sorting By');
  expect(sortingByElement).toBeTruthy();

  // Click on "Sorting By" to toggle the dropdown
  fireEvent.click(sortingByElement);

  // After clicking, the dropdown should be visible
  const categoryDropdown = queryByText('All');
  expect(categoryDropdown).toBeTruthy();

  // Click again to hide the dropdown
  fireEvent.click(sortingByElement);

  // After the second click, the dropdown should be hidden
  const categoryDropdownHidden = queryByText('All');
  expect(categoryDropdownHidden).toBeNull();
});
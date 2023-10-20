import React from 'react';
import { render, screen } from '@testing-library/react';
import PayoneersSection from '../sections/PayoneerSection';

test('Have all the Payoneers in the menu', () => {
    // Render the PayoneersSection componentt
    render(<PayoneersSection />);
  
    // Define a list of Payoneer options you expect to find in the menu
    const payoneers = ["Apple Pay", "Pay Pal", "Swish", "Klarna"];
  
    // Loop through each Payoneer option in the list
    payoneers.forEach((payoneer) => {
      // Try to find the specific Payoneer option in the DOM
      const payoneerOption = screen.queryByText(payoneer);
  
      // Verify that the element is truthy, indicating it exists in the DOM
      expect(payoneerOption).toBeTruthy();
    });
  });
  
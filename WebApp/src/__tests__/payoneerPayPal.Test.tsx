import React from 'react';
import { render, screen } from '@testing-library/react';
import PayoneersSection from '../sections/PayoneerSection';


test('Can add Pay Pal from the menu to the list', () => {
    render(<PayoneersSection />);
    const payoneerToAdd = 'Pay Pal';
  
    // Find all elements that contain the text "Pay Pal"
    const allPayPalElements = screen.getAllByText(payoneerToAdd);
  
    // Select the specific element from the list
    const addedPayoneer = allPayPalElements.find((element) => element.textContent === payoneerToAdd);
  
    // Verify that Payoneer has been added to the list
    expect(addedPayoneer).toBeTruthy();
  });
  
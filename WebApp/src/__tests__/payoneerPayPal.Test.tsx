import React from 'react';
import { render, screen } from '@testing-library/react';
import PayoneersSection from '../sections/PayoneerSection';


test('Can add Pay Pal from the menu to the list', () => {
    render(<PayoneersSection />);
    const payoneerToAdd = 'Pay Pal';
  
    // Hitta alla element som innehåller texten "Pay Pal"
    const allPayPalElements = screen.getAllByText(payoneerToAdd);
  
    // Välj det specifika elementet från listan
    const addedPayoneer = allPayPalElements.find((element) => element.textContent === payoneerToAdd);
  
    // Verifiera att Payoneer har lagts till i listan
    expect(addedPayoneer).toBeTruthy();
  });
  
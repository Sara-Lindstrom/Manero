import React, { HtmlHTMLAttributes } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BurgerMenu from "../sections/BurgerMenuSection";


describe('BurgerMenu', () => {
    test('renders Contact Us component', () => {
      render(<BrowserRouter><BurgerMenu /></BrowserRouter>);

      // Kontrollera att contact information visas
      const adress = screen.getByTestId('adress');
      const postCode = screen.getByTestId('post-code'); 
      const email1 = screen.getByTestId('email1');
      const email2 = screen.getByTestId('email2');     
      const phonNumber1 = screen.getByTestId('phone1');
      const phonNumber2 = screen.getByTestId('phone2');

      expect(adress).toBeTruthy();
      expect(postCode).toBeTruthy();
      expect(email1).toBeTruthy();
      expect(email2).toBeTruthy();
      expect(phonNumber1).toBeTruthy();
      expect(phonNumber2).toBeTruthy();
      
    });

    test('Button functionality navigates to tracking page', () => {
        render(<BrowserRouter><BurgerMenu /></BrowserRouter>);
        
        // Hitta "Track"-knappen och simulera ett klick
        const trackButton = screen.getByTestId('track-button');
        fireEvent.click(trackButton);

         // Simulate user entering a valid order number
         const orderNumberInput = screen.getByLabelText('order-number');
         fireEvent.change(orderNumberInput, { target: { value: '12345' } });

         // Expectation: The user should be redirected to the tracking page
            waitFor(() => {
            expect(window.location.pathname).toBe('/trackorder');
            });
    
    });


});
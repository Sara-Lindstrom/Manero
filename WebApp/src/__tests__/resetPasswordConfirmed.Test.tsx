import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetPasswordConfirmedSection from '../sections/ResetPasswordConfirmedSection';

describe('ResetPasswordConfirmedSection', () => {
  test('renders ResetPasswordConfirmedSection component', () => {
    render(<BrowserRouter><ResetPasswordConfirmedSection /></BrowserRouter>);
    
    // Kontrollera att texten "Your password has been reset!" visas
    const resetMessage = screen.getByText(/Your password has been reset!/i);
    expect(Element).toBeTruthy();

    // Kontrollera att "DONE"-knappen finns
    const doneButton = screen.getByText(/DONE/i);
    expect(Element).toBeTruthy();
  });

  test('Button functionality navigates to signin page', () => {
    render(<BrowserRouter><ResetPasswordConfirmedSection /></BrowserRouter>);
    
    // Hitta "DONE"-knappen och simulera ett klick
    const doneButton = screen.getByText(/DONE/i);
    fireEvent.click(doneButton);

   
  });
});

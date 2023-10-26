import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ForgotPasswordSection from '../sections/ForgotPasswordSection';

describe('ForgotPasswordSection', () => {
  test('renders ForgotPasswordSection component', () => {
    render(<BrowserRouter><ForgotPasswordSection /></BrowserRouter>);
    const element = screen.getByText(/Please enter your email address\./i);
    expect(element).toBeTruthy();
  });

  test('Button functionality with valid email', () => {
    render(<BrowserRouter><ForgotPasswordSection /></BrowserRouter>);

    // Simulate user entering a valid email
    const emailInput = screen.getByLabelText('EMAIL');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Find the button and simulate a click
    const sendButton = screen.getByText('SEND');
    fireEvent.click(sendButton);

    // Expectation: The user should be redirected to the changePassword page
    expect(window.location.pathname).toBe('/changePassword');
  });
});

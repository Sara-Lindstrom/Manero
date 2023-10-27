import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChangePasswordSection from '../sections/ChangePasswordSection';

describe('ChangePasswordSection', () => {
    test('renders ChangePasswordSection component', () => {
        render(<BrowserRouter><ChangePasswordSection /></BrowserRouter>);
        const element = screen.getByText(/Enter new password and confirm./i);
        expect(element).toBeTruthy();
      });

  test('Button functionality with valid new password', () => {
    render(<BrowserRouter><ChangePasswordSection /></BrowserRouter>);
    
    // Simulate user entering a valid new password
    const newPasswordInput = screen.getByLabelText('NEW PASSWORD');
    fireEvent.change(newPasswordInput, { target: { value: 'ValidPassword123' } });

    // Find the button and simulate a click
    const button = screen.getByText(/CHANGE PASSWORD/i);
    fireEvent.click(button);

    // You can add more assertions here based on the expected behavior after clicking the button.
    // For example, if you expect to navigate to another page, you can check for the presence of some text or element from that page.
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(() => '/resetPasswordConfirmed'),
      }));
  });
});

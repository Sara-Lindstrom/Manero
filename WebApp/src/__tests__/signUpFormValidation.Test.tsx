import SignUpFormSection from '../sections/SignUpFormSection';
import { render, fireEvent, screen } from '@testing-library/react';

describe('SignUpFormSection', () => {
  it('renders the form and prevents submission on validation errors', () => {
    render(<SignUpFormSection />);
    const button = screen.getByTestId('submitButton');
  
    // initialise an event, and assign your own preventDefault
    const clickEvent = new MouseEvent('click');
    Object.assign(clickEvent, {preventDefault: jest.fn()});
  
    fireEvent(button, clickEvent);
  
    expect(clickEvent.preventDefault).not.toHaveBeenCalledTimes(1);
  });
});
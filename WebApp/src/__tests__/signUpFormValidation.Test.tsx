import SignUpFormSection from '../sections/SignUpFormSection';
import { render, fireEvent, screen } from '@testing-library/react';

jest.mock('../helpers/FormHandlers', () => ({
  handleSignupSubmit: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

test('renders the form and prevents submission on validation errors', () => {
  render(<SignUpFormSection navigate={mockedUsedNavigate}/>);
  const submitButton = screen.getByTestId('submitButton');

    // initialise an event, and assign your own preventDefault
    const clickEvent = new MouseEvent('click');
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');

    fireEvent(submitButton, clickEvent);

  // Assert that handleSignupSubmit was not called
  expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
});

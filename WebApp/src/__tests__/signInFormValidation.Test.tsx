import { render, fireEvent, screen } from '@testing-library/react';
import SignInView from '../views/SignInView';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/FormHandlers', () => ({
  handleSignInSubmit: jest.fn(),
}));

test('renders the form and prevents submission on validation errors', () => {
  render(
    <MemoryRouter>
    <SignInView />
    </MemoryRouter>);
  const submitButton = screen.getByTestId('submitButton');

  // initialise an event, and assign your own preventDefault
  const clickEvent = new MouseEvent('click');
  const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');

  fireEvent(submitButton, clickEvent);

  // Assert that handleSignInSubmit was not called
  expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
});

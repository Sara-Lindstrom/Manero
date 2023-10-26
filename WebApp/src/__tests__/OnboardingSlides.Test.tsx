import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import YourComponent from '../views/OnboardingView';

test('Push the buttons in carousel-indicators to change slide', () => {
  render(<YourComponent />); // Ersätt med din faktiska komponent

  // Här skulle du kunna använda "screen.getByText" eller "screen.getByLabelText" för att hitta knapparna.
  const slide1Button = screen.getByLabelText('Slide 1');
  const slide2Button = screen.getByLabelText('Slide 2');
  const slide3Button = screen.getByLabelText('Slide 3');

  // Kontrollera att slide 1 är synlig som standard
  expect(screen.getByText('Welcome To Manero!')).toBeInTheDocument();

  // Simulera klick på knapp för slide 2w
  fireEvent.click(slide2Button);

  // Kontrollera att slide 2 är synlig efter klick
  expect(screen.getByText('Easy Track Order!')).toBeInTheDocument();

  // Simulera klick på knapp för slide 3
  fireEvent.click(slide3Button);

  // Kontrollera att slide 3 är synlig efter klick
  expect(screen.getByText('ADoor To Door Delivery!')).toBeInTheDocument();
});
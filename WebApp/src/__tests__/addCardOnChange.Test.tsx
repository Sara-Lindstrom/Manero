import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCardSection from '../sections/AddCardSection';

test('input field onChange works', () => {
  render(<AddCardSection />);

  // Find the input field by its label
  const cardHolderInput = screen.getByLabelText('NAME');

  // Simulate an input change
  fireEvent.change(cardHolderInput, { target: { value: 'John Doe' } });

  // Check if the input value has changed
  expect(cardHolderInput).toHaveValue('John Doe');
});
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PaymentCardsSection from '../sections/PaymentCardsSection';

test('Should navigate to /addANewCard when the link is clicked', async () => {
  // Render the PaymentCardsSection component wrapped in a BrowserRouter.
  const { getByTestId } = render(
    <BrowserRouter>
        <PaymentCardsSection />
    </BrowserRouter>
  );

   // Find the "addNewCardLink" element using the test ID.
  const addCardNavLink = getByTestId('addNewCardLink');

   // Ensure that the "href" attribute of the link is '/addANewCard'.
  expect(addCardNavLink.getAttribute('href')).toBe('/addANewCard');

   // Simulate a click event on the link.
  fireEvent.click(addCardNavLink);

  // Wait for navigation to occur, then check if the URL matches '/addANewCard'.
  await waitFor(() => {
    // Compare with window.location.pathname
    expect(window.location.pathname).toBe('/addANewCard');
  });
});


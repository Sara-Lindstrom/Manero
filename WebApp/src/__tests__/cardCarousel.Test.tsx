import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import PaymentCardsSection from '../sections/PaymentCardsSection';

test('nextCard function updates currentCard correctly', () => {
  const { container } = render(
    <MemoryRouter>
      < PaymentCardsSection/>
    </MemoryRouter>
  );
    // Find the element that is active before nextCard-klick
    const activeCard = container.querySelector('.card.active');
  
    // Find the next-button 
    const nextButton = container.querySelector('.fa-arrow-right');
  
    //  Check if the elements are available before interaction
    if (activeCard && nextButton) {
      // Simulate click on the next button
      fireEvent.click(nextButton);
  
      //  Find the element that is active after nextCard click
      const updatedActiveCard = container.querySelector('.card.active');
  
      //  Verify that the active card has been changed
      expect(updatedActiveCard).not.toBe(activeCard);
    } else {
      // Add management if elements are not found
      throw new Error('Active card or next button not found');
    }
  });

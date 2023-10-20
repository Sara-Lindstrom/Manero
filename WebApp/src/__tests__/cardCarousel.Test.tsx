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
  
    // Hitta det element som är aktivt innan nextCard-klick
    const activeCard = container.querySelector('.card.active');
  
    // Hitta nästa-knappen
    const nextButton = container.querySelector('.fa-arrow-right');
  
    // Kontrollera om elementen är tillgängliga innan interaktion
    if (activeCard && nextButton) {
      // Simulera klick på nästa-knappen
      fireEvent.click(nextButton);
  
      // Hitta det element som är aktivt efter nextCard-klick
      const updatedActiveCard = container.querySelector('.card.active');
  
      // Verifiera att det aktiva kortet har ändrats
      expect(updatedActiveCard).not.toBe(activeCard);
    } else {
      // Lägg till hantering om elementen inte hittas
      throw new Error('Active card or next button not found');
    }
  });

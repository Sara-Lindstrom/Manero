import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'

const PaymentCardsSection: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const cards = useRef<NodeListOf<HTMLElement> | null>(null);


  // UseEffect runs when the 'currentCard' changes and initializes the 'cards' reference.
  useEffect(() => {
    cards.current = document.querySelectorAll('.card');
    showCard(currentCard);
  }, [currentCard]);

  // Adds the 'active' class to the card at 'cardIndex' and removes it from others.
  function showCard(cardIndex: number): void {
    if (cards.current) {
      cards.current.forEach((card) => card.classList.remove('active'));
      cards.current[cardIndex].classList.add('active');
    }
  }

  // Increments 'currentCard' to show the next card in the list.
  function nextCard(): void {
    setCurrentCard((prevCard) => (prevCard + 1) % (cards.current?.length || 0));
  }
  
  // Decrements 'currentCard' to show the previous card in the list, looping back to the end if at the beginning.
  function prevCard(): void {
    setCurrentCard((prevCard) => (prevCard - 1 + (cards.current?.length || 0)) % (cards.current?.length || 0));
  }
  

  return (
      <section className="paymentMethod">
          <div className="container">
              <div className="cards">
                  <div className="titles">
                      <h1>Cards</h1>
                      <div className="newCard">
                          <h2>Add a new card</h2>
                          <NavLink to="/AddCardView" data-testid="addNewCardLink" ><i className="fa-regular fa-plus"></i></NavLink> 
                      </div>
                  </div>
                  <div className="cards-slider">
                      <div className="card active">
                          <h1 className="bank">VISA</h1>
                          <h2 className="card-number">7741 6588 1232 6655</h2>
                          <p className="card-owner">KRISTIN</p>
                          <p className="card-date">EXP.END</p>
                      </div>
                      <div className="card">
                          <h1 className="bank">MasterCard</h1>
                          <h2 className="card-number">5555 1234 5678 9012</h2>
                          <p className="card-owner">JOHN</p>
                          <p className="card-date">EXP.END</p>
                      </div>
                      <div className="card">
                          <h1 className="bank">American Express</h1>
                          <h2 className="card-number">3782 822463 10005</h2>
                          <p className="card-owner">SARAH</p>
                          <p className="card-date">EXP.END</p>
                      </div>
                  </div>
              </div>
              <div className='buttons'>
                  <button className="card-button" onClick={prevCard}><i className="fa-regular fa-arrow-left"></i></button>
                  <button className="card-button" onClick={nextCard}><i className="fa-regular fa-arrow-right"></i></button>
              </div>             
          </div>
    </section>
  );
};

export default PaymentCardsSection;
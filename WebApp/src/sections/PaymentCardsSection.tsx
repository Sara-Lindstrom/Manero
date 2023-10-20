import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'

const PaymentCardsSection: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const cards = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    cards.current = document.querySelectorAll('.card');
    showCard(currentCard);
  }, [currentCard]);

  function showCard(cardIndex: number): void {
    if (cards.current) {
      cards.current.forEach((card) => card.classList.remove('active'));
      cards.current[cardIndex].classList.add('active');
    }
  }

  function nextCard(): void {
    setCurrentCard((prevCard) => (prevCard + 1) % (cards.current?.length || 0));
  }
  
  function prevCard(): void {
    setCurrentCard((prevCard) => (prevCard - 1 + (cards.current?.length || 0)) % (cards.current?.length || 0));
  }
  

  return (
    <>
        <section className="paymentMethod">
            <div className="container">
                <div className="cards">
                    <div className="titles">
                    <h1>Cards</h1>
                    <div className="newCard">
                        {/* add component navlink */}
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
                <div className='buttons'>
                    <button className="card-button" onClick={prevCard}><i className="fa-regular fa-arrow-left"></i></button>
                    <button className="card-button" onClick={nextCard}><i className="fa-regular fa-arrow-right"></i></button>
                </div>             
            </div>
        </div>
      </section>
    </>
  );
};

export default PaymentCardsSection;
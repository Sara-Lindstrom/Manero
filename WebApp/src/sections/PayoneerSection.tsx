import React, { useState } from 'react';

const PayoneersSection: React.FC = () => {
  const [selectedPayoneers, setSelectedPayoneers] = useState<string[]>([]);
  const payoneers = ["Apple Pay", "Pay Pal", "Swish", "Klarna"];

  const handlePayoneerSelection = (payoneer: string) => {
    if (!selectedPayoneers.includes(payoneer)) {
      setSelectedPayoneers([...selectedPayoneers, payoneer]);
    }
  };



  return (
    <>
      <section className="payoneerSection">
        <div className="container">
          <ul className="drop-down-list">
            {selectedPayoneers.map((selectedPayoneer, index) => (
                <li className="selected-item" key={index}>
                    <div className='payoneer'>
                        {selectedPayoneer}
                        <i className="fa-light fa-check"></i> 
                    </div>
                    <button className="editBtn" >
                        <i className="fa-light fa-pen-line"></i>
                    </button>
                </li>
            ))}
          </ul>
          <div className="dropdown">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Payoneer<i className="fa-regular fa-plus"></i></button>
            <ul className="dropdown-menu">
              {payoneers.map((payoneer, index) => (
                <li key={index}>
                  <p
                    className="dropdown-item"
                    onClick={() => handlePayoneerSelection(payoneer)}
                  >
                    {payoneer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayoneersSection;

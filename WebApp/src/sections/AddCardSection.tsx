import React, { useState } from 'react';

function AddCardSection() {
  const [formData, setFormData] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // handles live input validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name: string, value: string) => {
    // Validation
    let updatedErrors = { ...validationErrors };
    switch (name) {
      case 'cardHolder':
        updatedErrors.cardHolder = value.trim() === '' ? 'Card Holder is required' : '';
        break;
      case 'cardNumber':
        updatedErrors.cardNumber = value.trim() === '' || value.length !== 16
          ? 'Card Number must be 16 digits'
          : '';
        break;
      case 'expiryDate':
        updatedErrors.expiryDate = value.trim() === '' || value.length !== 5
          ? 'Expiry Date must be in MM/YY format'
          : '';
        break;
      case 'cvv':
        updatedErrors.cvv = value.trim() === '' || value.length !== 3
          ? 'CVV must be 3 digits'
          : '';
        break;
      default:
        break;
    }
    setValidationErrors(updatedErrors);
  };

  // handles submit btn
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if there are any validation errors
    for (const error of Object.values(validationErrors)) {
      if (error) {
        alert('Please fix the validation errors before submitting.');
        return;
      }
    }

    // Reset the form
    setFormData({
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <section className='AddCard'>
      <div className='container'>
        <div className='cardbox'>
          <div className="card">
            <h1 className="bank">VISA</h1>
            <h2 className="card-number">7741 6588 1232 6655</h2>
            <div className='cardinfo'>
              <p className="card-owner">KRISTIN</p>
              <p className="card-date">EXP.END</p>
            </div>
          </div>
        </div>

        <form className="cardform" id='cardsubmit' onSubmit={handleSubmit}>
          <div className="error-messages">
            {Object.values(validationErrors).map((error, index) => (
              error && <p key={index}>{error}</p>
            ))}
          </div>

          <label className='infoField' htmlFor="cardHolder">NAME</label>
          <input type="text" id="cardHolder" placeholder="" name="cardHolder" required
            value={formData.cardHolder} onChange={handleChange} />

          <label className='infoField' htmlFor="cardNumber">CARD NUMBER</label>
          <input type="text" id="cardNumber" placeholder="" name="cardNumber" required
            value={formData.cardNumber} onChange={handleChange} />

          <div className='cvvrow'>
            <label className='infoField' htmlFor="expiryDate">MM/YY</label>
            <input type="text" id="expiryDate" placeholder="" name="expiryDate" required
              value={formData.expiryDate} onChange={handleChange} />

            <label className='infoField' htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="" name="cvv" required
              value={formData.cvv} onChange={handleChange} />
            <a className='Camera' target='_blank' rel='noreferrer' href="https://www.matspar.se/produkt/julmust-1-4l-apotekarnas">
              <i className="fa-regular fa-camera"></i>
            </a>
          </div>

          <div className='card-btn'>
            <button className='btn dark-btn form-btn' type="submit">SAVE CARD</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddCardSection
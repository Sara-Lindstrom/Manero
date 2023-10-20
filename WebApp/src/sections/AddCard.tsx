import React from 'react';


const AddCard: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className='AddCard'>
      <div className='container'>
        <div className='headerCard'>
          <a href="#">#</a>
          <h2>Add a New Card</h2>
        </div>
        <div className='cardImg' >
        <img src="" alt="card" />
        </div>

        <form className="cardform" onSubmit={handleSubmit}>

          <label className='infoField' htmlFor="cardHolder">NAME</label>
          <input type="text" id="cardHolder" placeholder="John Doe" required />

          <label className='infoField' htmlFor="cardNumber">CARD NUMBER</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />

          <div className='cvvrow' >
            <label className='infoField' htmlFor="expiryDate">MM/YY</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required />

            <label className='infoField' htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" required  />

            <a className='Camera' href="#"><i className="fa-regular fa-camera"></i></a>
          </div>


          <button className='dark-btn' type="submit">SAVE CARD</button>
        </form>
      </div>
    </div>

  );
};

export default AddCard;
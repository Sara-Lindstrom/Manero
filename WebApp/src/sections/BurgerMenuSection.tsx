import React, { useState } from 'react'
import {ValidateOrederNumber} from '../helpers/GeneralValidation';
import { useNavigate } from 'react-router-dom';


const BurgerMenu = () => {

    const navigate = useNavigate();

    //useStates for setting input values both for validation and populate new User
    const [orderNumber, setOrderNumber] = useState ('');

    //UseStates for error messages in frontend validation
    const [orderNumberError, setOrderNumberError] = useState('');

    //validates field when user clicks track button and sends user to order info
    function ValidateOnClick ()  {
        let validOrderNumber = ValidateOrederNumber(orderNumber).isValid;

        // if everything is valid, go to tracking page
        if(validOrderNumber === true)
        {
            //search for the number in DB

            //redirect to tracking page
            navigate('/trackorder');
        }
        
    }
   

     
  return (


    <>
    <div className='burger-menu-button'>
        <button className="burger-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#burger-menu" aria-controls="burger-menu">
            <i className="fa-regular fa-bars-staggered"></i>
        </button>
    </div>
    
    <div className="burger-menu-screen offcanvas offcanvas-start text-bg-dark" /*tabindex="-1"*/ id="burger-menu" aria-labelledby="burger-menu-label">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="burger-menu-label"></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"  aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <h2>Contact us</h2>
            <div className='contact-info'>
                <div className='contact-field'>
                    <div className='icon'>
                        <i className="fa-regular fa-location-dot"></i>
                    </div>
                    <div className='info'>
                        <p id='p1' data-testid="adress">27 Division St, New York,</p>
                        <p id='p2' data-testid="post-code">NY 10002, USA</p>
                    </div>
                </div>
                <hr />
                <div className='contact-field'>
                    <div className='icon'>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className='info'>
                        <p id='p1' data-testid="email1">manerosale@mail.com</p>
                        <p id='p2' data-testid="email2">manerosupport@mail.com</p>
                    </div>
                </div>
                <hr />
                <div className='contact-field'>
                    <div className='icon'>
                        <i className="fa-regular fa-phone-volume"></i>
                    </div>
                    <div className='info'>
                        <p id='p1' data-testid="phone1">+17  123456789</p>
                        <p id='p2' data-testid="phone2">+17  987654321</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className='track-section'>
                <p>Track your order</p>
                <div className='track-field'>
                    <p className='input-label'>ORDER NUMBER</p>
                    <input type='text' aria-label='order-number' onChange={(event) => {
                    setOrderNumber(event.target.value);
                    const validationResult = ValidateOrederNumber(event.target.value);
                    setOrderNumberError(validationResult.error); 
                    }}/>
                    <a className='arrow' onClick={e => {ValidateOnClick()}} data-testid="track-button">
                        <i className="fa-regular fa-arrow-right"></i>
                    </a>
                </div>
                <p className='input-error'>{orderNumberError}</p>
            </div>
        </div>
    </div>

    </>
   
  )
}

export default BurgerMenu
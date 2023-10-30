import React from 'react'


const BurgerMenu = () => {

     
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
                        <p id='p1'>27 Division St, New York,</p>
                        <p id='p2'>NY 10002, USA</p>
                    </div>
                </div>
                <hr />
                <div className='contact-field'>
                    <div className='icon'>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className='info'>
                        <p id='p1'>manerosale@mail.com</p>
                        <p id='p2'>manerosupport@mail.com</p>
                    </div>
                </div>
                <hr />
                <div className='contact-field'>
                    <div className='icon'>
                        <i className="fa-regular fa-phone-volume"></i>
                    </div>
                    <div className='info'>
                        <p id='p1'>+17  123456789</p>
                        <p id='p2'>+17  987654321</p>
                    </div>
                </div>
                <hr />
            </div>
            <div className='track-section'>
                <p>Track your order</p>
                <div className='track-field'>
                    <label>ORDER NUMBER</label>
                    <input type='text' />
                    <a href='/trackorder' type='submit' className='arrow' >
                        <i className="fa-regular fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    </>
   
  )
}

export default BurgerMenu
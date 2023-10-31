import React from 'react'

const ViewProfileSection = () => {

    function confirmSignOut() {
        const userConfirmed = window.confirm("Are you sure you want to sign out?");

        if (userConfirmed) {
            // Perform sign-out logic here
            console.log("User confirmed sign out.");
        }
        else {
            // Handle the case where the user cancels the sign-out
            console.log("User canceled sign out.");
        }
    }

  return (
    <div className='view-profile'>
      
        <div className="vertical-line"></div>
        <div className='photo-section'>
          <img src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" alt='Adam' />
          <a className='icon' href='/EditProfile'>
            <i className="fa-regular fa-pen-to-square"></i>
          </a>
        </div>
        <div className='user-info'>
          <h2>Adam</h2>
          <h5>adam@domain.com</h5>
        </div>
        <div className='Fields-section'>
            <a className='field' href='#' id='order-history'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-light fa-calendar"></i>
                  <p>Order history</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#' id='payment-method'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className ="fa-light fa-credit-card"></i>
                  <p>Payment method</p>
                </div>  
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#' id='my-address'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-regular fa-location-dot"></i>
                  <p>My address</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#' id='my-promocode'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-regular fa-gift"></i>
                  <p>My promocodes</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#' onClick={confirmSignOut} id='signout'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-regular fa-arrow-right-from-bracket"></i>
                  <p>Sign out</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            
            


        </div>
      

    </div>
  )
}

export default ViewProfileSection
import React from 'react'

const ViewProfileSection = () => {

  

  function signout () {
    //signout function
    const popup = document.getElementById("popup");
    popup?.classList.remove("open-popup");
  }


function showPopup () {
    const popup = document.getElementById("popup");
    const img = document.getElementById("photo-section");
    const field1 = document.getElementById("order-history");
    const field2 = document.getElementById("payment-method");
    const field3 = document.getElementById("my-address");
    const field4 = document.getElementById("my-promocode");
    const field5 = document.getElementById("signout");
    popup?.classList.add("open-popup");
    img?.classList.add("opened-popup");
    field1?.classList.add("opened-popup");
    field2?.classList.add("opened-popup");
    field3?.classList.add("opened-popup");
    field4?.classList.add("opened-popup");
    field5?.classList.add("opened-popup");
}

function closePopup () {
    const popup = document.getElementById("popup");
    const img = document.getElementById("photo-section");
    const field1 = document.getElementById("order-history");
    const field2 = document.getElementById("payment-method");
    const field3 = document.getElementById("my-address");
    const field4 = document.getElementById("my-promocode");
    const field5 = document.getElementById("signout");
    popup?.classList.remove("open-popup");
    img?.classList.remove("opened-popup");
    field1?.classList.remove("opened-popup");
    field2?.classList.remove("opened-popup");
    field3?.classList.remove("opened-popup");
    field4?.classList.remove("opened-popup");
    field5?.classList.remove("opened-popup");
  }

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
    <>
    <div className='view-profile'>     
        <div className="vertical-line"></div>
        <div className='photo-section' id='photo-section'>
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
            <a className='field' href='/orderhistory' id='order-history'>
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
            <a className='field' href='#' /*onClick={confirmSignOut}*/ onClick={e => {showPopup()}} id='signout'>
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

     <div className='modal-section' id='popup'>
            <div className='container'>
                <div className='content'>
                    <div className='verticla-line'>|</div>
                    <div className='message'>
                        <p>
                            Are you sure you want to sign out ?
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='yes-btn' onClick={e => {signout()}}>SURE</button>
                        <button type='button' className='no-btn' onClick={e => {closePopup()}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default ViewProfileSection
import React, { useEffect, useState } from 'react'
import { ProfileData, fetchProfileData, handleSignOut } from '../helpers/FormHandlers';
import { useNavigate } from 'react-router-dom'

const ViewProfileSection = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState<ProfileData>({
        name: '',
        email: '',
        phoneNumber: '', 
        location: 'Ankeborg',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchProfileData(token).then(data => {
                if (data) {
                    setProfile({
                        name: data.name,
                        email: data.email,
                        phoneNumber: data.phoneNumber, // Include phoneNumber
                        location: data.location,       // Include location
                    });
                }
            });
        }
    }, []);

    function signout() {
        handleSignOut(
            (path: string) => navigate(path),
            () => {
                localStorage.removeItem('token');
                navigate('/signin');
            },
            () => {
                console.error('Sign-out failed.');
            }
        );
        closePopup();
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
                  <h2>{profile.name}</h2>
                  <h5>{profile.email}</h5>
                  <h5>{profile.phoneNumber}</h5>
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
            <a className='field' href='/myAddresses' id='my-address'>
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
            <a className='field' href='#' onClick={e => {showPopup()}} id='signout'>
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
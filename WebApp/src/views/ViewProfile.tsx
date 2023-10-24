import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditProfile from './EditProfile'


interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  imgUrl: string;
}

interface ProfileType {
  user: User;
}


const ViewProfile :React.FC<ProfileType> = ({user}) => { 
  

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
    <BreadcrumbSection currentPage='My Profile' />
    <div className='view-profile'>
      
        <div className="vertical-line"></div>
        <div className='photo-section'>
          <img src={user.imgUrl} alt={user.name} />
          <a className='icon' href='/editprofile'>
            <i className="fa-regular fa-pen-to-square"></i>
          </a>
        </div>
        <div className='user-info'>
          <h2>{user.name}</h2>
          <h5>{user.email}</h5>
        </div>
        <div className='Fields-section'>
            <a className='field' href='#'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-light fa-calendar"></i>
                  <p>Order history</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className ="fa-light fa-credit-card"></i>
                  <p>Payment method</p>
                </div>  
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-regular fa-location-dot"></i>
                  <p>My address</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#'>
              <div className='field-details'>
                <div className='icon-name'>
                  <i className="fa-regular fa-gift"></i>
                  <p>My promocodes</p>
                </div>
                <i id='right-arrow' className="fa-solid fa-chevron-right"></i>
              </div>
            </a>
            <a className='field' href='#' onClick={confirmSignOut}>
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
    </>
  )
}

export default ViewProfile
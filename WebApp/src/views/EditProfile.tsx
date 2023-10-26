import React, { useState } from 'react';

import BreadcrumbSection from '../sections/BreadcrumbSection';
import EditProfileSection, { User } from '../sections/EditProfileSection';


interface EditProfileType {
  user: User;
}


const EditProfile: React.FC<EditProfileType> = ({user}) => {

  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };
  

  return (

    <>
    <BreadcrumbSection currentPage='Edit Profile' showBackButton={true} onNavigateBack={handleNavigateBack}/>
    <EditProfileSection user={user} />    
    </>
 
  )
}

export default EditProfile

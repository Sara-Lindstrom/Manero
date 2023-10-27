import React, { useState } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EditProfileSection from '../sections/EditProfileSection';

// This interface does not work properly. It returns an error in App.tsx that user cant be found
//interface EditProfileType {
//  user: User;
//}


const EditProfileView: React.FC = () => {

  const handleNavigateBack = () => {
    window.history.back(); // Använder window.history för att gå tillbaka ett steg
  };


  return (

    <>
          <BreadcrumbSection currentPage='Edit Profile' showBackButton={true} onNavigateBack={handleNavigateBack} />
          <EditProfileSection />
    </>

  )
}

export default EditProfileView
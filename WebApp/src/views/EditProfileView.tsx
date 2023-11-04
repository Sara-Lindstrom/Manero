import React from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EditProfileSection from '../sections/EditProfileSection';
import { useNavigate } from 'react-router-dom'


const EditProfileView: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigateBack = () => {
    window.history.back();
    };


  return (

    <>
          <BreadcrumbSection currentPage='Edit Profile' showBackButton={true} onNavigateBack={handleNavigateBack} />
          <EditProfileSection navigate={ navigate } />
    </>

  )
}

export default EditProfileView
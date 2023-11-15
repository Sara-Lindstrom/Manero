import React, { useState, useEffect } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EditProfileSection from '../sections/EditProfileSection';
import { useNavigate } from 'react-router-dom';

const EditProfileView: React.FC = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // If user is not signed in they will be redirected to login view
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/signin');
        }
    }, [navigate]);

    const handleNavigateBack = () => {
        window.history.back();
    };

    return (

        <>
            <BreadcrumbSection currentPage='Edit Profile' showCurrentPage={true} showBackButton={true} onNavigateBack={handleNavigateBack} />
            {isAuthenticated && <EditProfileSection />}
        </>

    )
}

export default EditProfileView;
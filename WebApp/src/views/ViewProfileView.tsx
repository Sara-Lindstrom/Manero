import React, { useState, useEffect } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ViewProfileSection from '../sections/ViewProfileSection'
import { useNavigate } from 'react-router-dom';

const ViewProfile: React.FC = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // If user is not signed in they will be redirected to the login view
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/signin');
        }
    }, [navigate]);

    return (
        <>
            <BreadcrumbSection currentPage='My Profile' showCurrentPage={true} showCartItem={true} showHamburgerButton={true} />
            {isAuthenticated && <ViewProfileSection />}
        </>
    )
}

export default ViewProfile;
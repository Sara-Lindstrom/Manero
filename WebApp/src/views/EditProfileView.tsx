import React, { useState, useEffect } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import EditProfileSection from '../sections/EditProfileSection';
import { useNavigate } from 'react-router-dom';
import { fetchUserAddresses, fetchUserId, AddressData, fetchAddressData } from '../helpers/AddressHandler';

const EditProfileView: React.FC = () => {

    const [userId, setUserId] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [addresses, setAddresses] = useState<AddressData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // If user is not signed in they will be redirected to login view
    useEffect(() => {
        const _token = localStorage.getItem('token');

        if (_token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/signin');
        }
    }, [navigate]);

    const handleNavigateBack = () => {
        window.history.back();
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            fetchUserId(storedToken)
                .then((userId) => {
                    if (userId) {
                        setUserId(userId);

                        // Both token and userId are available, so we can fetch user addresses
                        if (token) {
                            fetchUserAddresses(token)
                                .then((userAddressData) => {
                                    if (userAddressData) {
                                        setAddresses(userAddressData);
                                    }
                                })
                                .catch((error) => {
                                    console.error('Error fetching user addresses:', error);
                                    setError('Error fetching user addresses.');
                                })
                        }
                    }
                    else {
                        setError('User ID is empty or null.');
                    }
                })
                .catch((error) => {
                    setError('Error fetching user data.');
                });
        } else {
            setError('Please sign in to see your addresses');
        }
    }, [token]);

    return (

        <>
            <BreadcrumbSection currentPage='Edit Profile' showBackButton={true} onNavigateBack={handleNavigateBack} />
            {addresses.length > 0 && isAuthenticated && (
                <EditProfileSection key={addresses[0].id} addressId={addresses[0].id} token={token} userSignedIn={true} />
            )}
        </>

    )
}

export default EditProfileView;
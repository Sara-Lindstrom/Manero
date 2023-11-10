import React, { useState, useEffect } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { Link, useNavigate } from 'react-router-dom';
import AddressComponent from '../components/AddressComponent';
import { fetchUserAddresses, fetchUserId, AddressData } from '../helpers/AddressHandler';

const MyAddresses = () => {
    const [userId, setUserId] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [addresses, setAddresses] = useState<AddressData[]>([]);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
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

                        if (token) {
                            // Both token and userId are available, so we can fetch user addresses
                            fetchUserAddresses(token)
                                .then((userAddressData) => {
                                    if (userAddressData) {
                                        setAddresses(userAddressData);
                                    }
                                })
                                .catch((error) => {
                                    console.error('Error fetching user addresses:', error);
                                    setError('Error fetching user addresses. Please try again later.');
                                })
                        }
                    } else {
                        console.error('User ID is empty or null');
                        setError('User ID is empty or null. Please try again later.');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user ID:', error);
                    setError('Error fetching user data from useEffect. Please try again later.');
                });
        } else {
            console.error('Token is missing or invalid');
            setError('Please sign in to see your addresses');
            navigate('/signin');
        }
    }, [token, navigate]);

    return (
        <>
            <BreadcrumbSection currentPage="My Address" showBackButton={true} onNavigateBack={handleNavigateBack} />

            {!error && userId ? (
                <div className="address-list">
                    {addresses.map((address) => (
                        <AddressComponent key={address.id} addressId={address.id} token={token} userSignedIn={true} />
                    ))}
                </div>
            ) : (
                <div>{error || 'User ID is not available.'}</div>
            )}

            <Link to="/addNewAddress" className='add-address-link'>
                <i className="add-address-icon fa-solid fa-plus"></i>
                <p className="small-info">Add a new address</p>
            </Link>
        </>
    );
};

export default MyAddresses;
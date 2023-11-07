import React, { useState, useEffect } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { Link } from 'react-router-dom';
import AddressComponent, { AddressData } from '../components/AddressComponent';
import Axios from 'axios';
import { fetchProfileData } from '../helpers/FormHandlers';

const MyAddresses = () => {
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');
    const [addresses, setAddresses] = useState<AddressData[]>([]);

    const handleNavigateBack = () => {
        window.history.back();
    };

    const fetchUserData = async () => {
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/GetUserId';

            const response = await Axios.get(API_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                const { userId, userToken } = response.data; // Adjust the data structure accordingly
                setUserId(userId);
                setToken(userToken);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch user data to set 'userId' and 'token'
    }, []); // Run once when the component mounts

    useEffect(() => {
        if (userId && token) {
            // Use fetchProfileData to get user addresses
            fetchProfileData(token)
                .then((userAddressData) => {
                    if (userAddressData) {
                        //setAddresses(userAddressData.addresses);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user addresses:', error);
                });
        }
    }, [userId, token]);


    return (
        <>
            <BreadcrumbSection currentPage="My Address" showBackButton={true} onNavigateBack={handleNavigateBack} />

            <div className="address-list">
                {addresses.map((address, index) => (
                    <AddressComponent key={index} userId={userId} addressId={address.Id} token={token} />
                ))}
            </div>
            <Link to="/addNewAddress">
                <i className="fa-solid fa-plus"></i>
                <p className="small-info">Add a new address</p>
            </Link>
        </>
    );
};

export default MyAddresses;

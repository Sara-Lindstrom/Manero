import React from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { useNavigate } from 'react-router-dom';
import AddressComponent, { AddressData } from '../components/AddressComponent';

const MyAddresses = () => {
    const navigate = useNavigate();
    const handleNavigateBack = () => {
        window.history.back();
    };

    const addresses: AddressData[] = [
        {
            Title: 'Home',
            StreetName: 'Main St',
            City: 'City',
            Country: 'Country',
            PostalCode: '12345',
        },
        {
            Title: 'Work',
            StreetName: 'Elm St',
            City: 'City',
            Country: 'Country',
            PostalCode: '54321',
        },
        {
            Title: 'Vacation',
            StreetName: 'Oak St',
            City: 'City',
            Country: 'Country',
            PostalCode: '67890',
        },
    ];

    return (
        <>
            <BreadcrumbSection currentPage="My Address" showBackButton={true} onNavigateBack={handleNavigateBack} />

            <div className="address-list">
                {addresses.map((address, index) => (
                    <AddressComponent key={index} address={address} />
                ))}
            </div>
        </>
    );
};

export default MyAddresses;

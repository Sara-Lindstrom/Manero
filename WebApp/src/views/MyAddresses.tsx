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
            StreetName: '123 Main St',
            City: 'Example City 1',
            Country: 'Example Country 1',
            PostalCode: '12345',
        },
        {
            Title: 'Work',
            StreetName: '456 Elm St',
            City: 'Example City 2',
            Country: 'Example Country 2',
            PostalCode: '54321',
        },
        {
            Title: 'Vacation',
            StreetName: '789 Oak St',
            City: 'Example City 3',
            Country: 'Example Country 3',
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

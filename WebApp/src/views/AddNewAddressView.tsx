import React, { useState, useEffect } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import AddAddressSection, { AddAddressSectionProps } from '../sections/AddAddressSection';
import { AddressData } from '../helpers/AddressHandler';
import { useNavigate } from 'react-router-dom';

const AddNewAddressView: React.FC = () => {
    const navigate = useNavigate();
    const [newAddresses, setNewAddresses] = useState<AddressData[]>([]);

    const handleNavigateBack = () => {
        window.history.back();
    };

    const handleAddressAdded = (newAddress: AddressData) => {
        // Update the list of addresses after adding a new one
        setNewAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    };

    useEffect(() => {
        // Fetch the token or handle the sign-in logic here
        console.log("UE: View");

        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
            // Handle the case where the token is not available, e.g., redirect to the sign-in page
            // navigate("/signin");
        } else {
            // Do other setup logic if needed
        }
    }, [navigate]);

    const addAddressSectionProps: AddAddressSectionProps = {
        onAddressAdded: handleAddressAdded,
    };

    return (
        <>
            <BreadcrumbSection currentPage='Add a new address' showBackButton={true} onNavigateBack={handleNavigateBack} />
            <AddAddressSection  {...addAddressSectionProps} />
        </>
    )
}

export default AddNewAddressView;

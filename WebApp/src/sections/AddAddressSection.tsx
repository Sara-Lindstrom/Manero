import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddressData } from '../helpers/AddressHandler';
import { useNavigate } from 'react-router-dom';

export interface AddAddressSectionProps {
    onAddressAdded: (newAddress: AddressData) => void;
}

const AddAddressSection: React.FC<AddAddressSectionProps> = ({ onAddressAdded }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        } else {
            setError('User not signed in. Please sign in to add an address.');
        }
    }, []);

    const handleSaveAddress = async () => {
        try {
            if (!token) {
                setError('User not signed in. Please sign in to add an address.');
                return;
            }

            const response = await axios.post(
                'https://localhost:7055/api/Addresses/AddAddress',
                {
                    title,
                    streetName: address,
                    city: address,
                    country: address,
                    postalCode: address,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Assuming your API returns the newly added address
            const newAddress = response.data;

            // Call the callback function passed from the parent component
            // to update the list of addresses after adding a new one
            onAddressAdded(newAddress);

            // Clear the form fields after successfully adding the address
            setTitle('');
            setAddress('');
            setUseCurrentLocation(false);
        } catch (error) {
            console.error('Error saving address:', error);
            setError('Error saving address. Please try again later.');
        }
    };

    return (
        <div className="add-address-section">
            <iframe
                className="custom-map-iframe" 
                title="OpenStreetMap"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik"
            ></iframe>
            <div className="input-address-content">
                <input
                    className="title-input"
                    placeholder="TITLE"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="address-input"
                    placeholder="ENTER A NEW ADDRESS"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="current-location-checkbox">
                <input
                    className="current-location-check"
                    type="checkbox"
                    checked={useCurrentLocation}
                    onChange={(e) => setUseCurrentLocation(e.target.checked)}
                />
                <label className="form-check-label">Use current location</label>
            </div>
            <button className="btn dark-btn form-btn save-address" onClick={handleSaveAddress}>
                SAVE ADDRESS
            </button>
        </div>
    );
};

export default AddAddressSection;

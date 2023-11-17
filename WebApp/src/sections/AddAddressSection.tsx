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
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [postalCodeError, setPostalCodeError] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        } else {
            setError('User not signed in. Please sign in to add an address.');
            navigate('/sign-in');
        }
    }, [navigate]);

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
                    streetName,
                    city,
                    country,
                    postalCode,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Assuming your API returns the newly added address
            const newAddress = response.data;

            // Call the callback function passed from the parent component to update the list of addresses after adding a new one
            onAddressAdded(newAddress);

            // Clear the form fields after successfully adding the address
            setTitle('');
            setStreetName('');
            setCity('');
            setCountry('');
            setPostalCode('');
            setUseCurrentLocation(false);

            // Navigate to '/MyAddresses' after successful addition
            navigate('/myAddresses');

        } catch (error) {
            setError('Error saving address. Please try again later.');
        }
    };

    const validatePostalCode = (value: string) => {
        // Regular expression for postal code validation (you might need to adjust this based on the format of postal codes)
        const postalCodeRegex = /^\d{3}\s\d{2}$/; // Example regex for US postal codes

        if (!value.match(postalCodeRegex)) {
            setPostalCodeError('Invalid postal code format');
        } else {
            setPostalCodeError(null);
        }
    };

    return (
        <>
            <div className='container'>
                <iframe
                    className="custom-map-iframe"
                    title="OpenStreetMap"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik"
                ></iframe>

                <form>
                    <div className='input-container'>
                        <p className='input-label'>TITLE</p>
                        <input
                            className="input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='input-container'>
                        <p className='input-label'>STREET NAME</p>
                        <input
                            className="input"
                            value={streetName}
                            onChange={(e) => setStreetName(e.target.value)}
                        />
                    </div>
                    <div className='input-container'>
                        <p className='input-label'>CITY</p>
                        <input
                            className="input"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className='input-container'>
                        <p className='input-label'>COUNTRY</p>
                        <input
                            className="input"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className='input-container'>
                        <p className='input-label'>POSTAL CODE</p>
                        <input
                            className="input"
                            value={postalCode}
                            onChange={(e) => {
                                setPostalCode(e.target.value);
                                validatePostalCode(e.target.value); // Validate postal code on change
                            }}
                        />
                        {postalCodeError && <p className='error-message'>{postalCodeError}</p>}
                    </div>
                    <div className="actions-container">
                        <div>
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={useCurrentLocation}
                                    onChange={(e) => setUseCurrentLocation(e.target.checked)}
                                />
                                <label>Use my current location</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn dark-btn form-btn" onClick={(e) => { e.preventDefault(); handleSaveAddress(); }}>
                        SAVE ADDRESS
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddAddressSection;
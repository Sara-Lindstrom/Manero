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
    const [titleError, setTitleError] = useState<string | null>(null);
    const [streetNameError, setStreetNameError] = useState<string | null>(null);
    const [cityError, setCityError] = useState<string | null>(null);
    const [countryError, setCountryError] = useState<string | null>(null);

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
    
            const newAddress = response.data;
    
            onAddressAdded(newAddress);
    
            setTitle('');
            setStreetName('');
            setCity('');
            setCountry('');
            setPostalCode('');
            setUseCurrentLocation(false);
    
            navigate('/myAddresses');
    
        } catch (error) {
            setError('Error saving address. Please try again later.');
        }
    };

    const validateInput = (value: string, setInputError: React.Dispatch<React.SetStateAction<string | null>>) => {
        const inputRegex = /^[a-zA-Z0-9]{2,}$/;

        if (!value.match(inputRegex)) {
            setInputError('Needs to be at least 2 characters');
        } else {
            setInputError(null);
        }
    };

    const validatePostalCode = (value: string) => {
        const postalCodeRegex = /^\d{3}\s\d{2}$/;

        if (!value.match(postalCodeRegex)) {
            setPostalCodeError('Needs to be formatted as 123 45');
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
                            onChange={(e) => {
                                setTitle(e.target.value);
                                validateInput(e.target.value, setTitleError);
                            }}
                        />
                    </div>
                        <div className='error-field'>{titleError && <p className='error-message'>{titleError}</p>}</div>

                    <div className='input-container'>
                        <p className='input-label'>STREET NAME</p>
                        <input
                            className="input"
                            value={streetName}
                            onChange={(e) => {
                                setStreetName(e.target.value);
                                validateInput(e.target.value, setStreetNameError);
                            }}
                        /> 
                    </div>
                        <div className='error-field'>{streetNameError && <p className='error-message'>{streetNameError}</p>}</div>

                    <div className='input-container'>
                        <p className='input-label'>CITY</p>
                        <input
                            className="input"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                                validateInput(e.target.value, setCityError);
                            }}
                        /> 
                    </div>
                        <div className='error-field'>{cityError && <p className='error-message'>{cityError}</p>}</div>

                    <div className='input-container'>
                        <p className='input-label'>COUNTRY</p>
                        <input
                            className="input"
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                                validateInput(e.target.value, setCountryError);
                            }}
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
                        <div className='error-field'>{countryError && <p className='error-message'>{countryError}</p>}</div>
                    
                    <div className='input-container'>
                        <p className='input-label'>POSTAL CODE</p>
                        <input
                            className="input"
                            value={postalCode}
                            onChange={(e) => {
                                setPostalCode(e.target.value);
                                validatePostalCode(e.target.value);
                            }}
                        />
                    </div>
                        <div className='error-field'>{postalCodeError && <p className='error-message'>{postalCodeError}</p>}</div>
                    <button className="btn dark-btn form-btn" onClick={(e) => { e.preventDefault(); handleSaveAddress(); }}>
                        SAVE ADDRESS
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddAddressSection;


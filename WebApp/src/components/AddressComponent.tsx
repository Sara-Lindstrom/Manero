import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export type AddressData = {
    Id: number;
    Title: string;
    StreetName: string;
    City: string;
    Country: string;
    PostalCode: string;
};

type AddressComponentProps = {
    userId: string;
    addressId: number;
    token: string;
};


const AddressComponent: React.FC<AddressComponentProps> = ({ userId, addressId, token }) => {
    const [address, setAddress] = useState<AddressData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUserAddress = async (userId: string, addressId: number, token: string): Promise<AddressData | null> => {
        const apiUrl = `https://localhost:7055/api/User/${userId}/Addresses/${addressId}`;

        try {
            const response = await Axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error('Error fetching user address:', error);
        }

        return null;
    };

    useEffect(() => {
        fetchUserAddress(userId, addressId, token)
            .then((data) => {
                if (data) {
                    setAddress(data);
                }
            })
            .catch((error) => {
                console.error('Error fetching user address:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId, addressId, token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!address) {
        return <div>Address not found.</div>;
    }

    return (
        <div className='address-component'>
            <div className='container'>
            <i className="address-icon fa-solid fa-house"></i>
            <div className='address-info'>
                <p className='address-title'>{address.Title}</p>
                <div className='address-small-info'>
                    <p className='small-info'>{address.StreetName},</p>
                    <p className='small-info'>{address.City},</p>
                    <p className='small-info'>{address.Country},</p>
                    <p className='small-info'>{address.PostalCode}</p>
                </div>
            </div>
            <Link to="/" className='edit-address'><i className="fa-solid fa-pen"></i></Link>
            </div>
            <div className='address-line'></div>
            <i className="fa-solid fa-plus"></i>
        </div>
    );
};

export default AddressComponent;

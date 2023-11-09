import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export type AddressData = {
    id: number;
    title: string;
    streetName: string;
    city: string;
    country: string;
    postalCode: string;
};

type AddressComponentProps = {
    userId: string;
    address: AddressData;
    token: string;
};


const AddressComponent: React.FC<AddressComponentProps> = ({ userId, address, token }) => {
    const [localAddress, setLocalAddress] = useState<AddressData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            if (!address || address?.id == null) {
                setLoading(false);
                return;
            }

            const addressId = address.id;
            const apiUrl = `https://localhost:7055/api/addresses/GetAddress/${addressId}`;

            try {
                const response = await Axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.status === 200) {
                    setLocalAddress(response.data);
                }
            } catch (error) {
                console.error('Error fetching user address:', error);
            }

            setLoading(false);
        };

        fetchData();
    }, [userId, address, token]);

    if (loading) {
        return <div>Loading</div>;
    }

    if (!localAddress) {
        return <div>Address not found.</div>;
    }

    return (
        <div className='address-component'>
            <div className='container'>
            <i className="address-icon fa-solid fa-house"></i>
            <div className='address-info'>
                <p className='address-title'>{address.title}</p>
                <div className='address-small-info'>
                    <p className='small-info'>{address.streetName},</p>
                    <p className='small-info'>{address.city},</p>
                    <p className='small-info'>{address.country},</p>
                    <p className='small-info'>{address.postalCode}</p>
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

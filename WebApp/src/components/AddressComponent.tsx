import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAddressData, AddressData } from '../helpers/AddressHandler';

type AddressComponentProps = {
    addressId: number;
    token: string;
    userSignedIn: boolean;
};

const AddressComponent: React.FC<AddressComponentProps> = ({ addressId, token, userSignedIn }) => {
    const [localAddress, setLocalAddress] = useState<AddressData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!userSignedIn) {
                setLoading(false);
                return;
            }
            try {
                const addressData = await fetchAddressData(addressId, token);

                if (addressData) {
                    setLocalAddress(addressData);
                }
            } catch (error) {
                console.error('Error fetching user address:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, [addressId, token, userSignedIn]);

    if (!userSignedIn) {
        return <div>User not signed in. Please sign in to view the address.</div>;
    }

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
                    <p className='address-title'>{localAddress.title}</p>
                    <div className='address-small-info'>
                        <p className='small-info'>{localAddress.streetName},</p>
                        <p className='small-info'>{localAddress.city},</p>
                        <p className='small-info'>{localAddress.country},</p>
                        <p className='small-info'>{localAddress.postalCode}</p>
                    </div>
                </div>
                <Link to="/" className='edit-address'><i className="fa-solid fa-pen"></i></Link>
            </div>
        </div>
    );
};

export default AddressComponent;
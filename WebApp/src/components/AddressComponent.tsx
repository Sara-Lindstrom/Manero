import React from 'react';

export type AddressData = {
    Title: string;
    StreetName: string;
    City: string;
    Country: string;
    PostalCode: string;
};

type AddressComponentProps = {
    address: AddressData;
};

const AddressComponent: React.FC<AddressComponentProps> = ({ address }) => {
    return (
        <div className='address-component'>
            <div className='container'>
            <i className="address-icon fa-solid fa-house"></i>
            <div className='address-info'>
                <p className='address-title'>Title: {address.Title}</p>
                <div className='address-small-info'>
                    <p>Title: {address.Title}</p>
                    <p>Street: {address.StreetName}</p>
                    <p>City: {address.City}</p>
                    <p>Country: {address.Country}</p>
                    <p>Postal Code: {address.PostalCode}</p>
                </div>
            </div>
            <a className='edit-address'><i className="fa-solid fa-pen"></i></a>
            </div>
        </div>
    );
};

export default AddressComponent;

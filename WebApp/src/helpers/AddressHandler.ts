import axios from 'axios';

export type AddressData = {
    id: number;
    title: string;
    streetName: string;
    city: string;
    country: string;
    postalCode: string;
    userId: string;
};

export const fetchUserAddresses = async (token: string): Promise<AddressData[] | null> => {
    const apiUrl = `https://localhost:7055/api/Addresses/UserAddresses`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching user addresses:', error);
        throw new Error('Error fetching user addresses. Please try again later.');
    }

    return null;
};

export const fetchUserId = async (token: string): Promise<string | null> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/GetUserData';

    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error("An error occurred while fetching user ID:", error);
        throw new Error('Error fetching user data from fetchUserId. Please try again later.');
    }

    return null;
};

export const fetchAddressData = async (addressId: number, token: string) => {
    const apiUrl = `https://localhost:7055/api/addresses/GetAddress/${addressId}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching user address:', error);
        throw new Error('Error fetching user address. Please try again later.');
    }

    return null;
};
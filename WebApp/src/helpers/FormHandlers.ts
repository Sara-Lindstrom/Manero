import { ChangeEvent, FormEvent } from 'react';
import { AxiosResponse } from 'axios';
import axios from 'axios';

// To be able to navigate after success
type Navigate = (path: string) => void;

// Used for reset password
interface ResetPasswordResponse {
    status: number;
}

// Used for sign up
export type FormData = {
    name: string;
    email: string;
    password: string;
};

// Used for sign in
export type ProfileData = {
    name: string;
    email: string;
    phoneNumber: string | null; // phoneNumber can be a string or null
    location: string;
};

// Used for Edit and View profile information
export type FormDataSignIn = {
    email: string;
    password: string;
    rememberMe: boolean;
};

// Handling changes in the input fields
export const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    formData: FormData,
    setFormData: (formData: FormData) => void,
): void => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

// Sign up form function
export const handleSignupSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formData: FormData,
    navigate: Navigate,
    onSuccess?: () => void,
    onFail?: () => void
): Promise<void> => {
    e.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User';

    try {
        const response = await axios.post(API_URL, formData);
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            navigate('/signin');
            if (onSuccess) {
                onSuccess();
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        if (onFail) {
            onFail();
        }
    }
};

// Sign in form function
export const handleSigninSubmit = async (
    e: FormEvent<HTMLFormElement>,
    formDataSignIn: FormDataSignIn,
    navigate: Navigate,
    onSuccess?: () => void,
    onFail?: () => void
): Promise<void> => {
    e.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/SignIn';

    try {
        const response = await axios.post(API_URL, formDataSignIn);
        if (response.status === 200) {
            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);

            // Navigate to the profile view
            navigate('/viewProfile');

            if (onSuccess) {
                onSuccess();
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        if (onFail) {
            onFail();
        }
    }
};

// Fetch profile data to display user information
export const fetchProfileData = async (token: string): Promise<ProfileData | null> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/EditProfile';

    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error("An error occurred while fetching profile data:", error);
    }

    return null;
};

// Function to update profile data
export const handleUpdateProfile = async (
    profileData: ProfileData,
    token: string,
    onSuccess?: () => void,
    onFail?: (error: any) => void
): Promise<void> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/UpdateProfile';

    const payload = {
        ...profileData,
        phoneNumber: profileData.phoneNumber || null,
    };

    try {
        const response = await axios.put(API_URL, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200 || response.status === 204) {
            if (onSuccess) {
                onSuccess();
            }
        } else {
            if (onFail) {
                onFail(new Error('Failed to update profile'));
            }
        }
    } catch (error) {
        console.error("An error occurred while updating the profile:", error);
        if (onFail) {
            onFail(error);
        }
    }
};

// Sign out form function
export const handleSignOut = async (
    navigate: Navigate,
    onSuccess?: () => void,
    onFail?: () => void
): Promise<void> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/SignOut';

    try {
        const response = await axios.post(API_URL, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 200) {
            localStorage.removeItem('token');
            if (onSuccess) {
                onSuccess();
            }
            console.log('Sign-out successful.');
            navigate('/signin');
        } else {
            if (onFail) {
                onFail();
            }
            console.error('Sign-out failed.');
        }
    } catch (error) {
        console.error('Error:', error);
        if (onFail) {
            onFail();
        }
    }
};

// Password reset function
export const handleResetPassword = async (
    email: string,
    newPassword: string,
    confirmPassword: string // New parameter for confirmed password
): Promise<boolean> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/ResetPassword';

    try {
        const response: AxiosResponse<ResetPasswordResponse> = await axios.post(API_URL, {
            Email: email,
            NewPassword: newPassword,
            ConfirmPassword: confirmPassword // Use the new parameter
        });

        return response.status === 200;
    } catch (error: any) {
        console.error('Error:', error);
        return false;
    }
};

// Methods for check if email exists (used for forgot password, but can be reused in other sections)
export const checkEmailExists = async (
    email: string
): Promise<boolean> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/CheckEmail';
    try {
        const response = await axios.post(API_URL, JSON.stringify(email), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.status === 200;
    } catch (error) {
        console.error("An error occurred:", error);
        return false;
    }
};
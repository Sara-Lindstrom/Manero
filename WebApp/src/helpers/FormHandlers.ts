import axios from 'axios';
import { ChangeEvent, FormEvent } from 'react';

type Navigate = (path: string) => void;

export type FormData = {
    name: string;
    email: string;
    password: string;
};

export type FormDataSignIn = {
    email: string;
    password: string;
};

// Handling changes in the input fields
export const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    formData: FormData,
    setFormData: (formData: FormData) => void,
): void => {
}

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
            navigate('/paymentMethodView');
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

// Sign out form function (not finished)
export const handleSignOut = async (navigate: Navigate): Promise<void> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/SignOut';
    try {
        const response = await axios.post(API_URL);
        if (response.status === 200) {
            navigate('/signin');
        }
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
    }
}

// Password reset function (not finished)
export const handleResetPassword = async (email: string, newPassword: string): Promise<boolean> => {
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/ResetPassword';
    let success = false;

    try {
        const response = await axios.post(API_URL, { Email: email, NewPassword: newPassword, ConfirmPassword: newPassword });
        if (response.status === 200) {
            success = true;
        }
    } catch (error: any) {
        console.error('Error:', error);
    }

    return success;
}
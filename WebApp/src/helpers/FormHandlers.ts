import { ChangeEvent, FormEvent } from 'react';
import { AxiosResponse } from 'axios';
import axios from 'axios';

type Navigate = (path: string) => void;

interface ResetPasswordResponse {
    status: number;
}

export type FormData = {
    name: string;
    email: string;
    password: string;
};

export type FormDataSignIn = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type FormDataEditProfile = {
    email: string;
    name: string;
    phoneNumber: string;
    location: string;
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

            }
        });

        if (response.status === 200) {
            navigate('/signin');

            if (onSuccess) {
                onSuccess();
            }
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error:', error.message);

            if (onFail) {
                onFail();
            }
        }
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

//Handle update profile
export const handleEditSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formData: FormDataEditProfile,
    navigate: Navigate,
    onSuccess?: () => void,
    onFail?: () => void
): Promise<void> => {
    e.preventDefault();
    const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7055/api/User/UpdateProfile';

    try {
        const response = await axios.put(API_URL, formData);
        if (response.status === 200) {
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
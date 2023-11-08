import React, { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import * as FormValidation from '../helpers/FormValidation';
import { checkPhoneNumber } from '../helpers/FormHandlers';
import FlagComponent from '../components/FlagComponent';

type VerifyPhoneProps = {
    navigate: NavigateFunction;
};

const VerifyPhoneNumberSection: React.FC<VerifyPhoneProps> = ({ navigate }) => {

    // UseStates for error messages in frontend validation
    const [phoneNumberError, setPhoneNumberError] = useState('');

    // useStates for setting default value for phone number
    const [phoneNumber, setPhoneNumber] = useState('+');

    // Handle formatting the phonenumber so the flag are shown correctly on input
    const handlePhoneNumberChange = (value: string) => {
        let formattedValue = value;
    
        // Ensure the value starts with '+' (written out automatically)
        if (!formattedValue.startsWith('+')) {
            formattedValue = `+${formattedValue}`;
        }
    
        // Automatically add a space after the country code
        if (formattedValue.match(/^\+\d{2}$/)) {
            formattedValue += ' ';
        }
    
        setPhoneNumber(formattedValue);
        const validationResult = FormValidation.ValidatePhoneNumber(formattedValue);
        setPhoneNumberError(validationResult.error);
    };

    const ValidateConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validPhoneNumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;

        if (validPhoneNumber) {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Remove non-numeric characters before sending
                    const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '');
                    const phoneNumberExists = await checkPhoneNumber(formattedPhoneNumber, token);
                    if (phoneNumberExists) {
                        console.log('Phone number exists. Proceed to verification.');
                        navigate('/verifyPhone'); // Redirect to verification page
                    } else {
                        console.log('Phone number does not exist. No need for verification.');
                        // Handle the case where the phone number does not exist
                    }
                } catch (error) {
                    // Handle the error from the checkPhoneNumber function
                    setPhoneNumberError('Failed to verify phone number. Please try again.');
                }
            }
        } else {
            setPhoneNumberError('Invalid phone number format.');
        }
    };

    return (
        <div className="container">
            <p className='page-titel'>We have sent you an SMS with a code to number +17 0123456789.</p>
            <form onSubmit={ValidateConfirm}>

                <div className='input-container'>
                    <p className='input-label'>Phone number</p>
                    <FlagComponent
                        phoneNumber={phoneNumber}
                        onPhoneNumberChange={handlePhoneNumberChange}
                        data-testid="phoneNumberInput"
                    />
                    {/* Add validation message */}
                    {phoneNumberError === "" ?
                        <div className='input-validation-icon' data-testid="successIcon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        :
                        <div className='input-validation-icon' data-testid="errorIcon">
                            <i className="fa-regular fa-x"></i>
                        </div>
                    }
                </div>
                <p className='input-error' data-testid="phoneNumberError">{phoneNumberError}</p>

                <button className='btn dark-btn form-btn' data-testid="submitButton" style={{ marginTop: '20px' }} type='submit'>CONFIRM</button>
            </form>
        </div>
    );
}

export default VerifyPhoneNumberSection;
import React, { useState } from 'react';
import * as FormValidation from '../helpers/FormValidation'
import { NavigateFunction } from 'react-router-dom';
import FlagComponent from '../components/FlagComponent';

type VerifyPhoneProps = {
    navigate: NavigateFunction
}

const VerifyPhoneNumberSection: React.FC<VerifyPhoneProps> = ({ navigate }:
    VerifyPhoneProps) => {

    // useState for visibility of phone number input
    const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);

    // UseStates for error messages in frontend validation
    const [phoneNumberError, setPhoneNumberError] = useState('');

    // useStates for setting default value for phone number
    const [phoneNumber, setPhoneNumber] = useState('+');

    const ValidateConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let validPhonenumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;
        if (validPhonenumber) {
            navigate('/activate');
        }
    }

    // Handle formatting the phonnumber so the flag are shown correctly on input
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

    // Need to add validation on phone number

    return (
        <div className="container">
            <p className='page-titel'>We have sent you an SMS with a code to number +17 0123456789.</p>
            <form onSubmit={ValidateConfirm}>

                <div className='input-container'>
                    <p className='input-label'>Phone number</p>
                    <FlagComponent
                        phoneNumber={phoneNumber}
                        onPhoneNumberChange={handlePhoneNumberChange}
                    />
                    {/* Add validation message */}
                    {phoneNumberError === "" ?
                        <div className='input-validation-icon'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        :
                        <div className='input-validation-icon'>
                            <i className="fa-regular fa-x"></i>
                        </div>
                    }
                </div>
                <p className='input-error'>{phoneNumberError}</p>

                <button className='btn dark-btn form-btn' data-testid="submitButton" style={{ marginTop: '20px' }} type='submit'>CONFIRM</button>
            </form>
        </div>
    );
}

export default VerifyPhoneNumberSection;
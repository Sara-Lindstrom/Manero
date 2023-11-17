import React, { useState } from 'react';
import FlagComponent from '../components/FlagComponent';
import { NavigateFunction } from 'react-router-dom';
import * as FormValidation from '../helpers/FormValidation';
import * as VerificationHelper from '../helpers/VerificationHelper';

type VerifyPhoneProps = {
    navigate: NavigateFunction
}

const VerifyPhoneNumberSection: React.FC<VerifyPhoneProps> = ({ navigate }:
    VerifyPhoneProps) => {

    // UseState for default values and errors for phone number
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+46 ');

    const handlePhoneNumberChange = (value: string) => {
        setPhoneNumber(value);
        const validationResult = FormValidation.ValidatePhoneNumber(value);
        if (validationResult.isValid) {
            setPhoneNumberError(''); // Clears the error if the phone number is valid
        } else {
            setPhoneNumberError(validationResult.error); // Sets the error while the user is typing
        }
    };

    // When validate, create a verification code for the user to simulate the "SMS"
    const ValidateConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationResult = FormValidation.ValidatePhoneNumber(phoneNumber);
        if (validationResult.isValid) {
            const code = VerificationHelper.generateVerificationCode();
            console.log(`Verification code (simulated SMS): ${code}`); // Should simulate an "SMS"
            VerificationHelper.storeVerificationCode(code);
            navigate('/activate'); // Navigate to the verification section
        } else {
            setPhoneNumberError(validationResult.error);
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
                        onPhoneNumberChange={(value) => {
                            setPhoneNumber(value);
                            const validationResult = FormValidation.ValidatePhoneNumber(value);
                            setPhoneNumberError(validationResult.error);
                        }}
                        data-testid="phoneNumberInput"
                    />
                    {phoneNumberError === "" ?
                        <div className='input-validation-icon' data-testid="successIcon">
                            <i className="fa-solid fa-check"></i>
                        </div> :
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
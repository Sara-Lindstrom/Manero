import React, { useState } from 'react';
import * as FormValidation from '../helpers/FormValidation'
import { NavLink, NavigateFunction } from 'react-router-dom';

type VerifyPhoneProps = {
    navigate: NavigateFunction;
}

const VerificationSection: React.FC<VerifyPhoneProps> = ({ navigate }: VerifyPhoneProps) => {
    const [otp, setOtp] = useState(['', '', '', '', '']);

    const handleInputChange = (index: number, value: string) => {
        if (!isNaN(Number(value)) || value === '') { // Ensuring only numbers or empty values are allowed
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
                nextInput?.focus();
            } else if (value && index === otp.length - 1) { // Last input
                // Add validation for the last digit
                if (!isNaN(Number(value))) { // Just checking if the last one is a number. If yes, send them to the shop
                    navigate('/home');
                }
            }
        }
    };
    // Need to add validation on phone number (to only be numbers)
    return (
        <div className="verification-view">

            {/* OTP Input Fields */}
            <div className="otp-inputs">
                {otp.map((value, index) => (
                    <input
                        className="otp-input-field"
                        key={index}
                        id={`otp-input-${index}`}
                        value={value}
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        placeholder=' '
                    />
                ))}
            </div>

            {/* Verification Buttons */}
            <div className="verification-container">
                <NavLink className="link-verify" to="/">Didn't recieve the OTP? Resend.</NavLink>
                <button
                    className='btn dark-btn form-btn'
                    data-testid=""
                    style={{ marginTop: '20px' }}
                    type='submit'
                >
                    VERIFY
                </button>

                {/* Going to add numpad component */}
            </div>

        </div>
    );
};

export default VerificationSection;
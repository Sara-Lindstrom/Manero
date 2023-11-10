import React, { useState, useEffect } from 'react';
import * as FormValidation from '../helpers/FormValidation'
import * as VerificationHelper from '../helpers/VerificationHelper';
import { NavLink, NavigateFunction } from 'react-router-dom';

type VerifyPhoneProps = {
    navigate: NavigateFunction;
}

const VerificationSection: React.FC<VerifyPhoneProps> = ({ navigate }: VerifyPhoneProps) => {
    const [verificationerror, setVerificationError] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [verificationCode, setVerificationCode] = useState('');

    // Retrieve the stored verification code from previous view
    useEffect(() => {
        const code = VerificationHelper.getVerificationCode();
        if (code) {
            setVerificationCode(code);
        }
    }, []);

    // Added directly into the section since this is not reused anywhere
    const handleInputChange = (index: number, value: string) => {
        setVerificationError('');

        if (!isNaN(Number(value)) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
                nextInput?.focus();
            }
        }
    };

    // Verify the verification code
    const verifyOtp = () => {
        const validationResult = FormValidation.ValidateOTP(otp);
        if (!validationResult.isValid) {
            setVerificationError(validationResult.error);
            return;
        }

        if (otp.join('') === verificationCode) {
            navigate('/accountconfirmed');
        } else {
            setVerificationError('The entered code is incorrect.');
        }
    };

    // If user wants to resend the code, clicking the resend link will generate a new code to the console
    const resendOtp = () => {
        const newCode = VerificationHelper.generateVerificationCode();
        VerificationHelper.storeVerificationCode(newCode);
        console.log(`New OTP (simulated SMS): ${newCode}`);

        setOtp(['', '', '', '', '']);
        setVerificationError('Something went wrong when trying to resend the code');
    };

    const handleVerifyClick = () => {
        verifyOtp();
    };

    return (
        <div className="verification-view">
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
            <div className="verification-container">
                <div className="verification-error">{verificationerror && <p className="verification-error">{verificationerror}</p>}</div>
                <NavLink className="link-verify" to="#" onClick={resendOtp}>Didn't recieve the OTP? Resend.</NavLink>
                <button
                    className='btn dark-btn form-btn'
                    data-testid="verifyButton"
                    style={{ marginTop: '20px' }}
                    type='button'
                    onClick={handleVerifyClick}
                >
                    VERIFY
                </button>
                {/* Add numpad component? */}
            </div>

        </div>
    );
};

export default VerificationSection;
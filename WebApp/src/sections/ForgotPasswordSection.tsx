import React, { useState } from 'react'; // Gl�m inte att importera useState
import { ValidateEmail } from '../helpers/FormValidation';
import { useNavigate } from 'react-router-dom';
import { checkEmailExists } from '../helpers/FormHandlers';

const ForgotPasswordSection = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const validationResult = ValidateEmail(e.target.value);
        setEmailError(validationResult.error);
    };

    const handleSendClick = async () => {
        const validationResult = ValidateEmail(email);
        if (!validationResult.isValid) {
            setEmailError(validationResult.error);
        } else {
            setEmailError('');
            const emailExists = await checkEmailExists(email);
            if (emailExists) {
                navigate('/changePassword', { state: { email } }); // Redirect to /changePassword as a registered user
            } else {
                setEmailError('Email does not exist');
            }
        }
    };

    return (
        <section className="forgot-password-section">
            <div className='container'>
            <p className="instruction-message">
                Please enter your email address. You will receive a link to create a new password via email.
            </p>
            <div className='input-container'>
                <p className='input-label'>EMAIL</p>
                <input
                    className='input'
                    id='email-input'
                    aria-label='EMAIL'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            {emailError && <p className="input-error">{emailError}</p>}
            <button className='btn dark-btn form-btn' onClick={handleSendClick} style={{ marginTop: '20px' }}>SEND</button>
            </div>
        </section>
    );
}

export default ForgotPasswordSection;
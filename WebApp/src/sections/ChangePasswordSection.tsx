import React, { useState, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleResetPassword } from '../helpers/FormHandlers';
import { ValidatePassword, ValidateConfirmPassword } from '../helpers/FormValidation';

const ChangePasswordSection = () => {
    const location = useLocation();
    const { email } = location.state || {};
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
        const validationResult = ValidatePassword(event.target.value);
        setNewPasswordError(validationResult.error);
        const confirmValidationResult = ValidateConfirmPassword(event.target.value, confirmPassword);
        setConfirmPasswordError(confirmValidationResult.error);
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        const validationResult = ValidateConfirmPassword(newPassword, event.target.value);
        setConfirmPasswordError(validationResult.error);
    };

    const handleResetPasswordComponent = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validNewPassword = ValidatePassword(newPassword).isValid;
        const validConfirmPassword = ValidateConfirmPassword(newPassword, confirmPassword).isValid;

        if (validNewPassword && validConfirmPassword) {
            const resetSuccessful = await handleResetPassword(email, newPassword, confirmPassword); // No callbacks here
            if (resetSuccessful) {
                navigate('/resetPasswordConfirmed'); // Redirect to /resetPasswordConfirmed
            } else {
                setError('Failed to reset password');
            }
        }
    };

    return (
        <div className="container change-password-page">
            <p className="instruction-message">Enter new password and confirm.</p>
            {error && <p className='error-message'>{error}</p>}           
            <div className='input-container'>
                <p className='input-label'>NEW PASSWORD</p>
                <input 
                    id="newPassword"
                    name="newPassword"
                    type={newPasswordVisible ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handlePasswordChange}
                    aria-label='NEW PASSWORD'
                    className='input'
                />
                <div className='input-validation-icon'>
                    <button className='invisible-btn' onClick={() => setNewPasswordVisible(!newPasswordVisible)}>
                        <i className={newPasswordVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                    </button>
                </div>
            </div>
            <p className='input-error'>{newPasswordError}</p>

            <div className='input-container'>
                <p className='input-label'>CONFIRM PASSWORD</p>
                <input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    aria-label='CONFIRM PASSWORD'
                    className='input'
                />
                <div className='input-validation-icon'>
                    <button className='invisible-btn' onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <i className={confirmPasswordVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                    </button>
                </div>
            </div>
            <p className='input-error'>{confirmPasswordError}</p>

            <button className='btn dark-btn form-btn' onClick={handleResetPasswordComponent}  style={{ marginTop: '20px' }}>CHANGE PASSWORD</button>
        </div>
    );
}

export default ChangePasswordSection;
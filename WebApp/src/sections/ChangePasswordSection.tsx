import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidatePassword, ValidateConfirmPassword } from '../helpers/FormValidation';

const ChangePasswordSection = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
        const validationResult = ValidatePassword(event.target.value);
        setNewPasswordError(validationResult.error);
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
        const validationResult = ValidateConfirmPassword(newPassword, event.target.value);
        setConfirmPasswordError(validationResult.error);
    };
    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validNewPassword = ValidatePassword(newPassword).isValid;
        const validConfirmPassword = ValidateConfirmPassword(newPassword, confirmPassword).isValid;

        if (validNewPassword && validConfirmPassword) {
            // Navigera till "reset confirmed"-sidan
            navigate('/resetPasswordConfirmed');
        }
    
    };
    return (
        <div className="change-password-page">
            <p className="instruction-message">Enter new password and confirm.</p>
            
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

            <button className='btn dark-btn form-btn' onClick={handleSubmit}  style={{ marginTop: '20px' }}>CHANGE PASSWORD</button>
        </div>
    );
}

export default ChangePasswordSection;

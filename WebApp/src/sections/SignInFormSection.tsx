import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FormValidation from '../helpers/FormValidation'

const SignIn = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validEmail = FormValidation.ValidateEmail(email).isValid;
        const validPassword = FormValidation.ValidatePassword(password).isValid;

        if (validEmail && validPassword) {
            // const formData = {
            //     email,
            //     password
            // };
        }
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgotPassword');
    };
    return (
        <div className="container">
            <p className='signin-sub-titel'>Sign in to continue</p>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <p className='input-label'>EMAIL</p>
                    <input className='input' id='SignUpFormEmail' 
                    onChange={(event) => {
                        setEmail(event.target.value);
                        const validationResult = FormValidation.ValidateEmail(event.target.value);
                        setEmailError(validationResult.error);
                    }}/>
                    {/* if input valid show tick else show ex */}
                    {emailError === "" ?
                        <div className='input-validation-icon'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        :
                        <div className='input-validation-icon'>
                            <i className="fa-regular fa-x"></i>
                        </div>
                    }
                </div>
                <p className='input-error'>{emailError}</p>
                <div className='input-container'>
                    <p className='input-label'>PASSWORD</p>
                    <input className='input' type={passwordVisible ? "text" : "password"} id='SignUpFormPassword' data-testid="SignUpFormPassword"                
                    onChange={(event) => {
                        setPassword(event.target.value);
                        const validationResult = FormValidation.ValidatePassword(event.target.value);
                        setPasswordError(validationResult.error);
                    }}/>
                    {/* button for display of password text */}
                    <div className='input-validation-icon'>
                        <button className='invisible-btn' onClick={() => setPasswordVisible(!passwordVisible)}><i className={passwordVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></button>
                    </div>
                </div>
                <p className='input-error'>{passwordError}</p>
                <div className="actions-container">
                    <div>
                        <div className="remember-me">
                            <input 
                                type="checkbox" 
                                checked={rememberMe} 
                                onChange={(e) => setRememberMe(e.target.checked)} 
                            />
                            <label>Remember Me</label>
                        </div>
                    </div>
                    <div>
                        <a href="/forgotPassword" onClick={handleForgotPasswordClick}>Forgot Password?</a>
                    </div>
                </div>
                <button className='btn dark-btn form-btn' data-testid="submitButton" style={{ marginTop: '20px' }} type='submit'>SIGN IN</button>
            </form>
            
        </div>
    );
}

export default SignIn;

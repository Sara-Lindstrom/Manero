import React, { useState } from 'react';
import * as FormValidation from '../helpers/FormValidation'
import { handleSigninSubmit, FormDataSignIn } from '../helpers/FormHandlers';
import { NavigateFunction } from 'react-router-dom';

type SignInProps = {
    navigate: NavigateFunction
}

const SignInFormSection: React.FC<SignInProps> = ({navigate} : SignInProps) => {

    //useSTate for visibility of password input
    const [passwordVisible, setPasswordVisible] = useState(false);

    //UseStates for error messages in frontend validation
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    //useStates for setting input values both for validation and sign in user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    //validates form when user clicks submit and sends inputs to hook for DB
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const validEmail = FormValidation.ValidateEmail(email).isValid;
            const validPassword = FormValidation.ValidatePassword(password).isValid;

            if (validEmail && validPassword) {
                const formDataSignIn: FormDataSignIn = {
                    email,
                    password
                };

                await handleSigninSubmit(e, formDataSignIn, navigate,
                    () => { console.log('SignIn successful') },
                    () => { console.log('SignIn failed') }
                );
            }
        } catch (error) {
            console.error("An error occurred during the signup process:", error);
        }
    };

    const handleForgotPasswordClick = async () => {
        navigate('/forgotPassword');
    };

    return (
        <div className="container">
            <p className='signin-sub-titel'>Sign in to continue</p>
            <form onSubmit={handleSignIn}>

                <div className='input-container'>
                    <p className='input-label'>EMAIL</p>
                        <input className='input'
                            onChange={(event) => {
                            setEmail(event.target.value);
                            const validationResult = FormValidation.ValidateEmail(event.target.value);
                            setEmailError(validationResult.error);
                        }}
                    />
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
                    <input className='input' type={passwordVisible ? "text" : "password"}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            const validationResult = FormValidation.ValidatePassword(event.target.value);
                            setPasswordError(validationResult.error);
                        }} />
                    {/* button for display of password text */}
                    <div className='input-validation-icon'>
                        <button type="button" className='invisible-btn' onClick={() => setPasswordVisible(!passwordVisible)}><i className={passwordVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></button>
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

export default SignInFormSection;
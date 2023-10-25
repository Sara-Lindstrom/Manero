import React, { useState } from 'react'
import * as FormValidation from '../helpers/FormValidation'
import { handleSignupSubmit, FormData } from '../helpers/FormHandlers'

const SignUpFormSection: React.FC = () => {

    //useSTate for visibility of password input
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    //UseStates for error messages in frontend validation
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    //useStates for setting input values both for validation and populate new User
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //validates form when user clicks submit and sends inputs to hook for DB 
    const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const validName = FormValidation.ValidateName(name).isValid;
            const validEmail = FormValidation.ValidateEmail(email).isValid;
            const validPassword = FormValidation.ValidatePassword(password).isValid;
            const validConfirmPassword = FormValidation.ValidateConfirmPassword(password, confirmPassword).isValid;

            // If everything is valid, save to DB
            if (validName && validEmail && validPassword && validConfirmPassword) {
                const formData: FormData = {
                    name,
                    email,
                    password
                };

                await handleSignupSubmit(e, formData,
                    () => { console.log('Signup successful') },
                    () => { console.log('Signup failed') }
                );
            }
        } catch (error) {
            console.error("An error occurred during the signup process:", error);
        }
    };

    return (
        <div className='container'>
            <form onSubmit={ValidateOnSubmit} noValidate data-testid="SignUpForm">
                <div className='input-container'>
                    <p className='input-label'>NAME</p>

            <input className='input' id='SignUpFormName' data-testid="SignUpFormName"
              onChange={(event) => {
                  setName(event.target.value);
                  const validationResult = FormValidation.ValidateName(event.target.value);
                  setNameError(validationResult.error);
              }}/>
            {/* if input valid show tick else show ex */}
            {nameError === "" ?
              <div className='input-validation-icon'>
                <i className="fa-solid fa-check"></i>
              </div>
              :
              <div className='input-validation-icon'>
                <i className="fa-regular fa-x"></i>
              </div>
            }

                </div>
                <p className='input-error'>{nameError}</p>

        <div className='input-container'>
            <p className='input-label'>EMAIL</p>
            <input className='input' id='SignUpFormEmail' data-testid="SignUpFormEmail"
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

        <div className='input-container'>
            <p className='input-label'>CONFIRM PASSWORD</p>
            <input className='input' type={passwordConfirmVisible ? "text" : "password"} id='SignUpFormConfirmPassword' data-testid="SignUpFormConfirmPassword"        
            onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  const validationResult = FormValidation.ValidateConfirmPassword(password, event.target.value);
                  setConfirmPasswordError(validationResult.error);
              }}/>
            {/* button for display of confirm password text */}
            <div className='input-validation-icon'>
              <button className='invisible-btn'  onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}><i className={passwordConfirmVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></button>
            </div>
        </div>
        <p className='input-error'>{confirmPasswordError}</p>

        <button className='btn dark-btn form-btn' data-testid="submitButton" type='submit'>SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUpFormSection
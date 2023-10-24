import React, { useState } from 'react'
import * as FormValidation from '../helpers/FormValidation'

const SignUpFormSection = () => {

  //useSTate for visibility of password input
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  //UseStates for error messages in frontend validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); 

  //useStates for setting input values both for validation and populate new User
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');

  //validates form when user clicks submit and sends inputs to hook for DB 
  const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let validName = FormValidation.ValidateName(name).isValid;
    let validEmail = FormValidation.ValidateEmail(email).isValid;
    let validpassword =  FormValidation.ValidatePassword(password).isValid;
    let validConfirmPassword = FormValidation.ValidateConfirmPassword(password,confirmPassword).isValid;
    
    // if everything is valid, save to DB
    if(validName === true && validEmail === true && validpassword === true && validConfirmPassword === true){

      //const formdata : modelName = {
        //   name: name,
        //   email: email,
        //   password: password
      //}

      // handleSignupSubmit(formData)

    }
    // stos from submitting
    else{
      e.preventDefault()
    }
  }
  
  return (
    <div className='container'>
      <form onSubmit={ValidateOnSubmit} noValidate>
        <div className='input-container'>
            <p className='input-label'>NAME</p>

            <input className='input' id='SignUpFormName'
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
            <input className='input' id='SignUpFormemail'
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
            <input className='input' type={passwordVisible ? "text" : "password"} id='SignUpFormpassword'                
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
            <input className='input' type={passwordConfirmVisible ? "text" : "password"} id='SignUpFormConfirmPassword'        
            onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  const validationResult = FormValidation.ValidateConfirmPassword(password, event.target.value);
                  setConfirmPasswordError(validationResult.error);
              }}/>
            {/* button for display of confirm password text */}
            <div className='input-validation-icon'>
              <button className='invisible-btn' onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}><i className={passwordConfirmVisible ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></button>
            </div>
        </div>
        <p className='input-error'>{confirmPasswordError}</p>

        <button className='btn dark-btn form-btn' type='submit'>SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUpFormSection
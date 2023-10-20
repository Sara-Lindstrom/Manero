import React, { useState } from 'react'
import * as FormValidation from '../helpers/FormValidation'

const SignUpFormSection = () => {

  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); 

  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');

  const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let validName = FormValidation.ValidateName(name).isValid;
    let validEmail = FormValidation.ValidateEmail(email).isValid;
    let validpassword =  FormValidation.ValidatePassword(password).isValid;
    let validConfirmPassword = FormValidation.ValidateConfirmPassword(password,confirmPassword).isValid;
    
    

    if(validName === true && validEmail === true && validpassword === true && validConfirmPassword === true){

      //const formdata : modelName = {
        //   name: name,
        //   email: email,
        //   password: password
      //}

      // handleSignupSubmit(formData)

    }
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

            <div className='input-validation-icon'>
                <i className="fa-solid fa-check"></i>
            </div>
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
            <div className='input-validation-icon'>
                <i className="fa-solid fa-check"></i>
            </div>
        </div>
        <p className='input-error'>{emailError}</p>

        <div className='input-container'>
            <p className='input-label'>PASSWORD</p>
            <input className='input' type='password' id='SignUpFormpassword'                
              onChange={(event) => {
                  setPassword(event.target.value);
                  const validationResult = FormValidation.ValidatePassword(event.target.value);
                  setPasswordError(validationResult.error);
              }}/>
            <div className='input-validation-icon'>
            <i className="fa-regular fa-eye-slash"></i>
            </div>
        </div>
        <p className='input-error'>{passwordError}</p>

        <div className='input-container'>
            <p className='input-label'>CONFIRM PASSWORD</p>
            <input className='input' type='password' id='SignUpFormConfirmPassword'        
            onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  const validationResult = FormValidation.ValidateConfirmPassword(password, event.target.value);
                  setConfirmPasswordError(validationResult.error);
              }}/>
            <div className='input-validation-icon'>
            <i className="fa-regular fa-eye-slash"></i>
            </div>
        </div>
        <p className='input-error'>{confirmPasswordError}</p>

        <button className='btn dark-btn form-btn' type='submit'>SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUpFormSection
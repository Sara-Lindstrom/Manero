import React, { useState } from 'react';
import * as FormValidation from '../helpers/FormValidation';
import BreadcrumbSection from '../sections/BreadcrumbSection';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  imgUrl: string;
}

interface EditProfileType {
  user: User;
}


const EditProfile: React.FC<EditProfileType> = ({user}) => {


  //useStates for setting input values both for validation and populate new User
  const [name, setName] = useState (user.name);
  const [email, setEmail] = useState (user.email);
  const [phoneNumber, setPhoneNumber] = useState (user.phone);
  const [location, setLocation] = useState (user.location);
   const [fileSelected, setFileSelected] = useState<string>(user.imgUrl);
 


  //UseStates for error messages in frontend validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(''); 
  const [locationError, setLocationError] = useState(''); 


  //validates form when user clicks submit and sends inputs to hook for DB 
  const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let validName = FormValidation.ValidateName(name).isValid;
    let validEmail = FormValidation.ValidateEmail(email).isValid;
    let validPhoneNumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;
    let validLocation =  FormValidation.ValidateName(location).isValid;
    

    // if everything is valid, save to DB
    if(validName === true && validEmail === true && validPhoneNumber === true && validLocation === true)
      {
        /*
       const formdata : modelName = {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          location: location,
          fileSelected: fileSelected
      }

      handleEditSubmit(formData)
      */
    }
   
    else{
      e.preventDefault()
    }


  }

  function convertFile (files: FileList | null){
    if (files)
    {
      const fileRef = files[0] || ""
      const fileType: string = fileRef.type || ""
      const fileReader = new FileReader()
      fileReader.readAsBinaryString(fileRef)
      fileReader.onload= (ev:any) => {
        setFileSelected(`data:${fileType}; base64, ${btoa(ev.target.result)}`)
      }
    }
  }

  return (

    <>
    <BreadcrumbSection currentPage='Edit Profile' />

    <div className='container editprofile'>
      <div className='heading'>
        <div className="vertical-line"></div>
        <div className='profilePictureSection'>
          <img src={fileSelected} alt='' />
          <div className='icon'>
          <label className="upload-area">
              <input type="file" onChange={(e) => convertFile(e.target.files)}/>
              <span className="upload-button">
                <i className="fa-light fa-camera"></i>
              </span>
            </label>
          </div>
        </div>
      </div>

    <form onSubmit={ValidateOnSubmit} noValidate>
      <div className='input-container'>
          <p className='input-label'>NAME</p>

          <input className='input' id='Editname' value={name}
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
          <input className='input' id='Editemail' value={email}
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
          <p className='input-label'>Phone Number</p>
          <input className='input' id='Editphonenumber'  value={phoneNumber}               
            onChange={(event) => {
                setPhoneNumber(event.target.value);
                const validationResult = FormValidation.ValidatePassword(event.target.value);
                setPhoneNumberError(validationResult.error);
            }}/>
            {/* button for display of password text */}
            {phoneNumberError === "" ?
            <div className='input-validation-icon'>
              <i className="fa-solid fa-check"></i>
            </div>
            :
            <div className='input-validation-icon'>
              <i className="fa-regular fa-x"></i>
            </div>
          }
      </div>
      <p className='input-error'>{phoneNumberError}</p>

      <div className='input-container'>
          <p className='input-label'>Location</p>

          <input className='input' id='Editname' value={location}
            onChange={(event) => {
                setLocation(event.target.value);
                const validationResult = FormValidation.ValidateName(event.target.value);
                setLocationError(validationResult.error);
            }}/>
          {/* if input valid show tick else show ex */}
          {locationError=== "" ?
            <div className='input-validation-icon'>
              <i className="fa-solid fa-check"></i>
            </div>
            :
            <div className='input-validation-icon'>
              <i className="fa-regular fa-x"></i>
            </div>
          }

      </div>
      <p className='input-error'>{locationError}</p>

      <button className='btn dark-btn form-btn' type='submit'>SAVE CHANGES</button>
    </form>
</div>
    </>
  


    
  )
}

export default EditProfile
import React, { useState } from 'react';
import * as EditProfileValidation from '../helpers/EditProfileValidation';

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
    let validName = EditProfileValidation.ValidateText(name).isValid;
    let validEmail = EditProfileValidation.ValidateEmail(email).isValid;
    let validPhoneNumber = EditProfileValidation.ValidatePhoneNumber(phoneNumber).isValid;
    let validLocation =  EditProfileValidation.ValidateText(location).isValid;
    

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
    
    <div className='editProfileSection'>
      <div className='container'>
        <div className="vl"></div>
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

        <div className='fieldSection'>
          <form className='editProfileForm' onSubmit={ValidateOnSubmit} noValidate>
              <div className='text-fields'>
                <div className='text-field'>
                  <label> NAME </label>
                    <input className='input' id='EditName' value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        const validationResult = EditProfileValidation.ValidateText(event.target.value);
                        setNameError(validationResult.error);

                    }}/> 
                    <p className='input-error'>{nameError}</p>            
                </div>
                <div className='text-field'>
                  <label> Email </label>
                    <input className='input' id='EditEmail' value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        const validationResult = EditProfileValidation.ValidateEmail(event.target.value);
                        setEmailError(validationResult.error);

                    }}/> 
                    <p className='input-error'>{emailError}</p>            
                </div>
                <div className='text-field'>
                  <label> Phone Number </label>
                    <input className='input' id='EditPhone' value={phoneNumber}
                      onChange={(event) => {
                        setPhoneNumber(event.target.value);
                        const validationResult = EditProfileValidation.ValidatePhoneNumber(event.target.value);
                        setPhoneNumberError(validationResult.error);

                    }}/> 
                    <p className='input-error'>{phoneNumberError}</p>            
                </div>
                <div className='text-field'>
                  <label> Location </label>
                    <input className='input' id='EditLocation' value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                        const validationResult = EditProfileValidation.ValidateText(event.target.value);
                        setLocationError(validationResult.error);

                    }}/> 
                    <p className='input-error'>{locationError}</p>            
                </div>
                
              </div>
                
              <button className='dark-btn' type='submit' /*onClick={handleSaveClick}*/>SAVE CHANGES</button>
            </form>
        </div>
      </div>
    </div>
    
  )
}

export default EditProfile

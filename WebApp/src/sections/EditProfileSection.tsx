import React, { useState, useEffect } from 'react';
import * as FormValidation from '../helpers/FormValidation';
import { NavigateFunction, useLocation } from 'react-router-dom';
import axios from 'axios';
import { handleEditSubmit, FormDataEditProfile, checkEmailExists } from '../helpers/FormHandlers';

type EditProfileProps = {
    navigate: NavigateFunction
}

const EditProfileSection: React.FC<EditProfileProps> = ({ navigate }: EditProfileProps) => {

    const userlocation = useLocation();
    const { email: loggedInUserEmail } = userlocation.state || {};

    //useStates for setting input values both for validation and populate new User
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [fileSelected, setFileSelected] = useState<string>("https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg");

    //UseStates for error messages in frontend validation
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [locationError, setLocationError] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);

    const fetchUserInformation = async (email: string) => {
        try {
            const response = await axios.get(`https://localhost:7055/api/User?email=${email}`);
            if (response.status === 200) {
                const userData = response.data; // Assuming the response contains user data
                return userData;
            }
        } catch (error) {
            console.error("An error occurred while fetching user information:", error);
            return null;
        }
    };
    
    function convertFile(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            const fileReader = new FileReader()
            fileReader.readAsBinaryString(fileRef)
            fileReader.onload = (ev: any) => {
                setFileSelected(`data:${fileType}; base64, ${btoa(ev.target.result)}`)
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validName = FormValidation.ValidateName(name).isValid;
        const validEmail = FormValidation.ValidateEmail(email).isValid;
        const validLocation = FormValidation.ValidateName(location).isValid;
        let validPhoneNumber = true; // Assume it's valid by default

        if (phoneNumber.trim() !== '') {
            validPhoneNumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;
        }

        if (validName && validEmail && validPhoneNumber) {
            const formDataEditProfile: FormDataEditProfile = {
                email,
                name,
                phoneNumber,
                location,
            };

            checkEmailExists(email).then((emailExists) => {
                if (emailExists) {
                    handleEditSubmit(e, formDataEditProfile, navigate, () => {
                        console.log('Profile updated successfully');
                    }, () => {
                        console.log('Profile update failed');
                    });
                } else {
                    setEmailError('Email does not exist.');
                }
            });
        }
    };



  return (
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

          <form onSubmit={handleSubmit} noValidate>
            <div className='input-container'>
                <p className='input-label'>NAME</p>
                <input className='input' id='Editname' value={name} aria-label='NEW NAME'
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
                <input className='input' id='Editemail' value={email} placeholder='Please enter your email' aria-label='NEW EMAIL'
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
                <input className='input' id='Editphonenumber'  value={phoneNumber}   aria-label='NEW PHONENUMBER'          
                    onChange={(event) => {
                        // Set the phone number without validation
                        setPhoneNumber(event.target.value);
                    }}
                />
                {/* Add validation icon based on validPhoneNumber */}
                {phoneNumber.trim() === '' ? (
                    <div className='input-validation-icon'>
                        <i className="fa-solid fa-check"></i>
                    </div>
                ) : validPhoneNumber ? (
                    <div className='input-validation-icon'>
                        <i className="fa-solid fa-check"></i>
                    </div>
                ) : (
                    <div className='input-validation-icon'>
                        <i className="fa-regular fa-x"></i>
                    </div>
                )
                }
            </div>
            {phoneNumber.trim() === '' ? null : <p className='input-error'>{phoneNumberError}</p>}

            <div className='input-container'>
                <p className='input-label'>Location</p>
                <input className='input' id='Editname' value={location} placeholder='Field cannot be changed.' aria-label='LOCATION' readOnly />
                    {/*onChange={(event) => {*/}
                    {/*setLocation(event.target.value);*/}
                    {/*const validationResult = FormValidation.ValidateName(event.target.value);*/}
                    {/*setLocationError(validationResult.error);*/}
                    {/*  }}*/}
                  
                {/* if input valid show tick else show ex */}
                {/*{locationError=== "" ?*/}
                {/*<div className='input-validation-icon'>*/}
                {/*    <i className="fa-solid fa-check"></i>*/}
                {/*</div>*/}
                {/*:*/}
                {/*<div className='input-validation-icon'>*/}
                {/*    <i className="fa-regular fa-x"></i>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
            {/*<p className='input-error'>{locationError}</p>*/}

            <button className='btn dark-btn form-btn' type='submit'>SAVE CHANGES</button>
        </form>
    </div>
  )
}

    export default EditProfileSection
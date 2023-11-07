import React, { useEffect, useState } from 'react';
import * as FormValidation from '../helpers/FormValidation';
import { fetchProfileData, handleUpdateProfile, ProfileData } from '../helpers/FormHandlers';

const EditProfileSection: React.FC = () => {

    //useStates for setting input values both for validation and populate new User
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("Ankeborg");
    const [fileSelected, setFileSelected] = useState<string>("https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg");

    //UseStates for error messages in frontend validation
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [locationError, setLocationError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchProfileData(token).then((data) => {
                if (data) {
                    setName(data.name);
                    setEmail(data.email);
                    setPhoneNumber(data.phoneNumber);
                }
            }).catch((error) => {
                console.error('Error fetching profile data:', error);
            });
        }
    }, []);

    // Validates form when user clicks submit and sends inputs to db
    const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let validName = FormValidation.ValidateName(name).isValid;
        let validEmail = FormValidation.ValidateEmail(email).isValid;
        let validPhoneNumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;
        let validLocation = FormValidation.ValidateName(location).isValid;

        if (validName && validEmail && validPhoneNumber && validLocation) {
            const profileData = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                location: location,
            };

            const token = localStorage.getItem('token');
            if (token) {
                try {
                    await handleUpdateProfile(profileData, token, () => {
                        console.log('Profile updated successfully');
                    });
                } catch (error) {
                    console.error('Profile update failed', error);
                }
            }
        } else {

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

    return (
        <div className='container editprofile'>
            <div className='heading'>
                <div className="vertical-line"></div>
                <div className='profilePictureSection'>
                    <img src={fileSelected} alt='' />
                    <div className='icon'>
                        <label className="upload-area">
                            <input type="file" onChange={(e) => convertFile(e.target.files)} />
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

                    <input className='input' id='Editname' value={name} aria-label='NEW NAME'
                        onChange={(event) => {
                            setName(event.target.value);
                            const validationResult = FormValidation.ValidateName(event.target.value);
                            setNameError(validationResult.error);
                        }} />
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
                    <input className='input' id='Editemail' value={email} aria-label='NEW EMAIL'
                        onChange={(event) => {
                            setEmail(event.target.value);
                            const validationResult = FormValidation.ValidateEmail(event.target.value);
                            setEmailError(validationResult.error);
                        }} />
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
                    <input className='input' id='Editphonenumber' value={phoneNumber} aria-label='NEW PHONENUMBER'
                        onChange={(event) => {
                            setPhoneNumber(event.target.value);
                            const validationResult = FormValidation.ValidatePhoneNumber(event.target.value);
                            setPhoneNumberError(validationResult.error);
                        }} />
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

                    <input className='input' id='Editname' value={location} aria-label='NEW LOCATION'
                        onChange={(event) => {
                            setLocation(event.target.value);
                            const validationResult = FormValidation.ValidateName(event.target.value);
                            setLocationError(validationResult.error);
                        }} />
                    {/* if input valid show tick else show ex */}
                    {locationError === "" ?
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
    )
}

export default EditProfileSection
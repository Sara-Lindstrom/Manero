import React, { useEffect, useState } from 'react';
import * as FormValidation from '../helpers/FormValidation';
import { fetchProfileData, handleUpdateProfile } from '../helpers/FormHandlers';
import { fetchAddressData, AddressData } from '../helpers/AddressHandler';



type AddressComponentProps = {
    addressId: number
    token: string;
    userSignedIn: boolean;
};


const EditProfileSection: React.FC <AddressComponentProps> = ({ addressId, token, userSignedIn }) => {

    //useStates for setting input values both for validation and populate new User
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
    const [fileSelected, setFileSelected] = useState<string>("https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg");

    const [localAddress, setLocalAddress] = useState<AddressData | null>(null);
    const [loading, setLoading] = useState(true);

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
                    // This will not cause a TypeScript error anymore
                    setPhoneNumber(data.phoneNumber || null);
                }
            }).catch((error) => {
                console.error('Error fetching profile data:', error);
            });
        }
        
    }, []);

    
    useEffect(() => {
        const fetchData = async () => {
            if (!userSignedIn) {
                setLoading(false);
                return;
            }
            try {
                const addressData = await fetchAddressData(addressId, token);

                if (addressData) {
                    setLocalAddress(addressData);
                }
            } catch (error) {
                console.error('Error fetching user address:', error);
            }
            setLoading(false);
        };
        fetchData();
    }, [addressId, token, userSignedIn]);

    if (!userSignedIn) {
        return <div>User not signed in. Please sign in to view the address.</div>;
    }

    if (loading) {
        return <div>Loading</div>;
    }

    if (!localAddress) {
        return <div>Address not found.</div>;
    }
    
    

    // Validates form when user clicks submit and sends inputs to db
    const ValidateOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let validName = FormValidation.ValidateName(name).isValid;
        let validEmail = FormValidation.ValidateEmail(email).isValid;
        let validPhoneNumber = FormValidation.ValidatePhoneNumber(phoneNumber).isValid;
        let validLocation = FormValidation.ValidateName(localAddress.streetName).isValid;

        if (validName && validEmail && validPhoneNumber && validLocation) {
            const profileData = {
                name: name,
                email: email,
                phoneNumber: phoneNumber || null,
                location: localAddress.streetName,
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
                    <input className='input' id='Editphonenumber' value={phoneNumber ?? ""} aria-label='NEW PHONENUMBER'
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

                    <input className='input' id='Editname' value={localAddress.streetName} aria-label='NEW LOCATION'
                        onChange={(event) => {
                            const newStreet = event.target.value;
                            const updatedLocalAddress = { ...localAddress, streetName: newStreet };
                            setLocalAddress(updatedLocalAddress);
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

      <button className='btn dark-btn form-btn' data-testid='save-btn' type='submit'>SAVE CHANGES</button>
    </form>
</div>
  )
}

export default EditProfileSection;
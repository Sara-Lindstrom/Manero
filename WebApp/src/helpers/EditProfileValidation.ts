import React from "react";

type ValidationResult = {
    error: string;
    isValid: boolean;
}

// validate texts 
export const ValidateText = (text:string): ValidationResult => {
    let error = '';
    const regExText = /^[a-zA-ZäöåÄÖÅ ]+$/;

    if (text === ''){
        error = "You need to fill this field"
    }
    else if (text.length < 2){
        error ="This feild must be at least 2 characters long"
    }
    else if (!regExText.test(text)){
        error = "This field can only contain letters"
    }

    return {
        error,
        isValid: error === '',
    }
}




// validate email
export const ValidateEmail = (email:string): ValidationResult => {
    let error = '';
    const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (email === ''){
        error = "You need to enter an email adress"
    }
    else if (!regExEmail.test(email)) {
        error = "You need to enter a valid email (eg. exempel@domain.com)"
    }

    return {
        error,
        isValid: error === '',
    }
}


// validate phone number 
export const ValidatePhoneNumber = (text:string): ValidationResult => {
    let error = '';
    const regExText = /^[0-9]+$/;

    if (text === ''){
        error = "You need to fill this field"
    }
    else if (text.length < 8){
        error ="This feild must be at least 8 characters long"
    }
    else if (!regExText.test(text)){
        error = "This field can only contain numbers"
    }

    return {
        error,
        isValid: error === '',
    }
}


/*
const validateFile = (file: File | null) => {
    let error = '';
    if (file) {
      if (!file.type.startsWith('image/')) 
      {
        error = 'Please select an image file';
      } 
      else if (file.size > 1000000) {
        error = 'File size is too large';
      } else {
        setSelectedFile(file);
        error = '';
      }
    }

    return {
        error,
    }
  };
  */
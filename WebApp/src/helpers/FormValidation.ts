import React from 'react'

type ValidationResult = {
    error: string;
    isValid: boolean;
}

// validate name and set errors
export const ValidateName = (name:string): ValidationResult => {
    let error = '';
    const regExName = /^[a-zA-ZäöåÄÖÅ ]+$/;

    if (name === ''){
        error = "You need to enter a name"
    }
    else if (name.length < 2){
        error ="your name must be at least two characters long"
    }
    else if (!regExName.test(name)){
        error = "your name can only contain letters"
    }

    return {
        error,
        isValid: error === '',
    }
}

// validate email and set errors
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


export const ValidatePassword = (password:string): ValidationResult => {
    let error = '';
    const regExLowerCase = /[a-zåäö]+/
    const regExUpperCase = /[A-ZÅÄÖ]+/;
    const regExNumber = /[0-9]+/;
    const regExSpecialCharacter = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;

    if (password === ''){
        error = "You need to enter a password"
    }
    else if (password.length < 8){
        error = "Your Password Need at least eight charracters"
    }
    else if (!regExLowerCase.test(password)){
        error = "Your Password Need at least one lowercase letter"
    }
    else if (!regExUpperCase.test(password)){
        error = "Your Password Need at least one uppercase letter"
    }
    else if (!regExNumber.test(password)){
        error = "Your Password Need at least one number"
    }
    else if (!regExSpecialCharacter.test(password)){
        error = "Your Password Need at least one Special character"
    }

    return {
        error,
        isValid: error === '',
    }
}

export const ValidateConfirmPassword = (password:string, confirmPassword:string): ValidationResult => {
    let error = '';

    if (password === ""){
        error = "You need to enter a password";
    }
    if (password !== confirmPassword){
        error = "The Confirm Password doesn't match your Password";
    }

    return {
        error,
        isValid: error === '',
    }
}

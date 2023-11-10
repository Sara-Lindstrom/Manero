type ValidationResult = {
    error: string;
    isValid: boolean;
}

// validate order number 
export const ValidateOrederNumber = (number:string): ValidationResult => {
    let error = '';
    const regExNumber = /^[0-9]+$/;

    if (number === ''){
        error = "You must enter order number"
    }
    else if (number.length < 5){
        error ="This feild must be at least 5 characters long"
    }
    else if (!regExNumber.test(number)){
        error = "This field can only contain numbers"
    }

    return {
        error,
        isValid: error === '',
    }
}
type ValidationResult = {
    error: string;
    isValid: boolean;
}

// Validate name and set errors
export const ValidateName = (name: string): ValidationResult => {
    let error = '';
    const regExName = /^[a-zA-ZäöåÄÖÅ ]+$/;

    if (name === '') {
        error = "Please enter a name.";
    } else if (name.length < 2) {
        error = "Name must be at least two characters long.";
    } else if (!regExName.test(name)) {
        error = "Name can only contain letters.";
    }

    return {
        error,
        isValid: error === '',
    };
}

// Validate email and set errors
export const ValidateEmail = (email: string): ValidationResult => {
    let error = '';
    const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '') {
        error = "Please enter an email address.";
    } else if (!regExEmail.test(email)) {
        error = "Please enter a valid email (e.g., example@domain.com).";
    }

    return {
        error,
        isValid: error === '',
    };
}

// Validate password and set errors
export const ValidatePassword = (password: string): ValidationResult => {
    let error = '';
    const regExLowerCase = /[a-zåäö]+/;
    const regExUpperCase = /[A-ZÅÄÖ]+/;
    const regExNumber = /[0-9]+/;
    const regExSpecialCharacter = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;

    if (password === '') {
        error = "Please enter a password.";
    } else if (password.length < 8) {
        error = "Password must be at least eight characters long.";
    } else if (!regExLowerCase.test(password)) {
        error = "Password must contain at least one lowercase letter.";
    } else if (!regExUpperCase.test(password)) {
        error = "Password must contain at least one uppercase letter.";
    } else if (!regExNumber.test(password)) {
        error = "Password must contain at least one number.";
    } else if (!regExSpecialCharacter.test(password)) {
        error = "Password must contain at least one special character.";
    }

    return {
        error,
        isValid: error === '',
    };
}

// Validate confirm password and set errors
export const ValidateConfirmPassword = (password: string, confirmPassword: string): ValidationResult => {
    let error = '';

    if (confirmPassword === "") {
        error = "Please enter a password to confirm.";
    } else if (password !== confirmPassword) {
        error = "The passwords do not match.";
    }

    return {
        error,
        isValid: error === '',
    };
}

// Validate phone number and set errors
export const ValidatePhoneNumber = (text: string | null): ValidationResult => {
    let error = '';
    const regExPattern = /^\+\d{2}\s\d{9}$/;

    if (text === null || text === '') {
        error = "Please enter a phone number.";
    } else if (!regExPattern.test(text)) {
        error = "Phone number must be in the format +XX XXXXXXXXX.";
    }

    return {
        error,
        isValid: error === '',
    };
};

// Validate OTP (verification code) and set errors
export const ValidateOTP = (otpArray: string[]): ValidationResult => {
    let error = '';

    // Join the array to get the OTP as a string
    const otp = otpArray.join('');

    // Check if all the fields are containing data
    if (otpArray.includes('')) {
        error = "Please fill in all the fields.";
        // Check if each input is a single digit
    } else if (!otpArray.every(otpDigit => /^\d$/.test(otpDigit))) {
        error = "The verification code can only contain numbers.";
        // Check if verification code is exactly 5 digits long
    } else if (otp.length !== 5) {
        error = "The verification code must be 5 digits long.";
    }

    return {
        error,
        isValid: error === '',
    };
};
// Generates a verification code to be written out in the console for the user (should simulate the SMS)
export const generateVerificationCode = (length: number = 5): string => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10).toString()).join('');
};

// Stores the verification code in local storage
export const storeVerificationCode = (code: string) => {
    localStorage.setItem('verificationCode', code);
};

// Retrieves the verification code from local storage
export const getVerificationCode = (): string | null => {
    return localStorage.getItem('verificationCode');
};
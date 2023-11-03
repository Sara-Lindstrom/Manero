import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

interface FlagComponentProps {
    phoneNumber: string;
    onPhoneNumberChange: (value: string) => void;
}

const FlagComponent: React.FC<FlagComponentProps> = ({ phoneNumber, onPhoneNumberChange }) => {

    const convertToIsoAlpha2 = (code: string) => {
        const countryCodeMap: { [key: string]: string } = {
            '1': 'us', // United States
            '44': 'gb', // United Kingdom
            '46': 'se', // Sweden
            '33': 'fr', // France
            '49': 'de', // Germany
            // Add more mappings as needed
        };

        return countryCodeMap[code] || 'us'; // Default to 'us' if the code is not found
    };

    const extractCountryCode = (phone: string) => {
        const match = phone.match(/^\+\s*(\d{1,3})/);
        const numericCode = match ? match[1] : 'us'; // Default to 'us' or any other default
        return convertToIsoAlpha2(numericCode);
    };
    const countryCode = extractCountryCode(phoneNumber);

    return (
        <div className="flag-phone-number-input">
            <div className="flag-container">
                {/* Use the country code to determine the flag with the 'flag-icons' package */}
                <span className={`fi fi-${countryCode.toLowerCase()}`}></span>
            </div>
            <div className="divider"></div>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => onPhoneNumberChange(e.target.value)}
                placeholder="Enter your phone number"
            />
        </div>
    );
};

export default FlagComponent;

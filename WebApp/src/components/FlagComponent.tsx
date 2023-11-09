import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Component to render out the right flag image based on country code in the phone number
interface FlagComponentProps {
    phoneNumber: string;
    onPhoneNumberChange: (value: string) => void;
}

const FlagComponent: React.FC<FlagComponentProps> = ({ phoneNumber, onPhoneNumberChange }) => {

    // Converts the numeric country code
    const convertToIsoAlpha2 = (code: string) => {
        const countryCodeMap: { [key: string]: string } = {

            '1': 'us', // United States
            '44': 'gb', // United Kingdom
            '46': 'se', // Sweden
            '33': 'fr', // France
            '49': 'de', // Germany
        };

        return countryCodeMap[code] || 'us'; // Default to 'us' if no other match is found
    };

    // Extracts the country code from the phone number string
    const extractCountryCode = (phone: string) => {
        const match = phone.match(/^\+\s*(\d{1,3})/);
        const numericCode = match ? match[1] : 'us'; // Default to 'us' if no other match is found
        return convertToIsoAlpha2(numericCode);
    };

    // Get the country code from the phone number
    const countryCode = extractCountryCode(phoneNumber);

    return (
        <div className="flag-phone-number-input">
            <div className="flag-container">
                {/* Display the flag based on country code */}
                <span className={`fi fi-${countryCode.toLowerCase()}`}></span>
            </div>
            <div className="divider"></div>
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => onPhoneNumberChange(e.target.value)}
                placeholder="Enter your phone number"
                data-testid="phoneNumberInput"
            />
        </div>
    );
};

export default FlagComponent;
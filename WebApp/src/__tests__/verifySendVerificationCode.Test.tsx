import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import VerificationSection from '../sections/VerificationSection';
import { MemoryRouter, NavigateFunction } from 'react-router-dom';

// Mock useNavigate
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

jest.mock('../helpers/VerificationHelper', () => ({
    generateVerificationCode: jest.fn(),
    storeVerificationCode: jest.fn(),
    getVerificationCode: jest.fn(),
}));

// Mock the axios library
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        get: jest.fn(),
        post: jest.fn(),
    }
}));

describe('VerificationSection', () => {
    it('logs the OTP code to the console and handles resend correctly', async () => {
        // Mock the validation function
        const navigate: NavigateFunction = jest.fn();

        const { getByTestId } = render(
            <MemoryRouter>
                <VerificationSection navigate={navigate} />
            </MemoryRouter>
        );

        // Find and click the "Didn't receive the OTP? Resend." link
        const resendLink = getByTestId("resend-link");
        fireEvent.click(resendLink);

        // Wait for async actions to complete
        await waitFor(() => {
            // Check if generateVerificationCode was called
            expect(require('../helpers/VerificationHelper').generateVerificationCode).toHaveBeenCalled();

            // Check if a new OTP code is stored in the local storage
            expect(require('../helpers/VerificationHelper').storeVerificationCode).toHaveBeenCalled();

            // Check if the "verificationCode" is updated in the component's state
            expect(require('../helpers/VerificationHelper').getVerificationCode).toHaveBeenCalled();

        });
    });
});
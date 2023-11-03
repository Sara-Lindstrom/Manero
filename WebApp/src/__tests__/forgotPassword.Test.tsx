import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import ForgotPasswordSection from '../sections/ForgotPasswordSection';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/FormHandlers', () => ({
    checkEmailExists: jest.fn(),
}));

describe('ForgotPasswordSection', () => {

    // Test case 1: Simulate a submission where the email does not exist in the database
    test('If email does not exist the form submission is prevented', async () => {
        const { checkEmailExists } = require('../helpers/FormHandlers');
        checkEmailExists.mockResolvedValue(false); // Simulate if email is not existing in db

        await act(async () => {
            render(
                <MemoryRouter>
                    <ForgotPasswordSection />
                </MemoryRouter>
            );
        });

        // Find the email input field and simulate a user typing a non-existent email
        const emailInput = screen.getByLabelText('EMAIL');
        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'nonexistent@example.com' } });
        });

        // Find the 'SEND' button and simulate a click event
        const sendButton = screen.getByText('SEND');
        await act(async () => {
            fireEvent.click(sendButton);
        });

        // Wait for and assert that the error message 'Email does not exist' is displayed
        await waitFor(() => {
            expect(screen.getByText('Email does not exist')).toBeInTheDocument();
        });
    });

    // Test case 2: Simulate a submission where the email exists in the database
    test('If email does exist the form submission is sent', async () => {
        const { checkEmailExists } = require('../helpers/FormHandlers');
        checkEmailExists.mockResolvedValue(true); // Simulate if email exists in db

        await act(async () => {
            render(
                <MemoryRouter>
                    <ForgotPasswordSection />
                </MemoryRouter>
            );
        });

        // Find the email input field and simulate a user typing an existent email
        const emailInput = screen.getByLabelText('EMAIL');
        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'existent@example.com' } });
        });

        // Find the 'SEND' button and simulate a click event
        const sendButton = screen.getByText('SEND');
        await act(async () => {
            fireEvent.click(sendButton);
        });

        // Assert that preventDefault was not called
        const clickEvent = new MouseEvent('click');
        const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
        fireEvent(sendButton, clickEvent);
        expect(preventDefaultSpy).toHaveBeenCalledTimes(0);
    });
});
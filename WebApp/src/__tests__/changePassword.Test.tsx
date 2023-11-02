import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChangePasswordSection from '../sections/ChangePasswordSection';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/FormHandlers', () => ({
    handleResetPassword: jest.fn(),
}));

describe('ChangePasswordSection', () => {

    // Test case 1: Simulate a password reset where the reset is successful
    test('Successful password reset', async () => {
        const { handleResetPassword } = require('../helpers/FormHandlers');
        handleResetPassword.mockResolvedValue(true); // Simulate successful password reset

        await act(async () => {
            render(
                <MemoryRouter>
                    <ChangePasswordSection />
                </MemoryRouter>
            );
        });

        // Simulate user entering a new password and confirming it
        const newPasswordInput = screen.getByLabelText('NEW PASSWORD');
        const confirmPasswordInput = screen.getByLabelText('CONFIRM PASSWORD');
        await act(async () => {
            fireEvent.change(newPasswordInput, { target: { value: 'newPassword123' } });
            fireEvent.change(confirmPasswordInput, { target: { value: 'newPassword123' } });
        });

        // Find the 'CHANGE PASSWORD' button and simulate a click event
        const changePasswordButton = screen.getByText('CHANGE PASSWORD');
        await act(async () => {
            fireEvent.click(changePasswordButton);
        });

        // Assert that the user is redirected to the password reset confirmation page
    });

    // Test case 2: Simulate a password reset where the reset fails
    test('Failed password reset', async () => {
        const { handleResetPassword } = require('../helpers/FormHandlers');
        handleResetPassword.mockResolvedValue(false); // Simulate failed password reset

        await act(async () => {
            render(
                <MemoryRouter>
                    <ChangePasswordSection />
                </MemoryRouter>
            );
        });

        // Simulate user entering a new password and confirming it
        // Ensure the password meets all validation criteria
        const validPassword = 'newPassword123!';
        const newPasswordInput = screen.getByLabelText('NEW PASSWORD');
        const confirmPasswordInput = screen.getByLabelText('CONFIRM PASSWORD');
        await act(async () => {
            fireEvent.change(newPasswordInput, { target: { value: validPassword } });
            fireEvent.change(confirmPasswordInput, { target: { value: validPassword } });
        });

        // Find the 'CHANGE PASSWORD' button and simulate a click event
        const changePasswordButton = screen.getByText('CHANGE PASSWORD');
        await act(async () => {
            fireEvent.click(changePasswordButton);
        });

        // Assert that an error message is displayed indicating the password reset failed
        await waitFor(() => {
            expect(screen.getByText(/Failed to reset password/i)).toBeInTheDocument();
        });
    });
});
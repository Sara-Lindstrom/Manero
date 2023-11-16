import React, { HtmlHTMLAttributes } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditProfileSection from '../sections/EditProfileSection';


describe('EditProfileSection', () => {
    test('renders EditProfileSection component', () => {
        render(<BrowserRouter><EditProfileSection addressId={0} token={''} userSignedIn={false}/></BrowserRouter>);
        
        // Kontrollera att texter "Name, Email, Phone Number and location" visas
        const element1 = screen.getByText(/NAME/i);
        const element2 = screen.getByText(/Email/i);
        const element3 = screen.getByText(/Phone Number/i);
        const element4 = screen.getByText(/Location/i);          
        expect(element1).toBeTruthy();
        expect(element2).toBeTruthy();
        expect(element3).toBeTruthy();
        expect(element4).toBeTruthy();
    });

    test('User enters valid data', () => {
        render(<BrowserRouter><EditProfileSection addressId={0} token={''} userSignedIn={false} /></BrowserRouter>);
        
        // Simulate user entering a valid data
         const nameInput = screen.getByLabelText('NEW NAME');
         fireEvent.change(nameInput, { target: { value: 'name' } });

         const emailInput = screen.getByLabelText('NEW EMAIL');
         fireEvent.change(emailInput, { target: { value: 'email@domain.com' } });

         const phoneNumberInput = screen.getByLabelText('NEW PHONENUMBER');
         fireEvent.change(emailInput, { target: { value: '0729801231' } });

         const locationInput = screen.getByLabelText('NEW LOCATION');
         fireEvent.change(emailInput, { target: { value: 'city' } });

    });

    test('Button functionality navigates to profile page', () => {
        render(<BrowserRouter><EditProfileSection addressId={0} token={''} userSignedIn={false} /></BrowserRouter>);
        
        // Hitta "Save Chanes"-knappen och simulera ett klick
        const saveButton = screen.getByTestId('save-btn');
        fireEvent.click(saveButton);


        // Expectation: The user should be redirected to the profile page
        waitFor(() => {
            expect(window.location.pathname).toBe('/viewprofile');
        })
    });
})
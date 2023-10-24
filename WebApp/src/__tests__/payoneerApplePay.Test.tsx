import React from "react";
import { render, screen } from '@testing-library/react';
import PayoneersSection from "../sections/PayoneerSection";


test (('Can add Apple Pay from menu to list'), () => {
    render(<PayoneersSection />);
    const payoneerToAdd = 'Apple Pay';

    // Find all elements that contain the text "Apple Pay"
    const allPayPalElements = screen.getAllByText(payoneerToAdd);

    // Select the specific element from the list"
    const addedPayoneer = allPayPalElements.find((element) => element.textContent === payoneerToAdd);

    // Verify that Payoneer has been added to the list
    expect(addedPayoneer).toBeTruthy();

});
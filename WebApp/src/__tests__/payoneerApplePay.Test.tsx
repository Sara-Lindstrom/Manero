import React from "react";
import { render, screen } from '@testing-library/react';
import PayoneersSection from "../sections/PayoneerSection";


test (('Can add Apple Pay from menu to list'), () => {
    render(<PayoneersSection />);
    const payoneerToAdd = 'Apple Pay';

    // Hitta alla element som innehåller texten "Apple Pay"
    const allPayPalElements = screen.getAllByText(payoneerToAdd);

    // Välj det specifika elementet från listan
    const addedPayoneer = allPayPalElements.find((element) => element.textContent === payoneerToAdd);

    // Verifiera att Payoneer har lagts till i listan
    expect(addedPayoneer).toBeTruthy();

});
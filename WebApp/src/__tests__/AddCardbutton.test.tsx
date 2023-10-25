import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddCardSection from '../sections/AddCardSection';

test('tests if the button resets the form when pressed', () => {
    render(<AddCardSection />);


    const cardHolderInput = screen.getByLabelText('NAME') as HTMLInputElement;
    const cardNumberInput = screen.getByLabelText('CARD NUMBER') as HTMLInputElement;
    const expiryDateInput = screen.getByLabelText('MM/YY') as HTMLInputElement;
    const cvvInput = screen.getByLabelText('CVV') as HTMLInputElement;


    fireEvent.change(cardHolderInput, { target: { value: 'John Doe' } });
    fireEvent.change(cardNumberInput, { target: { value: '1234123412341234' } });
    fireEvent.change(expiryDateInput, { target: { value: '12/24' } });
    fireEvent.change(cvvInput, { target: { value: '123' } });

    const resetButton = screen.getByText('SAVE CARD');

    fireEvent.click(resetButton)


    expect(cardHolderInput.value).toBe('');
    expect(cardNumberInput.value).toBe('');
    expect(expiryDateInput.value).toBe('');
    expect(cvvInput.value).toBe('');
});
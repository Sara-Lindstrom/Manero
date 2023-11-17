import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomepageShowcaseOffer from '../sections/HomepageShowcaseOffer';

describe('HomepageShowcaseOffer', () => {
  it('visar knappen "SHOP NOW" och reagerar på klick', () => {
    render(<HomepageShowcaseOffer />);
    
    const button = screen.getByText('SHOP NOW');
    
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    
  });
});
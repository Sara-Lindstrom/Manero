import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomepageShoecaseOffer from '../sections/HomepageShoecaseOffer';

describe('HomepageShoecaseOffer', () => {
  it('visar knappen "SHOP NOW" och reagerar på klick', () => {
    render(<HomepageShoecaseOffer />);
    
    const button = screen.getByText('SHOP NOW');
    
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    
  });
});
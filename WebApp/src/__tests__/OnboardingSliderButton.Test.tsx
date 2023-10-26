import { render, fireEvent, screen } from '@testing-library/react';
import MyComponent from '../views/OnboardingView'; 

test('Clicking each button changes the displayed slide', () => {
    render(<MyComponent />);
  
    // Initially, the first slide should be displayed
    const firstSlide = screen.getByText('Welcome To Manero!');
    expect(firstSlide).toBeDefined();
  
    // Find the buttons for the slides
    const slideButtons = screen.getAllByRole('button', { name: /Slide/ });
  
    // Click the second button
    fireEvent.click(slideButtons[1]);
  
    // Now, the second slide should be displayed
    const secondSlide = screen.getByText('Easy Track Order!');
    expect(secondSlide).toBeDefined();
  
    // Click the third button
    fireEvent.click(slideButtons[2]);
  
    // Now, the third slide should be displayed
    const thirdSlide = screen.getByText('ADoor To Door Delivery!');
    expect(thirdSlide).toBeDefined();
  });
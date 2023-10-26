import { render, fireEvent, screen } from '@testing-library/react';
import OnboardingView from '../views/OnboardingView'; // Import your component

test('should navigate to /signup when link is clicked', () => {
    const { getByText } = render(<OnboardingView />); // Render your component

    const link = getByText('GET STARTED'); // Find the link by its text

    fireEvent.click(link); // Simulate a click on the link

    const linkHref = link.getAttribute('href');

    expect(linkHref).toBe('/signup'); // Check if the link's href attribute matches the expected value
});
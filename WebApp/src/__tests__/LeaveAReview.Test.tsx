import { render, fireEvent } from '@testing-library/react';
import StarRating from '../components/StarRating';

test('handles rating change correctly', () => {
  let rating = 0; // variabel for rating

  const onRatingChange = (newRating: number) => {
    rating = newRating; // update when onRatingChange is called
  };

  const { container } = render(<StarRating onRatingChange={onRatingChange} />);
  const stars = container.querySelectorAll('.star');

  // third star is index 2
  fireEvent.click(stars[2]);

  // StarRating-component is checking if three stars is filled with the css class filled
  const filledStars = container.querySelectorAll('.filled-star');
  expect(filledStars).toHaveLength(3);

  // controlling if the number is correct
  expect(rating).toBe(3);

});

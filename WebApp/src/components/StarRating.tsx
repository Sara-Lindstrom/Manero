import React, { useState } from 'react';

interface StarRatingProps {
  onRatingChange: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span key={star} className={star <= rating ? 'filled-star' : 'star'} onClick={() => handleStarClick(star)}>★</span>
      ))}
    </div>
  )
}

export default StarRating

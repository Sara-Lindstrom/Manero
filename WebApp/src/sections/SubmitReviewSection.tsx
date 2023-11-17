import React, { useState } from 'react'
import chatBubbles from '../Images/chatBubbles.svg'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { submitReview } from '../helpers/ReviewHandler';
interface SubmitReviewSectionProps {
    productId: string;
}

const SubmitReviewSection: React.FC<SubmitReviewSectionProps> = ({ productId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
        setErrorMessage('');
    };

    // Add and save a review on the productID
    const handleSubmit = async () => {
        if (comment.length < 2) {
            setErrorMessage('Comment must be at least 2 characters long.');
        } else {
            try {
                await submitReview({ comment, rating, productId },
                    () => navigate('/home'),
                    () => setErrorMessage('There was a problem submitting your review.')
                );
            } catch (error) {
                console.error("Error submitting review:", error);
                setErrorMessage('There was a problem submitting your review.');
            }
        }
    };

    return (
        <section className='leaveAReview'>
            <div className='container'>
                <img src={chatBubbles} alt='chat bubbles' />
                <div className='rating'>
                    <h1>Please rate the quality of service for the order!</h1>
                    <StarRating onRatingChange={handleRatingChange} />
                </div>
                <div className='comment'>
                    <p>Your comments and suggestions help us improve the service quality!</p>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <p className='inputBorder'>COMMENT</p>
                    <textarea rows={5} value={comment} onChange={handleCommentChange} placeholder='Enter your comment'></textarea>
                </div>
                <button onClick={handleSubmit} className='btn dark-btn'>SUBMIT</button>
            </div>
        </section>
    );
}

export default SubmitReviewSection;
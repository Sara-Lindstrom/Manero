﻿import React, { useState } from 'react'
import chatBubbles from '../Images/chatBubbles.svg'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { ReviewData, submitReview } from '../helpers/TestReviewHelper';

// implement productId for connecting the review to the product
const LeaveAReviewSection: React.FC = () => {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
        // resets the error message when the user starts typing again
        setErrorMessage('');
    };

    // Works fine to post comments, but make sure the ProductID is correct (hardcoded for now)
    const handleSubmit = async () => {
        if (comment.length < 2) {
            setErrorMessage('Comment must be at least 2 characters long.');
        } else {
            const productId = "93F010C1-EB79-44D4-8EA8-9A021D8BAD61"; // Change this to a new productID

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
                <img src={chatBubbles} alt='chat bubbbles' />
                <p className='pipe'><i className="fa-light fa-pipe"></i></p>
                <div className='rating'>
                    <h1>Please rate the quality of service for the order!</h1>
                    <StarRating onRatingChange={handleRatingChange} />
                </div>
                <div className='comment'>
                    <p>Your comments and suggestions help us improve the service quality better!</p>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <p className='inputBorder'>COMMENT</p>
                    <textarea rows={5} value={comment} onChange={handleCommentChange} placeholder='Enter your comment'></textarea>
                </div>
                <button onClick={handleSubmit} className='btn dark-btn'>SUBMIT</button>
            </div>
        </section>
    )
}

export default LeaveAReviewSection;
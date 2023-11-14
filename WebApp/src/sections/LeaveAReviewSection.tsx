import React, { useState } from 'react'
import chatBubbles from '../Images/chatBubbles.svg'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { ReviewData, submitReview } from '../helpers/ReviewHandler';

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
            const productId = "3e608840-6a94-476e-a147-50e3da35f379"; // Change this to a new productID

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

    //const handleSubmit = () => {
    //    if (comment.length < 2) {
    //        // validation for atleast 2 characters
    //        setErrorMessage('Comment must be at least 2 characters long.');
    //    } else {
    //        // implement method for database

    //        console.log('Rating:', rating);
    //        console.log('Comment:', comment);
    //        navigate('/reviews');
    //    }
    //};

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
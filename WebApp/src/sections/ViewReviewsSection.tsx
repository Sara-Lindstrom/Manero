import React, { useState } from 'react'
import chatBubbles from '../Images/chatBubbles.svg'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { submitReview } from '../helpers/ReviewHandler';

interface ViewReviewSectionProps {
    productId: string;
}

// implement productId for connecting the review to the product
const ViewReviewsSection: React.FC<ViewReviewSectionProps> = ({ productId }) => {

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
            </div>
        </section>
    )
}

export default ViewReviewsSection;
import React, { useState, useEffect } from 'react'
import chatBubbles from '../Images/chatBubbles.svg'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { createReview, getUserInfo } from '../helpers/ReviewHandler';


const LeaveAReviewSection: React.FC<{ productId: string }> = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  // handling the rating
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  // handling the comment
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    // resets the error message when the user starts typing again
    setErrorMessage('');
  };

  // gets the user id
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setUserId(userInfo.userId);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);
  

  // submits the review
  const handleSubmit = async () => {
    try {
      // uses the methos getUserInfo
      const userInfo = await getUserInfo();

      // checks if its not null
      if (!userInfo || !userInfo.userId) {
        console.error('User information or user ID is missing.');
        return;
      }

      // validation for at least 2 characters for comment field
      if (comment.length < 2) {
        setErrorMessage('Comment must be at least 2 characters long.');
      } else {
        // sets the data to reviewData
        const reviewData = {
          ProductID: productId,
          Rating: rating,
          Comment: comment,
          UserID: userId,
        };

        // tries to do the createReview with token
        try {
          const result = await createReview(reviewData, userInfo.token);

          // if valid get redirect to /reviews
          console.log('Review created successfully:', result);
          navigate(`/reviews/${productId}`);
          // not valid = error
        } catch (error) {
          console.error('An error occurred while creating a review:', error);
          setErrorMessage('An error occurred while creating a review.');
        }
      }
      // else = error
    } catch (error) {
      console.error('Error handling review submission:', error);
    }
  };
  


  return (
    <section className='leaveAReview'>
        <div className='container'>
            <img src={chatBubbles} alt='chat bubbbles'/>
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

export default LeaveAReviewSection

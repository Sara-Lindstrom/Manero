import React from 'react';
interface ReviewData {
    username: string;
    comment: string;
    rating: number;
    reviewDate: string;
}
interface ReviewComponentProps {
    viewReviewData: ReviewData;
}

const ViewReviewsComponent: React.FC<ReviewComponentProps> = ({ viewReviewData }) => {
    const { username, comment, rating, reviewDate } = viewReviewData;

    const formatReviewDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    const starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className='review'>
            <img className='profileImg' src='' alt='Profile' />
            <div className='info'>
                <h1 className='userName'>{username}</h1>
                <div className='stars'>
                    {starsArray.map((star) => (
                        <span key={star} className={star <= rating ? 'filled' : 'empty'}>&#9733;</span>
                    ))}
                </div>
                <p className='date'>{formatReviewDate(reviewDate)}</p>
                <p className='comment'>{comment}</p>
            </div>
        </div>
    );
}

export default ViewReviewsComponent;
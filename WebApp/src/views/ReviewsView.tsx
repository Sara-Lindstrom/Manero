import React, { useEffect, useState } from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import Review from '../components/Review';
import { useParams } from 'react-router-dom';
import { fetchProductReviews } from '../helpers/ReviewHandler';


interface ReviewType {
  reviewID: string;
  username: string;
  comment: string;
  rating: number;
  reviewDate: string;
}

const ReviewsView = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const handleNavigateBack = () => {
      window.history.back();
    };

    useEffect(() => {
      const fetchReviews = async () => {
        if (productId) {
          try {
            const data = await fetchProductReviews(productId);
            console.log('API response:', data);
            if (data) {
              setReviews(data);
            }
          } catch (error) {
            console.error('Error fetching reviews:', error);
          }
        }
      };      
  
      fetchReviews();
  }, [productId]);
  

  return (
    <>
    <BreadcrumbSection currentPage='Reviews' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
    <div className='container'>
    {reviews.map((review) => (
          <Review key={review.reviewID} reviewData={review} />
        ))}
    </div>
   
    </>
  )
}

export default ReviewsView
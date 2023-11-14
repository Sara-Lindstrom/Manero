import React, { useState, useEffect } from 'react';
import BreadcrumbSection from '../sections/BreadcrumbSection'
import LeaveAReviewSection from '../sections/LeaveAReviewSection';
import { useNavigate } from 'react-router-dom';

const LeaveAReviewView: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //If user is not signed in they will redirect to login view
  useEffect(() => {
      const token = localStorage.getItem('token');

      if (token) {
          setIsAuthenticated(true);
      } else {
          setIsAuthenticated(false);
          navigate('/signin');
      }
  }, [navigate]);

    const handleNavigateBack = () => {
        window.history.back();
    };


    const productId = "dee1ac6e-3d34-46fb-b64a-c6c0fa1dde24";

  return (
    <>
        <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
        <LeaveAReviewSection productId={productId} />
    </>
  )
}

export default LeaveAReviewView;
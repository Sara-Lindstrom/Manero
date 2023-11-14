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


    const productId = "3e608840-6a94-476e-a147-50e3da35f379";

  return (
    <>
        <BreadcrumbSection currentPage='Leave a review' showBackButton={true} onNavigateBack={handleNavigateBack} showCurrentPage={true} />
        <LeaveAReviewSection productId={productId} />
    </>
  )
}

export default LeaveAReviewView;
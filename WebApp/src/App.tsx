import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Style.min.css';
import AddCardView from './views/AddCardView';
import BestSellersView from './views/BestSellersView';
import CategoryView from './views/CategoryView';
import ChangePasswordView from './views/ChangePasswordView';
import ConfirmedPhoneVerificationView from './views/ConfirmedPhoneVerificationView';
import EditProfileView from './views/EditProfileView';
import ForgotPasswordView from './views/ForgotPasswordView';
import HomeView from './views/HomeView';
import LeaveAReviewView from './views/LeaveAReviewView';
import MyAddresses from './views/MyAddresses';
import OnboardingView from './views/OnboardingView';
import PaymentMethodView from './views/PaymentMethodView';
import ResetPasswordConfirmedView from './views/ResetPasswordConfirmedView';
import SignInView from './views/SignInView';
import SignUpView from './views/SignUpView';
import VerificationView from './views/VerificationView';
import VerifyPhoneNumberView from './views/VerifyPhoneNumberView';
import ViewProfile from './views/ViewProfileView';
import AddNewAddressView from './views/AddNewAddressView';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

  
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<OnboardingView />} /> {/*Changed start to be /welcome when starting up the app*/}
            <Route path='/accountconfirmed' element={<ConfirmedPhoneVerificationView/> } />
            <Route path='/activate' element={<VerificationView />} />
            <Route path='/addCardView' element={<AddCardView />} />
            <Route path='/bestSellersView' element={<BestSellersView />} />
            <Route path='/category' element={<CategoryView />} />
            <Route path='/changePassword' element={<ChangePasswordView />} />
            <Route path='/editProfile' element={<EditProfileView /> }/>
            <Route path='/forgotPassword' element={<ForgotPasswordView />} />
            <Route path='/home' element={<HomeView isAuthenticated={isAuthenticated} />} />
            <Route path='/leaveAReview' element={<LeaveAReviewView />} />
            <Route path='/myAddresses' element={<MyAddresses />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
            <Route path='/signin' element={<SignInView />} />
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/verifyPhone' element={<VerifyPhoneNumberView />} />
            <Route path='/viewProfile' element={<ViewProfile />} />
            <Route path='/addNewAddress' element={<AddNewAddressView />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;
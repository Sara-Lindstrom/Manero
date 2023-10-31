import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Style.min.css';
import AddCardView from './views/AddCardView';
import PaymentMethodView from './views/PaymentMethodView';
import EditProfile from './views/EditProfileView';
import ViewProfile from './views/ViewProfileView';
import OnboardingView from './views/OnboardingView';
import SignUpView from './views/SignUpView';
import ForgotPasswordView from './views/ForgotPasswordView';
import ResetPasswordConfirmedView from './views/ResetPasswordConfirmedView';
import ChangePasswordView from './views/ChangePasswordView';
import SignInView from './views/SignInView';
import EditProfileView from './views/EditProfileView';
import LeaveAReviewView from './views/LeaveAReviewView';

function App() {

  
  
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboardingView />} /> {/*Changed start to be /welcome when starting up the app*/}
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/signin' element={<SignInView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
            <Route path='/forgotPassword' element={<ForgotPasswordView />} />
            <Route path='/changePassword' element={<ChangePasswordView />} />
            <Route path='/AddCardView' element={<AddCardView />} />
            <Route path='/EditProfile' element={<EditProfileView /> }/>
            <Route path='/viewProfile' element={<ViewProfile />} />
            <Route path='/leaveAReview' element={<LeaveAReviewView />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;
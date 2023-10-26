import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import AddCardView from './views/AddCardView';
import PaymentMethodView from './views/PaymentMethodView';
import OnboardingView from './views/OnboardingView';
import SignUpView from './views/SignUpView';
import ForgotPasswordView from './views/ForgotPasswordView';
import ResetPasswordConfirmedView from './views/ResetPasswordConfirmedView';
import ChangePasswordView from './views/ChangePasswordView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<OnboardingView />} />
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
            <Route path='/forgotPassword' element={<ForgotPasswordView />} />
            <Route path='/changePassword' element={<ChangePasswordView />} />
            <Route path='/AddCardView' element={<AddCardView />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;


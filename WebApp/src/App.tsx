import './css/Style.min.css';
import PaymentMethodView from './views/PaymentMethodView';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpView from './views/SignUpView';
import ForgotPasswordView from './views/ForgotPasswordView';
import ResetPasswordConfirmedView from './views/ResetPasswordConfirmedView';
import ChangePasswordView from './views/ChangePasswordView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpView />} />
        <Route path='/paymentMethodView' element={<PaymentMethodView />} />
        <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
        <Route path='/forgotPassword' element={<ForgotPasswordView />} />
        <Route path='/changePassword' element={<ChangePasswordView />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;


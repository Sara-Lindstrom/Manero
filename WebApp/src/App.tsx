import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Style.min.css';
import SignUpView from './views/SignUpView';
import AddCardView from './views/AddCardView';
import PaymentMethodView from './views/PaymentMethodView';
import EditProfile from './views/EditProfile';
import ViewProfile from './views/ViewProfile';


import OnboardingView from './views/OnboardingView';
import SignUpView from './views/SignUpView';
import ForgotPasswordView from './views/ForgotPasswordView';
import ResetPasswordConfirmedView from './views/ResetPasswordConfirmedView';
import ChangePasswordView from './views/ChangePasswordView';
import SignInView from './views/SignInView';
import EditProfileView from './views/EditProfileView';

function App() {

  const user = 
  {
    id: 1,
    name: "Adam",
    email: "adam@domain.com",
    phone: "087267687435",
    location: "Sweden",
    imgUrl: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  }
  
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboardingView />} /> {/*Changed start to be /welcome when starting up the app*/}
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/signin' element={<SignInView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/viewprofile' element={<ViewProfile user= {user} />} />
            <Route path='/editprofile' element={<EditProfile user= {user} />} />
            <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
            <Route path='/forgotPassword' element={<ForgotPasswordView />} />
            <Route path='/changePassword' element={<ChangePasswordView />} />
            <Route path='/AddCardView' element={<AddCardView />} />
            <Route path='/EditProfile' element={<EditProfileView /> }/>
        </Routes>
    </BrowserRouter>

  );
};

export default App;
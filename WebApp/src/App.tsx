import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Style.min.css';
import AddCardView from './views/AddCardView';
import ProductsView from './views/ProductsView';
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
import PageNotFound from './views/PageNotFound';
import ProductDetailsView from './views/ProductDetailsView';
import ReviewsView from './views/ReviewsView';
import CartView from './views/CartView';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<OnboardingView />} />
                <Route path='/accountconfirmed' element={<ConfirmedPhoneVerificationView />} />
                <Route path='/activate' element={<VerificationView />} />
                <Route path='/addCardView' element={<AddCardView />} />
                <Route path='/addNewAddress' element={<AddNewAddressView />} />
                <Route path='/products/:sorting' element={<ProductsView />} />
                <Route path='/category' element={<CategoryView />} />
                <Route path='/changePassword' element={<ChangePasswordView />} />
                <Route path='/editProfile' element={<EditProfileView />} />
                <Route path='/forgotPassword' element={<ForgotPasswordView />} />
                <Route path='/home' element={<HomeView />} />
                <Route path='/leaveAReview' element={<LeaveAReviewView />} />
                <Route path='/myAddresses' element={<MyAddresses />} />
                <Route path='/pageNotFound' element={<PageNotFound />} />
                <Route path='/paymentMethodView' element={<PaymentMethodView />} />
                <Route path='/product/:productId' element={<ProductDetailsView />} />
                <Route path='/resetPasswordConfirmed' element={<ResetPasswordConfirmedView />} />
                <Route path='/signin' element={<SignInView />} />
                <Route path='/signup' element={<SignUpView />} />
                <Route path='/verifyPhone' element={<VerifyPhoneNumberView />} />
                <Route path='/viewProfile' element={<ViewProfile />} />
                <Route path='/reviews' element={<ReviewsView />} />
                <Route path='/cart' element={<CartView />} />
            </Routes>
        </BrowserRouter>

    );
};

export default App;
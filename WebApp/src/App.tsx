import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import PaymentMethodView from './views/PaymentMethodView';
import OnboardingView from './views/OnboardingView';



function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<OnboardingView />} />
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;

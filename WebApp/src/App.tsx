import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import PaymentMethodView from './views/PaymentMethodView';
import SignUpView from './views/SignUpView';


function App() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;

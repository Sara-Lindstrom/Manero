import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import AddCardView from './views/AddCardView';
import PaymentMethodView from './views/PaymentMethodView';
import SignUpView from './views/SignUpView';

const App: React.FC = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/AddCard' element={<AddCardView />} />
        </Routes>
    </BrowserRouter>

  );
};

export default App;

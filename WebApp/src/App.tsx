import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import SignUpView from './views/SignUpView';
import PaymentMethodView from './views/PaymentMethodView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpView/>}/>
        <Route path='/paymentmethod' element={<PaymentMethodView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

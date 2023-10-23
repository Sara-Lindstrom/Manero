import React from 'react';
import './css/Style.min.css';
import { BrowserRouter,  Route , Routes } from 'react-router-dom';
import PaymentMethodView from './views/PaymentMethodView';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/paymentMethodView' element={<PaymentMethodView />} />
      </Routes>
       
    </BrowserRouter>

  );
}

export default App;

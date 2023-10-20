import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import SignUpView from './views/SignUpView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

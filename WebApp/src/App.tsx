import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/Style.min.css';
import SignUpView from './views/SignUpView';
import PaymentMethodView from './views/PaymentMethodView';
import EditProfile from './views/EditProfile';




function App() {

  

  const user = {

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
            <Route path='/signup' element={<SignUpView />} />
            <Route path='/paymentMethodView' element={<PaymentMethodView />} />
            <Route path='/editprofile' element={<EditProfile user= {user} />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;

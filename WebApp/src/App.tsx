import React,{useState} from 'react';
import './css/scss/Style.css';
import EditProfile from './views/EditProfile';

function App() {

  const [currentUser, setCurrentUser] = useState({id:1, name:"Adam", email:"adam@domain.com", phone:"0761912190", location:"Sweden", imgUrl:"https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"})
  return (
    <>
    <EditProfile user= {currentUser} />
    </>
  );
}

export default App;

import VerifyPhoneNumberSection from '../sections/VerifyPhoneNumberSection';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { useNavigate } from 'react-router-dom';

const VerifyPhoneNumberView = () => {

  const navigate = useNavigate();
  const handleNavigateBack = () => {
    window.history.back(); 
  };

  return (
    <>
    <BreadcrumbSection currentPage="" showBackButton={true} onNavigateBack={handleNavigateBack}/>
    
      <div className='page-container'>
        <i className="fa-light fa-pipe"></i>
        <h1 className='page-title'>Verify your phone number</h1> 
      </div> 

      <VerifyPhoneNumberSection navigate={navigate}/>

    </>
  )
}

export default VerifyPhoneNumberView
import './ResetPasswordConfirmedSection';
import keyImage from '../Images/img.png';
import { useNavigate } from 'react-router-dom';

// Confirmation page after successful password reset
const ResetPasswordConfirmedSection = () => {

  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <section className='confirmation-section'>
        <div className='container'>
        <div className='image-container'>
          <img src={keyImage} alt="Key Icon" className="key-icon" />
        </div>
        <i className='fa-light fa-pipe'></i>
        <h2 className='confirmation-message'>Your password has been reset!</h2>
        <p className='confirmation-description'>Qui ex aute ipsum duis. Incidunt adipisicing voluptate laborum</p>
        <button className='btn dark-btn form-btn' onClick={handleDoneClick}>DONE</button>
        </div>
      </section>
    </>
  );
}

export default ResetPasswordConfirmedSection;
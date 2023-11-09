import keyImage from '../Images/img.png';
import { useNavigate } from 'react-router-dom';

// Confirmation page after successful phone verification
const ConfirmedPhoneVerificationSection = () => {
    const navigate = useNavigate();

    const handleDoneClick = () => {
        navigate('/home');
    };

    return (
        <>
            <section className="confirmation-section">
                <div className='container'>
                <div className="image-container">
                    <img src={keyImage} alt="Key Icon" className="key-icon" />
                </div>
                <i className="fa-light fa-pipe"></i>
                <h2 className="confirmation-message">Account Created!</h2>
                <p className="confirmation-description">Your account had beed created successfully.</p>
                <button className='btn dark-btn form-btn' onClick={handleDoneClick}>SHOP NOW</button>
                </div>
            </section>            
        </>
    );
}

export default ConfirmedPhoneVerificationSection;
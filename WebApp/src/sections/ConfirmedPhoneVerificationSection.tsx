import confirmUser from '../Images/confirmuser.png';
import { useNavigate } from 'react-router-dom';

// Display a confirmation page after successful phone verification
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
                        <img src={confirmUser} alt="User Icon" className="key-icon" />
                    </div>
                    <i className="fa-light fa-pipe"></i>
                    <h2 className="confirmation-message">Account Created!</h2>
                    <p className="confirmation-description">Your account had been created successfully.</p>
                    <button className='btn dark-btn form-btn' onClick={handleDoneClick}>SHOP NOW</button>
                </div>
            </section>
        </>
    );
}

export default ConfirmedPhoneVerificationSection;
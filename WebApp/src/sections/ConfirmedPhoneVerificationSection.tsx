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
            <section className="reset-password-section">
                <h1 className="app-name">MANERO</h1>
                <div className="image-container">
                    <img src={keyImage} alt="Key Icon" className="key-icon" />
                </div>
                <i className="fa-light fa-pipe"></i>
                <h2 className="reset-message">Account Created!</h2>
                <p className="description">Your account had beed created successfully.</p>
                <button className='btn dark-btn form-btn' onClick={handleDoneClick}>SHOP NOW</button>
            </section>
        </>
    );
}

export default ConfirmedPhoneVerificationSection;
import { Link } from 'react-router-dom';
import cartImg from '../Images/img_cart.png';

const EmptyCartSection = () => {

    return (
        <>
            <section className="confirmation-section">
                <div className='container'>
                    <div className="image-container">
                        <img src={cartImg} alt="Key Icon" className="key-icon" />
                    </div>
                    <i className="fa-light fa-pipe"></i>
                    <h2 className="confirmation-message">Your cart is empty!</h2>
                    <p className="confirmation-description">Looks like you haven't made your order yet.</p>
                    <Link to="/home"><button className='btn dark-btn form-btn'>SHOP NOW</button></Link>
                </div>
            </section>
        </>
    );
};

export default EmptyCartSection;
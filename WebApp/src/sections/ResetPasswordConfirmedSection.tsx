import React from 'react';
import './ResetPasswordConfirmedSection';
import keyImage from '../Images/img.png';

const ResetPasswordConfirmedSection = () => {
  return (
    <>
        <section className="reset-password-section">
            <h1 className="app-name">MANERO</h1>
            <div className="image-container">
                <img src={keyImage} alt="Key Icon" className="key-icon" />
            </div>
                <h2 className="reset-message">Your password has been reset!</h2>
                <p className="description">Qui ex aute ipsum duis. Incidunt adipisicing voluptate laborum</p>
                <button className="btn dark-btn">DONE</button>
        </section>
    </>
  );
}

export default ResetPasswordConfirmedSection;

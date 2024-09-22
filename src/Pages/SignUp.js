import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'; // Import the educator/instructor icon
import logo from '../Assets/logo.png'; 

function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate successful registration logic here
    setIsRegistered(true);
    
    // Simulate some loading time for registration process
    setTimeout(() => {
      setIsRegistered(false); // You can redirect or handle further after this.
    }, 3000); // Message will disappear after 3 seconds
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
      <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <h2>SIGN UP</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <input type="text" placeholder="Create Instructor Name" required />
            <span className="icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </span>
          </div>
          <div className="input-field">
            <input type="email" placeholder="Enter E-Mail ID" required />
            <span className="icon">✉️</span>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Enter Password" required />
            <span className="icon">👁️</span>
          </div>
          <button type="submit" className="btn-red">SIGN UP</button>
        </form>

        {isRegistered && (
          <div className="popup-overlay">
            <div className="popup-message">
              <span className="tick-mark">✔️</span>
              <p>Registered successfully!</p>
            </div>
          </div>
        )}

        <p>
          Already have an account? <Link to="/signin">SIGN IN</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;


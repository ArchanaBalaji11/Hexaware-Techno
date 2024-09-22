import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'; 

function SignIn({ onSignIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Placeholder for authentication logic
    onSignIn();
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <h2>SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter Username/E-Mail ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon"
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn-green">SIGN IN</button>
        </form>
        <div className="links">
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="signup-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <h1>Educator Dashboard</h1>
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/create-assessment">Create Assessment</Link></li>
            <li><Link to="/assessments">View Assessments</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="overview">
          <h2>Welcome, Instructor!</h2>
          <p>Manage your assessments, track performance, and personalize your teaching experience.</p>
        </section>

        <section className="actions">
          <button className="action-button" onClick={() => navigate('/create-assessment')}>Create New Assessment</button>
          <button className="action-button" onClick={() => navigate('/reports')}>View Results</button>
          <button className="action-button" onClick={() => navigate('/assessments')}>Manage Users</button>
        </section>

        {/* New Feature Buttons with Navigation */}
        <section className="advanced-features">
          <h3>Advanced Features</h3>
          <div className="feature-grid">
            <button className="feature-button" onClick={() => navigate('/ai-proctoring-setup')}>AI Proctoring Setup</button>
            <button className="feature-button" onClick={() => navigate('/feedback')}>Automated Feedback</button>
            <button className="feature-button" onClick={() => navigate('/analytics')}>Student Analytics</button>
            <button className="feature-button" onClick={() => navigate('/peer-assessment')}>Peer Assessment</button>
            <button className="feature-button" onClick={() => navigate('/leaderboard')}>Gamified Leaderboard</button>
          </div>
        </section>
      </main>
      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default HomePage;



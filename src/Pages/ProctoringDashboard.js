import React from 'react';
import './ProctoringDashboard.css';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const ProctoringDashboard = () => {
  const handleAction = (action) => {
    alert(`Action: ${action}`);
  };

  return (
    <div className="proctoring-dashboard">
      <header className="dashboard-header">
        <h1>Proctoring Dashboard</h1>
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
      </header>

      <div className="live-feed">
        <h2>Live Feed</h2>
        <div className="video-grid">
          {/* Sample video feeds */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="video-feed" key={index}>
              <video controls autoPlay />
              <p>Test-Taker {index + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="alerts-panel">
        <h2>Alerts & Notifications</h2>
        <ul>
          <li>Alert: Unusual behavior detected on Test-Taker 1</li>
          <li>Alert: Test-Taker 2 has paused the exam</li>
        </ul>
      </div>

      <div className="action-buttons">
        <button onClick={() => handleAction('Pause')} className="action-btn">Pause</button>
        <button onClick={() => handleAction('Flag')} className="action-btn">Flag</button>
        <button onClick={() => handleAction('Terminate')} className="action-btn">Terminate</button>
      </div>

      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
    
  );
};

export default ProctoringDashboard;

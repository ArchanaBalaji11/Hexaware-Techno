import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './AIProctoringSetupPage.css';
import logo from '../Assets/logo.png';
import { FaArrowLeft, FaVideo, FaMicrophoneAlt, FaDesktop } from 'react-icons/fa';

const AIProctoringSetupPage = () => {
  const [webcamStatus, setWebcamStatus] = useState(false);
  const [microphoneStatus, setMicrophoneStatus] = useState(false);
  const [screenRecordingStatus, setScreenRecordingStatus] = useState(false);

  const handleSetupCheck = () => {
    // Real-time environment checks & integration with AI proctoring tools
    alert('Performing real-time environment checks...');
  };

  return (
    <div className="proctoring-setup-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="title">AI Proctoring Setup</h1>
      </header>

      {/* Configuration Options */}
      <section className="config-section">
        <h2>Proctoring Settings</h2>
        <div className="config-options">
          <div className="option">
            <div className="option-icon">
              <FaVideo className="icon" /> {/* Icon representation */}
              <label>Webcam</label>
            </div>
            <div className="option-status">
              <input
                type="checkbox"
                checked={webcamStatus}
                onChange={() => setWebcamStatus(!webcamStatus)}
              />
              <span>{webcamStatus ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
          <div className="option">
            <div className="option-icon">
              <FaMicrophoneAlt className="icon" />
              <label>Microphone</label>
            </div>
            <div className="option-status">
              <input
                type="checkbox"
                checked={microphoneStatus}
                onChange={() => setMicrophoneStatus(!microphoneStatus)}
              />
              <span>{microphoneStatus ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
          <div className="option">
            <div className="option-icon">
              <FaDesktop className="icon" />
              <label>Screen Recording</label>
            </div>
            <div className="option-status">
              <input
                type="checkbox"
                checked={screenRecordingStatus}
                onChange={() => setScreenRecordingStatus(!screenRecordingStatus)}
              />
              <span>{screenRecordingStatus ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Environment Setup Guide */}
      <section className="setup-guide">
        <h2>Test Environment Setup Guide</h2>
        <p>Follow the steps below to ensure a smooth test-taking experience:</p>
        <ul>
          <li>Ensure your webcam and microphone are enabled.</li>
          <li>Close unnecessary programs and tabs.</li>
          <li>Ensure good lighting in your room.</li>
        </ul>
        <button onClick={handleSetupCheck} className="setup-check-button">
          Perform Environment Check
        </button>
      </section>

      {/* Proctoring Rules and Guidelines */}
      <section className="proctoring-rules">
        <h2>Proctoring Rules & Guidelines</h2>
        <ul>
          <li>Remain within webcam view at all times.</li>
          <li>No unauthorized materials are allowed nearby.</li>
          <li>Follow all provided instructions during the assessment.</li>
        </ul>
      </section>

      {/* Additional Features */}
      <section className="additional-features">
        <h2>Additional Features</h2>
        <ul>
          <li>Live AI proctoring status dashboard</li>
          <li>Alerts for suspicious activities</li>
          <li>Instructor notifications & customizable proctoring rules</li>
          <li>Accessibility settings for students with disabilities</li>
          <li>Report generation of environment checks</li>
          <li>Session recording options for suspicious activities</li>
        </ul>
      </section>

      {/* Back Button */}
      <Link to="/" className="back-button">
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default AIProctoringSetupPage;

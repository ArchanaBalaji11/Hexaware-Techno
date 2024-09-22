import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviewPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { question, options, correctAnswer, tags, category, hint, explanation, difficulty } = location.state;

  const [timer, setTimer] = useState(300); // 5-minute timer
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsTimeUp(true);
      // Handle auto-submit functionality here
    }
  }, [timer]);

  const handleSubmit = () => {
    // Handle submit logic here
    alert('Submitted!');
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="preview-container">
      <h2>Assessment Preview</h2>
      <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
      <div className="instructions">
        <p>Please review the question and options carefully.</p>
        <p>Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
      
      <div className="question-preview">
        <h3>{question}</h3>
        <ul>
          {options.map((opt, index) => (
            <li key={index}>Option {index + 1}: {opt}</li>
          ))}
        </ul>
        <p><strong>Correct Answer:</strong> {correctAnswer}</p>
        {hint && <p><strong>Hint:</strong> {hint}</p>}
        {explanation && <p><strong>Explanation:</strong> {explanation}</p>}
        <p><strong>Difficulty:</strong> {difficulty}</p>
        <p><strong>Tags:</strong> {tags}</p>
        <p><strong>Category:</strong> {category}</p>
      </div>
      
      <div className="action-buttons">
        <button onClick={handleSubmit} className="submit-btn">Submit</button>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </div>
      
      {isTimeUp && <div className="time-up-alert">Time is up! Please submit your answer.</div>}
    </div>
    
  );
};

export default PreviewPage;

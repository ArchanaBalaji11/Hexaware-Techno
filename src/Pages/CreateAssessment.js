import React, { useState } from 'react';
import './CreateAssessment.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const CreateAssessment = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [questionType, setQuestionType] = useState('MCQ');
  const [questions, setQuestions] = useState([]);
  const [draft, setDraft] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!title || !subject || !date || !time || !description || questions.length === 0) {
      setErrorMessage('Please fill out all fields and add at least one question.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Assessment created:', { title, subject, date, time, description, questionType, questions });
    alert(`Assessment ${draft ? 'saved as draft' : 'published'} successfully!`);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setSubject('');
    setDate('');
    setTime('');
    setDescription('');
    setQuestionType('MCQ');
    setQuestions([]);
    setErrorMessage('');
    setDraft(false);
    setSuggestions([]);
  };

  const handleAddQuestion = () => {
    const newQuestion = prompt('Enter your question:');
    if (newQuestion) {
      setQuestions([...questions, newQuestion]);
    }
  };

  const handleDraftToggle = () => {
    setDraft(!draft);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (input) => {
    const mockApiResponse = [
      `How to implement ${input} in real life?`,
      `Why is ${input} important?`,
      `Explain the principles of ${input}.`
    ];
    setSuggestions(mockApiResponse);
  };

  return (
    <div className="create-assessment-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="header-title">Create New Assessment</h1>
      </header>
      <div className="create-assessment-container">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label>Assessment Title:</label>
          <input
            type="text"
            placeholder="Enter assessment title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <div className="tooltip">
            <FaInfoCircle />
            <span className="tooltiptext">Provide a clear title for your assessment.</span>
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => setTitle(suggestion)}>{suggestion}</li>
              ))}
            </ul>
          )}

          <label>Subject:</label>
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label>Description:</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <label>Question Type:</label>
          <select value={questionType} onChange={(e) => setQuestionType(e.target.value)} required>
            <option value="MCQ">Multiple Choice</option>
            <option value="Descriptive">Descriptive</option>
            <option value="Coding">Coding</option>
          </select>

          <div className="questions-list">
            <h4>Questions:</h4>
            {questions.length > 0 ? (
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            ) : (
              <p>No questions added yet.</p>
            )}
          </div>

          <button type="button" className="add-question-button" onClick={handleAddQuestion}>
            Add Question
          </button>

          <div className="draft-option">
            <input type="checkbox" checked={draft} onChange={handleDraftToggle} />
            <label>Save as Draft</label>
          </div>

          <button type="submit">Create Assessment</button>
        </form>
        <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
      </div>
    </div>
  );
};

export default CreateAssessment;

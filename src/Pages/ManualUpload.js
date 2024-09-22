import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManualUpload.css';
import logo from '../Assets/logo.png';
import { FaArrowLeft } from 'react-icons/fa';

const ManualUpload = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [tags, setTags] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [category, setCategory] = useState('MCQ');
  const [error, setError] = useState('');
  const [hint, setHint] = useState('');
  const [explanation, setExplanation] = useState('');
  const [realTimePreview, setRealTimePreview] = useState('');
  const [draftSaved, setDraftSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      autoSaveDraft();
    }, 30000);
    return () => clearTimeout(timer);
  }, [question, options, correctAnswer, tags, category, difficulty, hint, explanation]);

  useEffect(() => {
    setRealTimePreview(`
      <div>
        <h3>${question}</h3>
        <ul>
          ${options.map((opt, index) => `<li key=${index}>Option ${index + 1}: ${opt}</li>`).join('')}
        </ul>
        ${hint ? `<p><strong>Hint:</strong> ${hint}</p>` : ''}
        ${explanation ? `<p><strong>Explanation:</strong> ${explanation}</p>` : ''}
      </div>
    `);
  }, [question, options, hint, explanation]);

  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCorrectAnswerChange = (e) => setCorrectAnswer(e.target.value);
  const handleTagsChange = (e) => setTags(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDifficultyChange = (e) => setDifficulty(e.target.value);
  const handleHintChange = (e) => setHint(e.target.value);
  const handleExplanationChange = (e) => setExplanation(e.target.value);

  const validateForm = () => {
    if (!question || !correctAnswer || options.includes('')) {
      setError('All fields must be filled!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log('Question saved!');
      setDraftSaved(false);
    }
  };

  const handlePreview = () => {
    if (validateForm()) {
      navigate('/preview', {
        state: {
          question,
          options,
          correctAnswer,
          tags,
          category,
          hint,
          explanation,
          difficulty,
        },
      });
    }
  };

  const autoSaveDraft = () => {
    console.log('Auto-saving draft...');
    setDraftSaved(true);
  };

  const goBack = () => navigate(-1); 

  return (
    <div className="manual-upload-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-content">
          <h1>Manual Question Upload Section</h1>
        </div>
      </header>

      <h2>Upload New Question</h2>
      <div className="form-section">
        <label>Question:</label>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          placeholder="Enter your question here"
          className="rich-text-editor"
        />
      </div>

      <div className="form-section">
        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index} className="option-wrapper">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className="option-input"
            />
          </div>
        ))}
        <button className="bulk-add-btn">Bulk Add Options</button>
      </div>

      <div className="form-section">
        <label>Correct Answer:</label>
        <input
          type="text"
          value={correctAnswer}
          onChange={handleCorrectAnswerChange}
          placeholder="Enter correct answer"
          className="correct-answer-input"
        />
      </div>

      <div className="form-section">
        <label>Difficulty Level:</label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
       

 </select>
      </div>

      <div className="form-section">
        <label>Tags:</label>
        <input
          type="text"
          value={tags}
          onChange={handleTagsChange}
          placeholder="e.g. Mathematics, Physics"
          className="tag-input"
        />
      </div>

      <div className="form-section">
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="MCQ">Multiple Choice</option>
          <option value="Coding">Coding</option>
        </select>
      </div>

      <div className="form-section">
        <label>Hint (Optional):</label>
        <input
          type="text"
          value={hint}
          onChange={handleHintChange}
          placeholder="Enter a hint for learners"
        />
      </div>

      <div className="form-section">
        <label>Explanation (Optional):</label>
        <textarea
          value={explanation}
          onChange={handleExplanationChange}
          placeholder="Enter detailed explanation for learners"
        />
      </div>
      <div className="preview-section">
        <button onClick={handleSave} className="save-btn">
          Save
        </button>
        <button onClick={handlePreview} className="preview-btn">
          Preview
        </button>
      </div>
      <div className="real-time-preview">
        <h3>Live Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: realTimePreview }} />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="back-button" onClick={goBack}>
        <FaArrowLeft className="back-icon" />
      </div>
    </div>
  );
};

export default ManualUpload;
import React, { useState } from 'react';
import './Feedback.css';
import { FaPlus, FaUpload, FaDownload, FaTrashAlt, FaPen, FaEye, FaPaperPlane, FaSave, FaRedoAlt } from 'react-icons/fa'; 
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const Feedback = () => {
  const [feedbackTemplates, setFeedbackTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [customFeedback, setCustomFeedback] = useState('');

  const fetchFeedbackTemplates = () => {
    setFeedbackTemplates(['Template 1', 'Template 2', 'Template 3']);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleFeedbackChange = (e) => {
    setCustomFeedback(e.target.value);
  };

  const previewFeedback = () => {
    alert(`Preview: ${selectedTemplate} - ${customFeedback}`);
  };

  const sendFeedback = () => {
    alert('Feedback sent to students.');
  };

  const saveDraft = () => {
    alert('Feedback saved as draft.');
  };

  const loadPreviousFeedback = () => {
    setCustomFeedback('Previously saved feedback.');
  };

  const deleteTemplate = (template) => {
    setFeedbackTemplates(feedbackTemplates.filter(t => t !== template));
  };

  const createNewTemplate = () => {
    const newTemplate = prompt('Enter new template name:');
    if (newTemplate) {
      setFeedbackTemplates([...feedbackTemplates, newTemplate]);
    }
  };

  const importTemplates = () => {
    alert('Templates imported.');
  };

  const exportTemplates = () => {
    alert('Templates exported.');
  };

  return (
    <div className="feedback-page">
      <header className="feedback-header">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <h1>Automated Feedback</h1>
      </header>

      <div className="action-buttons">
        <button onClick={fetchFeedbackTemplates}><FaRedoAlt /> Load Templates</button>
        <button onClick={createNewTemplate}><FaPlus /> Create New Template</button>
        <button onClick={importTemplates}><FaUpload /> Import Templates</button>
        <button onClick={exportTemplates}><FaDownload /> Export Templates</button>
      </div>

      <div className="templates-list">
        <h2>Templates</h2>
        <ul>
          {feedbackTemplates.map(template => (
            <li key={template}>
              {template}
              <button onClick={() => handleTemplateSelect(template)}><FaPen /> Select</button>
              <button onClick={() => deleteTemplate(template)}><FaTrashAlt /> Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="feedback-editor">
        <h2>Customize Feedback</h2>
        <textarea value={customFeedback} onChange={handleFeedbackChange} />
        <div className="editor-buttons">
          <button onClick={previewFeedback}><FaEye /> Preview</button>
          <button onClick={sendFeedback}><FaPaperPlane /> Send Feedback</button>
          <button onClick={saveDraft}><FaSave /> Save Draft</button>
          <button onClick={loadPreviousFeedback}><FaRedoAlt /> Load Previous Feedback</button>
        </div>
      </div>
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default Feedback;

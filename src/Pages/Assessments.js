import React, { useState } from 'react';
import './Assessments.css';
import logo from '../Assets/logo.png'; 
import { FaArrowLeft } from 'react-icons/fa'; 

const Assessments = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [settings, setSettings] = useState('');
  const [assessments, setAssessments] = useState([
    { id: 1, title: 'Math Quiz', status: 'Published', dateCreated: '2023-09-01', avgScore: 85 },
    { id: 2, title: 'Science Test', status: 'Draft', dateCreated: '2023-09-05', avgScore: null },
    { id: 3, title: 'History Quiz', status: 'Published', dateCreated: '2023-09-10', avgScore: 75 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAssessments, setSelectedAssessments] = useState([]);

  const handlePublish = () => {
    console.log('Assessment Published');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBulkAction = (action) => {
    if (selectedAssessments.length === 0) {
      alert('Please select assessments for bulk actions.');
    } else {
      console.log(`Performing ${action} on assessments`, selectedAssessments);
    }
  };

  const toggleSelectAssessment = (id) => {
    setSelectedAssessments((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const getAvgScore = (assessment) => {
    return assessment.avgScore !== null ? `${assessment.avgScore}%` : 'N/A';
  };

  return (
    <div className="assessments-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-content">
          <h1>Assessment Management</h1>
          <input
            type="text"
            placeholder="Search Assessments"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <ul>
            <li>Question Bank</li>
            <li>Students Reports</li>
          </ul>
        </aside>

        <section className="assessment-list">
          <h2>Manage Assessments</h2>

          {/* Statistics Dashboard */}
          <div className="dashboard">
            <div className="stat-card">
              <h3>Total Assessments</h3>
              <p>{assessments.length}</p>
            </div>
            <div className="stat-card">
              <h3>Published</h3>
              <p>{assessments.filter(a => a.status === 'Published').length}</p>
            </div>
            <div className="stat-card">
              <h3>Drafts</h3>
              <p>{assessments.filter(a => a.status === 'Draft').length}</p>
            </div>
            <div className="stat-card">
              <h3>Avg Score</h3>
              <p>
                {
                  assessments
                    .filter(a => a.avgScore !== null)
                    .reduce((acc, a) => acc + a.avgScore, 0) / (assessments.filter(a => a.avgScore !== null).length || 1)
                }%
              </p>
            </div>
          </div>

          {/* Assessment Table */}
          <table className="assessment-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Title</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Average Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assessments
                .filter((assessment) =>
                  assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((assessment) => (
                  <tr key={assessment.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedAssessments.includes(assessment.id)}
                        onChange={() => toggleSelectAssessment(assessment.id)}
                      />
                    </td>
                    <td>{assessment.title}</td>
                    <td>{assessment.status}</td>
                    <td>{assessment.dateCreated}</td>
                    <td>{getAvgScore(assessment)}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                      <button>View Results</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Bulk Actions */}
          <div className="bulk-actions">
            <button onClick={() => handleBulkAction('archive')}>Archive</button>
            <button onClick={() => handleBulkAction('delete')}>Delete</button>
          </div>

          {/* Gamification: Leaderboards */}
          <section className="leaderboard">
            <h2>Top Performers</h2>
            <ul>
              <li>Student A - 98%</li>
              <li>Student B - 95%</li>
              <li>Student C - 90%</li>
            </ul>
          </section>
        </section>
      </main>

      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default Assessments;

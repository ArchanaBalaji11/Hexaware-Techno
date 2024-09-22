import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import { FaFilter, FaRedo, FaDownload, FaPaintBrush, FaShareAlt, FaEyeSlash, FaEye } from 'react-icons/fa'; // Import icons
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const Leaderboard = () => {
  const [students, setStudents] = useState([]);
  const [showNames, setShowNames] = useState(true);

  // Feature 1: Fetch Student Scores
  useEffect(() => {
    // Fetch data from API or database
    setStudents([
      { name: 'Student A', score: 95 },
      { name: 'Student B', score: 88 },
      { name: 'Student C', score: 92 },
    ]);
  }, []);

  // Feature 2: Sort Students by Score
  const sortedStudents = students.sort((a, b) => b.score - a.score);

  // Feature 3: Display Leaderboard
  const renderLeaderboard = () => {
    return sortedStudents.map((student, index) => (
      <tr key={index} className={highlightTopPerformer(index)}>
        <td>{index + 1}</td>
        {showNames && <td>{student.name}</td>}
        <td>{student.score}</td>
      </tr>
    ));
  };

  // Feature 4: Filter Leaderboard
  const filterLeaderboard = (threshold) => {
    setStudents(students.filter(s => s.score >= threshold));
  };

  // Feature 5: Reset Leaderboard Filters
  const resetFilters = () => {
    setStudents([
      { name: 'Student A', score: 95 },
      { name: 'Student B', score: 88 },
      { name: 'Student C', score: 92 },
    ]);
  };

  // Feature 6: Highlight Top Performer
  const highlightTopPerformer = (index) => {
    return index === 0 ? 'top-performer' : '';
  };

  // Feature 7: Export Leaderboard
  const exportLeaderboard = () => {
    alert('Leaderboard exported.');
  };

  // Feature 8: Customize Leaderboard Appearance
  const customizeAppearance = () => {
    alert('Appearance settings updated.');
  };

  // Feature 9: Share Leaderboard with Students
  const shareWithStudents = () => {
    alert('Leaderboard shared with students.');
  };

  // Feature 10: Hide/Show Student Names
  const toggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    <div className="leaderboard-page">
      <header className="leaderboard-header">
        <h1>Gamified Leaderboard</h1>
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
      </header>
      <div className="action-buttons">
        <button onClick={() => filterLeaderboard(90)}><FaFilter /> Show Scores ≥ 90</button>
        <button onClick={resetFilters}><FaRedo /> Reset Filters</button>
        <button onClick={exportLeaderboard}><FaDownload /> Export Leaderboard</button>
        <button onClick={customizeAppearance}><FaPaintBrush /> Customize Appearance</button>
        <button onClick={shareWithStudents}><FaShareAlt /> Share with Students</button>
        <button onClick={toggleNames}>
          {showNames ? <FaEyeSlash /> : <FaEye />} {showNames ? 'Hide Names' : 'Show Names'}
        </button>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            {showNames && <th>Name</th>}
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {renderLeaderboard()}
        </tbody>
      </table>
      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default Leaderboard;

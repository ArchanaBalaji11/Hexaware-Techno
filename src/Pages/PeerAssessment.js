import React, { useState } from 'react';
import './PeerAssessment.css';
import { FaUsers, FaClipboardList, FaFileExport, FaChartBar, FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Import icons
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const PeerAssessment = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [peerReviews, setPeerReviews] = useState([]);

  // Feature 1: Create Groups
  const createGroup = () => {
    const groupName = prompt('Enter group name:');
    setGroups([...groups, { name: groupName, members: [] }]);
  };

  // Feature 2: Assign Students to Groups
  const assignStudents = (group) => {
    const studentName = prompt('Enter student name:');
    const updatedGroups = groups.map(g => {
      if (g.name === group.name) {
        return { ...g, members: [...g.members, studentName] };
      }
      return g;
    });
    setGroups(updatedGroups);
  };

  // Feature 3: Set Up Peer Assessment Criteria
  const setupCriteria = () => {
    alert('Peer assessment criteria set up.');
  };

  // Feature 4: Collect Peer Reviews
  const collectReviews = () => {
    alert('Peer reviews collected.');
  };

  // Feature 5: Analyze Peer Feedback
  const analyzeFeedback = () => {
    alert('Peer feedback analyzed.');
  };

  // Feature 6: Provide Feedback to Students
  const provideFeedback = () => {
    alert('Feedback provided to students.');
  };

  // Feature 7: Export Peer Assessment Data
  const exportData = () => {
    alert('Peer assessment data exported.');
  };

  // Feature 8: View Group Performance
  const viewGroupPerformance = (group) => {
    alert(`Viewing performance for group ${group.name}`);
  };

  // Feature 9: Edit Groups
  const editGroup = (group) => {
    const newName = prompt('Enter new group name:', group.name);
    setGroups(groups.map(g => g.name === group.name ? { ...g, name: newName } : g));
  };

  // Feature 10: Delete Groups
  const deleteGroup = (group) => {
    setGroups(groups.filter(g => g.name !== group.name));
  };

  return (
    <div className="peer-assessment-page">
      <header className="peer-assessment-header">
        <h1>Peer Assessment</h1>
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
      </header>
      <div className="action-buttons">
        <button onClick={createGroup}><FaPlus /> Create Group</button>
        <button onClick={setupCriteria}><FaClipboardList /> Set Up Criteria</button>
        <button onClick={collectReviews}><FaClipboardList /> Collect Reviews</button>
        <button onClick={analyzeFeedback}><FaChartBar /> Analyze Feedback</button>
        <button onClick={provideFeedback}><FaChartBar /> Provide Feedback</button>
        <button onClick={exportData}><FaFileExport /> Export Data</button>
      </div>

      <div className="groups-list">
        <h2>Groups</h2>
        <ul>
          {groups.map(group => (
            <li key={group.name}>
              <FaUsers /> {group.name}
              <button onClick={() => assignStudents(group)}><FaPlus /> Add Student</button>
              <button onClick={() => viewGroupPerformance(group)}><FaChartBar /> View Performance</button>
              <button onClick={() => editGroup(group)}><FaEdit /> Edit</button>
              <button onClick={() => deleteGroup(group)}><FaTrash /> Delete</button>
              <ul>
                {group.members.map(member => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default PeerAssessment;

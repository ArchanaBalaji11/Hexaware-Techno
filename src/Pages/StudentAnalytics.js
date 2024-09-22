import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import jsPDF from 'jspdf';
import './StudentAnalytics.css';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../Assets/logo.png';

const StudentAnalytics = () => {
  const [studentData, setStudentData] = useState([]);

  // Feature 1: Fetch Student Performance Data
  useEffect(() => {
    // Fetch data from API or database
    setStudentData([
      { name: 'Student A', score: 85 },
      { name: 'Student B', score: 92 },
      { name: 'Student C', score: 78 },
    ]);
  }, []);

  // Feature 2: Display Data in Table
  const renderTable = () => {
    return studentData.map((student, index) => (
      <tr key={index}>
        <td>{student.name}</td>
        <td>{student.score}</td>
        <td>
          <button onClick={() => generateStudentReport(student)}>Download Report</button>
        </td>
      </tr>
    ));
  };

  // Feature 3: Generate Performance Chart
  const generateChart = () => {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: studentData.map(s => s.name),
        datasets: [{
          label: 'Scores',
          data: studentData.map(s => s.score),
          backgroundColor: 'rgba(82, 10, 137, 0.6)',
        }],
      },
    });
  };

  // Feature 4: Export Analytics Report
  const exportReport = () => {
    // Export logic
    alert('Report exported.');
  };

  // Feature 5: Filter Data
  const filterData = (threshold) => {
    setStudentData(studentData.filter(s => s.score >= threshold));
  };

  // Feature 6: Sort Data
  const sortData = (order) => {
    const sortedData = [...studentData].sort((a, b) => order === 'asc' ? a.score - b.score : b.score - a.score);
    setStudentData(sortedData);
  };

  // Feature 7: Generate Student Report
  const generateStudentReport = (student) => {
    const doc = new jsPDF();
    doc.text(`Student Report for ${student.name}`, 10, 10);
    doc.text(`Score: ${student.score}`, 10, 20);
    doc.save(`${student.name}_report.pdf`);
  };

  return (
    <div className="analytics-page">
      <h1>Student Analytics</h1>
      <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
        </div>
      <button onClick={generateChart}>Generate Chart</button>
      <button onClick={() => filterData(80)}>Filter Scores = 80</button>
      <button onClick={() => sortData('asc')}>Sort Ascending</button>
      <button onClick={() => sortData('desc')}>Sort Descending</button>
      <button onClick={exportReport}>Export Report</button>

      <table className="analytics-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
{/* Circular Back Button */}
<div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
      <canvas id="performanceChart" width="400" height="200"></canvas>
    </div>
  );
};

export default StudentAnalytics;

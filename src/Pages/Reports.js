import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaArrowLeft } from 'react-icons/fa';
import './Reports.css';
import { Chart, registerables } from 'chart.js';
import logo from '../Assets/logo.png';

Chart.register(...registerables);

const Reports = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [exportData, setExportData] = useState([]);

  const mathQuizData = {
    labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'],
    datasets: [
      {
        label: 'Math Quiz Score',
        data: [85, 90, 78, 88, 92],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const physicsTestData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    datasets: [
      {
        label: 'Physics Test Scores',
        data: [75, 80, 85, 70, 90],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      mathQuizData.labels.map((student, index) => ({
        Student: student,
        Score: mathQuizData.datasets[0].data[index],
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Math Quiz');
    XLSX.writeFile(workbook, 'MathQuizReport.xlsx');
  };

  const exportPdf = () => {
    const doc = new jsPDF();
    doc.text('Math Quiz Report', 14, 16);
    doc.autoTable({
      head: [['Student', 'Score']],
      body: mathQuizData.labels.map((student, index) => [
        student,
        mathQuizData.datasets[0].data[index],
      ]),
    });
    doc.save('MathQuizReport.pdf');
  };

  const openPreview = () => {
    setExportData(mathQuizData.labels.map((student, index) => ({
      Student: student,
      Score: mathQuizData.datasets[0].data[index],
    })));
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <div className="reports-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="header-title">Reports & Analytics Dashboard</h1>
      </header>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="performance-summary">
          <div className="summary-card">
            <h2>Total Assessments</h2>
            <p>5</p>
          </div>
          <div className="summary-card">
            <h2>Average Score</h2>
            <p>86.6%</p>
          </div>
          <div className="summary-card">
            <h2>Top Performer</h2>
            <p>Student 5</p>
          </div>
        </div>
      </section>

      {/* Math Quiz Section */}
      <section className="report-section">
        <h2>Math Quiz - Student Performance</h2>
        <div className="chart-container">
          <Line data={mathQuizData} options={chartOptions} />
        </div>
        <table className="performance-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {mathQuizData.labels.map((student, index) => (
              <tr key={index}>
                <td>{student}</td>
                <td>{mathQuizData.datasets[0].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Physics Test Section */}
      <section className="report-section">
        <h2>Physics Test - Question Analysis</h2>
        <div className="chart-container">
          <Bar data={physicsTestData} options={chartOptions} />
        </div>
        <table className="performance-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {physicsTestData.labels.map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
                <td>{physicsTestData.datasets[0].data[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Export Section */}
      <div className="export-section">
        <button onClick={openPreview}>Preview Report</button>
        <button onClick={exportPdf}>Export as PDF</button>
        <button onClick={exportExcel}>Export as Excel</button>
      </div>

      {/* Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <>
          <div className="overlay" onClick={closePreview}></div>
          <div className="modal">
            <div className="modal-header">
              <h2>Report Preview</h2>
              <button className="close-button" onClick={closePreview}>
                &times;
              </button>
            </div>
            <div className="modal-content">
              <h3>Math Quiz Report</h3>
              <p>Below is a preview of the report you will download:</p>
              <table className="performance-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {exportData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Student}</td>
                      <td>{item.Score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
          </div>
        </>
      )}
    </div>
    
  );
};

export default Reports;
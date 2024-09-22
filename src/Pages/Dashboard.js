import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import './Dashboard.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import logo from '../Assets/logo.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [recentActivities, setRecentActivities] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRecentActivities([
        'Created Math Quiz',
        'Uploaded Chemistry Questions',
        'Edited Physics Assessment',
      ]);
      setAlerts([
        'New system update available',
        'Reminder: Prepare Questions for Technical Quiz ',
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const performanceData = {
    labels: ['Math', 'Physics', 'Chemistry'],
    datasets: [
      {
        label: 'Average Scores',
        data: [85, 78, 92],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const activityData = {
    labels: ['Last Week', 'This Week'],
    datasets: [
      {
        label: 'New Assessments Created',
        data: [5, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const upcomingAssessments = [
    { name: 'Math Test', date: 'Sept 21', isUrgent: false },
    { name: 'Physics Test', date: 'Sept 23', isUrgent: true },
  ];

  return (
    <div className="dashboard-container">
      <aside className="navigation-menu">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="logo" />
          <h1 className="header-title">👩‍🏫 Instructor</h1>
        </div>
        <h1 className="main-title">CAREER FIT</h1>
        <p className="tagline">Empowering Education in Every Assessments !</p>
        <ul>
          <li><Link to="/dashboard"><i className="fas fa-home"></i>🏠 Home</Link></li>
          <li><Link to="/assessments"><i className="fas fa-clipboard-list"></i>📋 Manage Assessments</Link></li>
          <li><Link to="/manual-upload"><i className="fas fa-upload"></i>⬆️ Manual Upload</Link></li>
          <li><Link to="/create-assessment"><i className="fas fa-plus-circle"></i>✍️ Create Assessment</Link></li>
          <li><Link to="/ai-proctoring-setup"><i className="fas fa-user-secret"></i> 🤖 AI Proctoring</Link></li>
          <li><Link to="/proctoring-dashboard"><i className="fas fa-shield-alt"></i> 📊 Proctoring Dashboard</Link></li>
          <li><Link to="/reports"><i className="fas fa-chart-line"></i> 📑 Reports</Link></li>
          <li><Link to="/settings"><i className="fas fa-cog"></i>⚙️ Settings</Link></li>
        </ul>
      </aside>

      <main className="main-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <section className="alerts-reminders">
              <h2>Alerts & Reminders 🔔</h2>
              {alerts.map((alert, index) => (
                <div key={index} className="alert-item">
                  <p>{alert}</p>
                </div>
              ))}
            </section>

            <section className="overview">
              <h2>Performance Overview</h2>
              <div className="charts-container">
                <div className="chart-item">
                  <h3>Average Scores 📅</h3>
                  <Pie data={performanceData} />
                </div>
                <div className="chart-item">
                  <h3>Activity Trend</h3>
                  <Bar data={activityData} />
                </div>
              </div>
              <div className="metrics">
                <div className="metric-card">Total Assessments: 12</div>
                <div className="metric-card">Completed Assessments: 9</div>
                <div className="metric-card">Upcoming Assessments: {upcomingAssessments.length}</div>
              </div>
            </section>

            <section className="quick-links">
              <h2>Quick Actions</h2>
              <Link to="/create-assessment" className="quick-link">Create New Assessment</Link>
              <Link to="/manual-upload" className="quick-link">Manage Question Bank</Link>
              <Link to="/message-students" className="quick-link">Message Students</Link>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;

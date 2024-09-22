import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Assessments from './Pages/Assessments';
import ManualUpload from './Pages/ManualUpload';
import CreateAssessment from './Pages/CreateAssessment';
import Reports from './Pages/Reports';
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';
import PreviewPage from './Pages/PreviewPage';
import AIProctoringSetupPage from './Pages/AIProctoringSetupPage';
import Feedback from './Pages/Feedback';
import StudentAnalytics from './Pages/StudentAnalytics';
import PeerAssessment from './Pages/PeerAssessment';
import Leaderboard from './Pages/Leaderboard';
import './App.css';
import ProctoringDashboard from './Pages/ProctoringDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/signin" element={<SignIn onSignIn={() => setIsAuthenticated(true)} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/signin" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/manual-upload" element={<ManualUpload />} />
            <Route path="/create-assessment" element={<CreateAssessment />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/ai-proctoring-setup" element={<AIProctoringSetupPage />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/analytics" element={<StudentAnalytics />} />
            <Route path="/peer-assessment" element={<PeerAssessment />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path='/proctoring-dashboard' element={<ProctoringDashboard />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

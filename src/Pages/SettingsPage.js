import React, { useState } from 'react';
import './SettingsPage.css';
import logo from '../Assets/logo.png'; 
import { FaArrowLeft } from 'react-icons/fa';

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    twoFactorEnabled: false
  });

  const [notification, setNotification] = useState('email');
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Google API', key: 'ABCD1234' },
    { id: 2, name: 'Twitter API', key: 'WXYZ5678' }
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [badges, setBadges] = useState([
    { id: 1, name: 'Beginner Instructor', earned: true },
    { id: 2, name: 'Quiz Master', earned: false }
  ]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleNotificationChange = (e) => {
    setNotification(e.target.value);
  };

  const handleSaveProfile = () => {
    console.log('Profile saved:', profile);
  };

  const handleSaveNotification = () => {
    console.log('Notification preferences saved:', notification);
  };

  const handleSaveAPIKeys = () => {
    console.log('API keys saved:', apiKeys);
  };

  const handleTwoFactorToggle = () => {
    setProfile({ ...profile, twoFactorEnabled: !profile.twoFactorEnabled });
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <div className="logo">
        <img src={logo} alt="Brand Logo" className="logo" />
        </div>
        <h1>Settings</h1>
        <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
          <span className="icon icon-dark">🌙</span> {/* Moon Icon for Dark Mode */}
          <span className="icon icon-light">☀️</span> {/* Sun Icon for Light Mode */}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="main-content">
        {/* Profile Settings */}
        <section className="profile-settings">
          <h2>Profile Settings</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
              />
            </label>

            {/* Two-Factor Authentication */}
            <label>
              <input
                type="checkbox"
                checked={profile.twoFactorEnabled}
                onChange={handleTwoFactorToggle}
              />
              Enable Two-Factor Authentication
            </label>

            <button type="button" onClick={handleSaveProfile}>
              Save Profile
            </button>
          </form>
        </section>

        {/* Notification Preferences */}
        <section className="notification-preferences">
          <h2>Notification Preferences</h2>
          <form>
            <label>
              Notification Method:
              <select value={notification} onChange={handleNotificationChange}>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="push">Push Notification</option>
              </select>
            </label>
            <button type="button" onClick={handleSaveNotification}>
              Save Preferences
            </button>
          </form>
        </section>

        {/* Integrations & API Keys */}
        <section className="api-keys-management">
          <h2>Integrations & API Keys</h2>
          <ul>
            {apiKeys.map(api => (
              <li key={api.id}>
                <strong>{api.name}:</strong> {api.key}
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleSaveAPIKeys}>
            Save API Keys
          </button>
        </section>

        {/* Progress & Badges */}
        <section className="progress-badges">
          <h2>Progress & Achievements</h2>
          <ul>
            {badges.map(badge => (
              <li key={badge.id}>
                {badge.earned ? (
                  <strong>{badge.name}</strong>
                ) : (
                  <span>{badge.name}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* Circular Back Button */}
      <div className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default SettingsPage;

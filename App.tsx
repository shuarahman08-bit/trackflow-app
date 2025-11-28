import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Slugs from './pages/Slugs';
import CreateSlug from './pages/CreateSlug';
import Leads from './pages/Leads';
import RedirectHandler from './pages/RedirectHandler';
import { TutorialProvider } from './contexts/TutorialContext';
import { AppProvider } from './contexts/AppContext';

const App: React.FC = () => {
  // Simple auth state management
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('tf_auth') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('tf_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('tf_auth');
    setIsAuthenticated(false);
  };

  return (
    <AppProvider>
      <TutorialProvider>
        <HashRouter>
          <Routes>
            <Route path="/login" element={
              isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
            } />
            
            {/* Redirect Route - Public */}
            <Route path="/s/:slug" element={<RedirectHandler />} />

            {/* Protected Routes */}
            <Route path="/" element={
              isAuthenticated ? <Layout onLogout={handleLogout}><Dashboard /></Layout> : <Navigate to="/login" replace />
            } />
            
            <Route path="/dashboard" element={
              isAuthenticated ? <Layout onLogout={handleLogout}><Dashboard /></Layout> : <Navigate to="/login" replace />
            } />

            <Route path="/slugs" element={
              isAuthenticated ? <Layout onLogout={handleLogout}><Slugs /></Layout> : <Navigate to="/login" replace />
            } />

            <Route path="/slugs/new" element={
              isAuthenticated ? <Layout onLogout={handleLogout}><CreateSlug /></Layout> : <Navigate to="/login" replace />
            } />

            <Route path="/leads" element={
              isAuthenticated ? <Layout onLogout={handleLogout}><Leads /></Layout> : <Navigate to="/login" replace />
            } />

            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
          </Routes>
        </HashRouter>
      </TutorialProvider>
    </AppProvider>
  );
};

export default App;
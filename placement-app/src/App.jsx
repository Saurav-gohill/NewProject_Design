import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AptitudeArena from './pages/AptitudeArena';
import InterviewHub from './pages/InterviewHub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Dashboard Layout Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<div className="text-white text-center mt-20">Explore Page (Coming Soon)</div>} />
          <Route path="/practice" element={<div className="text-white text-center mt-20">Practice Page (Coming Soon)</div>} />
          <Route path="/analytics" element={<div className="text-white text-center mt-20">Analytics Page (Coming Soon)</div>} />
          <Route path="/settings" element={<div className="text-white text-center mt-20">Settings Page (Coming Soon)</div>} />
        </Route>

        {/* Standalone Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aptitude-arena" element={<AptitudeArena />} />
        <Route path="/interview-hub" element={<InterviewHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

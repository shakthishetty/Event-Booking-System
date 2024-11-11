import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <EventProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/event/:id" element={<EventDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Toaster position="bottom-right" />
          </div>
        </EventProvider>
      </AuthProvider>
    </Router>
  );
}
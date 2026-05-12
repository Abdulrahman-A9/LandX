import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import PublicLayout from './components/layouts/PublicLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

// Public Pages
import Home from './pages/public/Home';
import NotFound from './pages/public/NotFound';
import Opportunities from './pages/public/Opportunities';
import OpportunityDetails from './pages/public/OpportunityDetails';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import News from './pages/public/News';
import InvestorJourney from './pages/public/InvestorJourney';
import InvestmentAnalysis from './pages/public/InvestmentAnalysis';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard Pages
import InvestorDashboard from './pages/investor/Dashboard';
import MunicipalityDashboard from './pages/municipality/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/opportunities" element={<PublicLayout><Opportunities /></PublicLayout>} />
        <Route path="/opportunities/:id" element={<PublicLayout><OpportunityDetails /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/news" element={<PublicLayout><News /></PublicLayout>} />
        <Route path="/investor-journey" element={<PublicLayout><InvestorJourney /></PublicLayout>} />
        <Route path="/investment-analysis" element={<PublicLayout><InvestmentAnalysis /></PublicLayout>} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Investor Dashboard Routes */}
        <Route path="/investor/*" element={<DashboardLayout role="investor" />}>
          <Route path="dashboard" element={<InvestorDashboard />} />
          <Route index element={<Navigate to="/investor/dashboard" replace />} />
        </Route>
        
        {/* Municipality Dashboard Routes */}
        <Route path="/municipality/*" element={<DashboardLayout role="municipality" />}>
          <Route path="dashboard" element={<MunicipalityDashboard />} />
          <Route index element={<Navigate to="/municipality/dashboard" replace />} />
        </Route>
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/*" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;

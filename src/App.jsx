import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
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
import InvestorOpportunities from './pages/investor/Opportunities';
import InvestorInvestments from './pages/investor/Investments';
import InvestorInquiries from './pages/investor/Inquiries';
import InvestorProfile from './pages/investor/Profile';
import MunicipalityDashboard from './pages/municipality/Dashboard';
import MunicipalityOpportunities from './pages/municipality/Opportunities';
import MunicipalityCreateOpportunity from './pages/municipality/CreateOpportunity';
import MunicipalityInquiries from './pages/municipality/Inquiries';
import MunicipalityAnnouncements from './pages/municipality/Announcements';
import MunicipalityNews from './pages/municipality/MunicipalityNews';
import MunicipalityProfile from './pages/municipality/Profile';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminMunicipalities from './pages/admin/Municipalities';
import AdminOpportunities from './pages/admin/AdminOpportunities';
import AdminAnalytics from './pages/admin/Analytics';
import AdminModeration from './pages/admin/Moderation';
import AdminSettings from './pages/admin/Settings';

function App() {
  return (
    <ThemeProvider>
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
          <Route path="opportunities" element={<InvestorOpportunities />} />
          <Route path="investments" element={<InvestorInvestments />} />
          <Route path="inquiries" element={<InvestorInquiries />} />
          <Route path="profile" element={<InvestorProfile />} />
          <Route index element={<Navigate to="/investor/dashboard" replace />} />
        </Route>
        
        {/* Municipality Dashboard Routes */}
        <Route path="/municipality/*" element={<DashboardLayout role="municipality" />}>
          <Route path="dashboard" element={<MunicipalityDashboard />} />
          <Route path="opportunities" element={<MunicipalityOpportunities />} />
          <Route path="opportunities/create" element={<MunicipalityCreateOpportunity />} />
          <Route path="announcements" element={<MunicipalityAnnouncements />} />
          <Route path="news" element={<MunicipalityNews />} />
          <Route path="inquiries" element={<MunicipalityInquiries />} />
          <Route path="profile" element={<MunicipalityProfile />} />
          <Route index element={<Navigate to="/municipality/dashboard" replace />} />
        </Route>
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/*" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="municipalities" element={<AdminMunicipalities />} />
          <Route path="opportunities" element={<AdminOpportunities />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="moderation" element={<AdminModeration />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

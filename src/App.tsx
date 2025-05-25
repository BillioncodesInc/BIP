import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/pages/Login';
import AdminRegister from './admin/pages/Register';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import EventsPage from './pages/EventsPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import FAQPage from './pages/FAQPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import StudentPortalPage from './pages/StudentPortalPage';
import TeamPage from './pages/TeamPage';
import ApplyPage from './pages/ApplyPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin Pages
import AdminDashboard from './admin/pages/Dashboard';
import AdminUsers from './admin/pages/Users';
import AdminTeamMembers from './admin/pages/TeamMembers';
import AdminPortfolio from './admin/pages/Portfolio';
import AdminBlog from './admin/pages/Blog';
import AdminEvents from './admin/pages/Events';
import AdminPrograms from './admin/pages/Programs';
import AdminStore from './admin/pages/Store';
import AdminDonations from './admin/pages/Donations';
import AdminVolunteers from './admin/pages/Volunteers';
import AdminFAQ from './admin/pages/FAQ';
import AdminSettings from './admin/pages/Settings';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="apply" element={<ApplyPage />} />
          <Route path="student-portal" element={<StudentPortalPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users"element={<AdminUsers />} />
          <Route path="team" element={<AdminTeamMembers />} />
          <Route path="portfolio" element={<AdminPortfolio />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="programs" element={<AdminPrograms />} />
          <Route path="store" element={<AdminStore />} />
          <Route path="donations" element={<AdminDonations />} />
          <Route path="volunteers" element={<AdminVolunteers />} />
          <Route path="faq" element={<AdminFAQ />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;
import { Link, useLocation } from 'react-router-dom';
import { 
  Users, BookOpen, Layout, FileText, Calendar, Heart, 
  ShoppingBag, CreditCard, HelpCircle, Settings, X,
  BarChart3
} from 'lucide-react';
import Logo from '../../components/ui/Logo';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: BarChart3 },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Team Members', href: '/admin/team', icon: Users },
  { name: 'Portfolio', href: '/admin/portfolio', icon: Layout },
  { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Programs', href: '/admin/programs', icon: BookOpen },
  { name: 'Store', href: '/admin/store', icon: ShoppingBag },
  { name: 'Donations', href: '/admin/donations', icon: CreditCard },
  { name: 'Volunteers', href: '/admin/volunteers', icon: Heart },
  { name: 'FAQ', href: '/admin/faq', icon: HelpCircle },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link to="/admin" className="flex items-center">
              <Logo />
              <div className="ml-2">
                <span className="text-lg font-bold block leading-tight">Admin</span>
                <span className="text-xs text-gray-600 leading-none">Dashboard</span>
              </div>
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${
                    isActive ? 'text-blue-800' : 'text-gray-400'
                  }`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    // Close mobile menu on larger screens
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  // Navigation links with dropdowns
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Programs',
      path: '/programs',
      dropdown: true,
      items: [
        { name: 'Scholarships & Grants', path: '/programs#scholarships' },
        { name: 'Tech Bootcamps', path: '/programs#bootcamps' },
        { name: 'Women in Tech', path: '/programs#women-in-tech' },
        { name: 'Mental Health', path: '/programs#mental-health' },
        { name: 'Innovation Challenges', path: '/programs#innovation' },
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo white={!isScrolled} />
          <div className="ml-2">
            <span className={`text-lg font-bold block leading-tight ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}>BillionCodes</span>
            <span className={`text-xs leading-none ${
              isScrolled ? 'text-gray-600' : 'text-blue-100'
            }`}>Initiative Program</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            !link.dropdown ? (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors ${
                    isActive 
                      ? 'text-blue-800' 
                      : isScrolled 
                        ? 'text-gray-700' 
                        : 'text-white hover:text-blue-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ) : (
              <div key={link.name} className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors flex items-center ${
                    activeDropdown === link.name 
                      ? 'text-blue-800' 
                      : isScrolled 
                        ? 'text-gray-700' 
                        : 'text-white hover:text-blue-800'
                  }`}
                  onClick={() => toggleDropdown(link.name)}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === link.name && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 animate-fade-in">
                    <div className="py-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/volunteer" 
            className={`btn btn-outline ${
              !isScrolled && 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Volunteer
          </Link>
          <Link to="/donate" className="btn btn-secondary">Donate</Link>
          <Link to="/student-portal" className="btn btn-primary">Student Portal</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-md ${
            isScrolled ? 'text-gray-700 hover:bg-blue-50' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu 
          links={navLinks} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </header>
  );
};

export default Header;
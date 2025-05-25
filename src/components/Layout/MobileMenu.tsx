import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: boolean;
  items?: { name: string; path: string }[];
}

interface MobileMenuProps {
  links: NavItem[];
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="lg:hidden animate-slide-down">
      <nav className="bg-white border-t py-4">
        <div className="container-custom space-y-1">
          {links.map((link) => (
            <div key={link.name} className="w-full">
              {!link.dropdown ? (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-md ${
                      isActive
                        ? 'bg-blue-50 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={onClose}
                >
                  {link.name}
                </NavLink>
              ) : (
                <div className="w-full">
                  <button
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-md ${
                      openDropdown === link.name
                        ? 'bg-blue-50 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => toggleDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    {openDropdown === link.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {openDropdown === link.name && (
                    <div className="pl-4 my-1 border-l-2 border-blue-100 ml-3">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 px-3 text-gray-600 hover:bg-gray-50 hover:text-blue-800 rounded"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 space-y-2">
            <Link
              to="/volunteer"
              className="block w-full text-center py-2 btn btn-outline"
              onClick={onClose}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              className="block w-full text-center py-2 btn btn-secondary"
              onClick={onClose}
            >
              Donate
            </Link>
            <Link
              to="/student-portal"
              className="block w-full text-center py-2 btn btn-primary"
              onClick={onClose}
            >
              Student Portal
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
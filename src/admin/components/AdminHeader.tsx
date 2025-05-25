import { Menu, Bell } from 'lucide-react';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

const AdminHeader = ({ onMenuClick }: AdminHeaderProps) => {
  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-sm lg:pl-64">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Admin"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
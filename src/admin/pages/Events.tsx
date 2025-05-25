import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical, Calendar, MapPin, Users, ChevronDown, Edit, Trash2 } from 'lucide-react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  image_url: string;
  created_at: string;
  updated_at: string;
}

const columnHelper = createColumnHelper<Event>();

const Events = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sample data - replace with actual data from your API
  const data: Event[] = [
    {
      id: '1',
      title: 'Tech Bootcamp: Web Development',
      description: 'Learn web development fundamentals in this intensive bootcamp.',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'University of Lagos',
      type: 'Workshop',
      capacity: 50,
      registered: 35,
      status: 'upcoming',
      image_url: 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg',
      created_at: '2024-03-01T00:00:00Z',
      updated_at: '2024-03-15T10:30:00Z',
    },
    {
      id: '2',
      title: 'Mental Health Awareness Seminar',
      description: 'Join us for an important discussion on student mental health.',
      date: '2024-04-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Ahmadu Bello University',
      type: 'Seminar',
      capacity: 100,
      registered: 75,
      status: 'upcoming',
      image_url: 'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg',
      created_at: '2024-03-05T00:00:00Z',
      updated_at: '2024-03-15T10:30:00Z',
    },
    {
      id: '3',
      title: 'Innovation Challenge 2024',
      description: 'Showcase your innovative solutions and win prizes.',
      date: '2024-05-01',
      time: '9:00 AM - 6:00 PM',
      location: 'Federal University of Technology, Akure',
      type: 'Competition',
      capacity: 200,
      registered: 150,
      status: 'upcoming',
      image_url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      created_at: '2024-03-10T00:00:00Z',
      updated_at: '2024-03-15T10:30:00Z',
    }
  ];

  const columns = [
    columnHelper.accessor('image_url', {
      header: '',
      cell: (info) => (
        <div className="w-16 h-16">
          <img
            src={info.getValue()}
            alt="Event"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      ),
    }),
    columnHelper.accessor('title', {
      header: 'Event',
      cell: (info) => (
        <div>
          <div className="font-medium text-gray-900">{info.getValue()}</div>
          <div className="text-sm text-gray-500 line-clamp-2">{info.row.original.description}</div>
        </div>
      ),
    }),
    columnHelper.accessor('date', {
      header: 'Date & Time',
      cell: (info) => (
        <div>
          <div className="font-medium">{new Date(info.getValue()).toLocaleDateString()}</div>
          <div className="text-sm text-gray-500">{info.row.original.time}</div>
        </div>
      ),
    }),
    columnHelper.accessor('location', {
      header: 'Location',
      cell: (info) => (
        <div className="flex items-center">
          <MapPin size={16} className="text-gray-400 mr-1" />
          <span>{info.getValue()}</span>
        </div>
      ),
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      cell: (info) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('registered', {
      header: 'Registration',
      cell: (info) => (
        <div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-gray-400" />
            <span className="font-medium">{info.getValue()}/{info.row.original.capacity}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(info.getValue() / info.row.original.capacity) * 100}%` }}
            ></div>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => {
        const statusColors = {
          upcoming: 'bg-blue-100 text-blue-800',
          ongoing: 'bg-green-100 text-green-800',
          completed: 'bg-gray-100 text-gray-800',
          cancelled: 'bg-red-100 text-red-800',
        };
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            statusColors[info.getValue()]
          }`}>
            {info.getValue()}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => (
        <div className="flex items-center justify-end gap-2">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setSelectedEvent(info.row.original)}
          >
            <Edit size={16} className="text-blue-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Trash2 size={16} className="text-red-600" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600">Manage events and registrations</p>
        </div>

        <Button
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
        >
          Create Event
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Events', value: '24', change: '+3' },
          { label: 'Upcoming Events', value: '12', change: '+2' },
          { label: 'Total Registrations', value: '1,250', change: '+125' },
          { label: 'Average Attendance', value: '85%', change: '+5%' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {stat.change}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button 
                className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={20} />
                <span>More Filters</span>
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="competition">Competition</option>
                    <option value="conference">Conference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Range
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Search location..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {table.getFlatHeaders().map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header.isPlaceholder ? null : header.column.columnDef.header as string}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {cell.renderCell()}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">
                Page {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    defaultValue={selectedEvent.title}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    defaultValue={selectedEvent.description}
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.date}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.time}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    defaultValue={selectedEvent.location}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.type}
                    >
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Competition">Competition</option>
                      <option value="Conference">Conference</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.status}
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Capacity
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.capacity}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Registered
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      defaultValue={selectedEvent.registered}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedEvent(null)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Events;
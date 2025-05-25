import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical, Calendar } from 'lucide-react';
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
    // Add more sample events...
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
          <div className="text-sm text-gray-500">{info.row.original.type}</div>
        </div>
      ),
    }),
    columnHelper.accessor('date', {
      header: 'Date & Time',
      cell: (info) => (
        <div>
          <div>{new Date(info.getValue()).toLocaleDateString()}</div>
          <div className="text-sm text-gray-500">{info.row.original.time}</div>
        </div>
      ),
    }),
    columnHelper.accessor('location', {
      header: 'Location',
    }),
    columnHelper.accessor('registered', {
      header: 'Registration',
      cell: (info) => (
        <div>
          <div className="font-medium">{info.getValue()}/{info.row.original.capacity}</div>
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
      cell: () => (
        <div className="flex items-center justify-end">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-4 h-4 text-gray-500" />
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

              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                <Calendar size={20} />
                <span>Calendar</span>
              </button>

              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                <Filter size={20} />
                <span>More Filters</span>
              </button>
            </div>
          </div>

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
    </div>
  );
};

export default Events;
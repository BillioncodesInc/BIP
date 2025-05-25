import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';
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

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_url: string;
  role: string;
  skills: string[];
  availability: 'weekdays' | 'weekends' | 'both' | 'flexible';
  status: 'active' | 'inactive' | 'pending';
  joined_at: string;
  hours_contributed: number;
}

const columnHelper = createColumnHelper<Volunteer>();

const Volunteers = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Sample data - replace with actual data from your API
  const data: Volunteer[] = [
    {
      id: '1',
      name: 'Sarah Ahmed',
      email: 'sarah@example.com',
      phone: '+234 800 123 4567',
      image_url: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg',
      role: 'Tech Mentor',
      skills: ['Web Development', 'Python', 'Teaching'],
      availability: 'weekends',
      status: 'active',
      joined_at: '2024-01-15T00:00:00Z',
      hours_contributed: 45,
    },
    // Add more sample volunteers...
  ];

  const columns = [
    columnHelper.accessor('image_url', {
      header: '',
      cell: (info) => (
        <div className="w-10 h-10">
          <img
            src={info.getValue()}
            alt="Volunteer"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      ),
    }),
    columnHelper.accessor('name', {
      header: 'Volunteer',
      cell: (info) => (
        <div>
          <div className="font-medium text-gray-900">{info.getValue()}</div>
          <div className="text-sm text-gray-500">{info.row.original.email}</div>
        </div>
      ),
    }),
    columnHelper.accessor('role', {
      header: 'Role',
      cell: (info) => (
        <div>
          <div>{info.getValue()}</div>
          <div className="flex flex-wrap gap-1 mt-1">
            {info.row.original.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('availability', {
      header: 'Availability',
      cell: (info) => (
        <span className="capitalize">{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor('hours_contributed', {
      header: 'Hours',
      cell: (info) => (
        <div className="font-medium">{info.getValue()} hrs</div>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => {
        const statusColors = {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-gray-100 text-gray-800',
          pending: 'bg-yellow-100 text-yellow-800',
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
    columnHelper.accessor('joined_at', {
      header: 'Joined',
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
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
          <h1 className="text-2xl font-bold text-gray-900">Volunteers</h1>
          <p className="text-gray-600">Manage volunteer profiles and assignments</p>
        </div>

        <Button
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
        >
          Add Volunteer
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Volunteers', value: '120' },
          { label: 'Active Volunteers', value: '85' },
          { label: 'Hours Contributed', value: '1,250' },
          { label: 'Programs Supported', value: '15' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
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
                placeholder="Search volunteers..."
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>

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

export default Volunteers;
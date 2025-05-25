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

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: 'web' | 'mobile' | 'design' | 'ecommerce' | 'software';
  image_url: string | null;
  client_name: string | null;
  completion_date: string | null;
  technologies: string[];
  is_featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

const columnHelper = createColumnHelper<PortfolioItem>();

const Portfolio = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Sample data - replace with actual data from your API
  const data: PortfolioItem[] = [
    {
      id: '1',
      title: 'E-Learning Platform',
      slug: 'e-learning-platform',
      description: 'A comprehensive e-learning platform for Nigerian students.',
      category: 'web',
      image_url: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      client_name: 'Nigerian Education Board',
      completion_date: '2024-02-15',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      is_featured: true,
      order_index: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-03-15T10:30:00Z',
    },
    // Add more sample portfolio items...
  ];

  const columns = [
    columnHelper.accessor('image_url', {
      header: '',
      cell: ({ getValue }) => (
        <div className="w-16 h-16">
          <img
            src={getValue() || 'https://via.placeholder.com/64'}
            alt="Portfolio"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      ),
    }),
    columnHelper.accessor('title', {
      header: 'Project',
      cell: ({ getValue, row }) => (
        <div>
          <div className="font-medium text-gray-900">{getValue()}</div>
          <div className="text-sm text-gray-500">{row.original.client_name}</div>
        </div>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: ({ getValue }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('technologies', {
      header: 'Technologies',
      cell: ({ getValue }) => (
        <div className="flex flex-wrap gap-1">
          {getValue().map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      ),
    }),
    columnHelper.accessor('is_featured', {
      header: 'Featured',
      cell: ({ getValue }) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          getValue()
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {getValue() ? 'Yes' : 'No'}
        </span>
      ),
    }),
    columnHelper.accessor('completion_date', {
      header: 'Completed',
      cell: ({ getValue }) => getValue() 
        ? new Date(getValue()!).toLocaleDateString() 
        : 'In Progress',
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
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-gray-600">Manage portfolio projects and case studies</p>
        </div>

        <Button
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
        >
          Add Project
        </Button>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="design">Design</option>
                <option value="ecommerce">E-commerce</option>
                <option value="software">Software</option>
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
                        {cell.column.columnDef.cell && typeof cell.column.columnDef.cell === 'function'
                          ? cell.column.columnDef.cell(cell)
                          : null}
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

export default Portfolio;
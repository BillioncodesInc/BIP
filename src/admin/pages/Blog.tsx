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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  category: string;
  tags: string[];
  image_url: string;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const columnHelper = createColumnHelper<BlogPost>();

const Blog = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Sample data - replace with actual data from your API
  const data: BlogPost[] = [
    {
      id: '1',
      title: 'How the BIP Scholarship Transformed My Academic Journey',
      slug: 'scholarship-transformed-academic-journey',
      excerpt: 'Adewale shares his inspiring story of overcoming financial challenges to pursue his degree in Computer Science.',
      content: '...',
      author: {
        id: '1',
        name: 'Adewale Johnson',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      },
      category: 'Success Stories',
      tags: ['Scholarship', 'Education', 'Success'],
      image_url: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg',
      status: 'published',
      published_at: '2024-03-15T10:30:00Z',
      created_at: '2024-03-14T15:00:00Z',
      updated_at: '2024-03-15T10:30:00Z',
    },
    // Add more sample blog posts...
  ];

  const columns = [
    columnHelper.accessor('image_url', {
      header: '',
      cell: (info) => (
        <div className="w-16 h-16">
          <img
            src={info.getValue()}
            alt="Blog"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      ),
    }),
    columnHelper.accessor('title', {
      header: 'Title',
      cell: (info) => (
        <div>
          <div className="font-medium text-gray-900">{info.getValue()}</div>
          <div className="text-sm text-gray-500 truncate max-w-md">
            {info.row.original.excerpt}
          </div>
        </div>
      ),
    }),
    columnHelper.accessor('author', {
      header: 'Author',
      cell: (info) => (
        <div className="flex items-center">
          <img
            src={info.getValue().image}
            alt={info.getValue().name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{info.getValue().name}</span>
        </div>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Category',
      cell: (info) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          info.getValue() === 'published'
            ? 'bg-green-100 text-green-800'
            : info.getValue() === 'draft'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('published_at', {
      header: 'Published',
      cell: (info) => info.getValue()
        ? new Date(info.getValue()!).toLocaleDateString()
        : 'Not published',
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
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600">Manage blog content and publications</p>
        </div>

        <Button
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
        >
          Create Post
        </Button>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search posts..."
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
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
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

export default Blog;
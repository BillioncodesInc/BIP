import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BookOpen, Calendar, Heart, ShoppingBag, 
  TrendingUp, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import Card from '../../components/ui/Card';

const stats = [
  {
    name: 'Total Users',
    value: '5,234',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Active Programs',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: BookOpen,
  },
  {
    name: 'Upcoming Events',
    value: '12',
    change: '-2',
    trend: 'down',
    icon: Calendar,
  },
  {
    name: 'Volunteers',
    value: '342',
    change: '+18%',
    trend: 'up',
    icon: Heart,
  },
  {
    name: 'Store Products',
    value: '156',
    change: '+5',
    trend: 'up',
    icon: ShoppingBag,
  },
  {
    name: 'Monthly Revenue',
    value: '$24,500',
    change: '+8%',
    trend: 'up',
    icon: TrendingUp,
  },
];

const Dashboard = () => {
  const [period] = useState('month');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>

        <select
          value={period}
          onChange={(e) => console.log(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
        >
          <option value="day">Last 24 hours</option>
          <option value="week">Last 7 days</option>
          <option value="month">Last 30 days</option>
          <option value="year">Last 12 months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-800" />
                </div>
                <div className={`flex items-center ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="text-sm font-medium">{stat.change}</span>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 ml-1" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.name}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add more dashboard components here */}
    </div>
  );
};

export default Dashboard;
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { User, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      await signIn(data.username, data.password);
      toast.success('Login successful');
      navigate('/admin');
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="mt-2 text-gray-600">Sign in to your admin account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                  {...register('username', {
                    required: 'Username is required'
                  })}
                />
                <User className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                  {...register('password', { required: 'Password is required' })}
                />
                <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
              icon={<LogIn size={18} />}
            >
              Sign In
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don't have an admin account?{' '}
                <Link to="/admin/register" className="text-blue-800 hover:underline font-medium">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
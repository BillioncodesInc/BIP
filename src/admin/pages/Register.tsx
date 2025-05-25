import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Mail, Lock, Send } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: 'root' | 'regular';
  otp: string;
}

const Register = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const password = watch('password');

  const sendOTP = async () => {
    const email = watch('email');
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }

      setOtpSent(true);
      toast.success('OTP sent to your email');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      await registerUser(data.email, data.password, data.role);
      toast.success('Registration successful');
      navigate('/admin/login');
    } catch (error) {
      toast.error('Registration failed');
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
            <h2 className="text-3xl font-bold text-gray-900">Admin Registration</h2>
            <p className="mt-2 text-gray-600">Create your admin account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    },
                    validate: value => 
                      value === 'jhardeyemor@gmail.com' || 'Unauthorized email address'
                  })}
                />
                <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {!otpSent && (
              <Button
                type="button"
                variant="primary"
                fullWidth
                onClick={sendOTP}
                disabled={loading || !watch('email') || errors.email !== undefined}
              >
                Send OTP
              </Button>
            )}

            {otpSent && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    OTP Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                    {...register('otp', { required: 'OTP is required' })}
                  />
                  {errors.otp && (
                    <p className="mt-1 text-sm text-red-500">{errors.otp.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      {...register('username', {
                        required: 'Username is required',
                        minLength: {
                          value: 3,
                          message: 'Username must be at least 3 characters'
                        }
                      })}
                    />
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
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters'
                        }
                      })}
                    />
                    <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value => 
                          value === password || 'Passwords do not match'
                      })}
                    />
                    <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Type
                  </label>
                  <div className="mt-2 space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-800"
                        value="root"
                        {...register('role', { required: 'Please select a user type' })}
                      />
                      <span className="ml-2">Root User</span>
                    </label>
                    <br />
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-800"
                        value="regular"
                        {...register('role', { required: 'Please select a user type' })}
                      />
                      <span className="ml-2">Regular User</span>
                    </label>
                  </div>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={loading}
                  icon={<Send size={18} />}
                >
                  Register
                </Button>
              </>
            )}
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
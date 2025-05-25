import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const StudentPortalPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  useEffect(() => {
    document.title = 'Student Portal | BillionCodes Initiative Program';
  }, []);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // In a real application, you would authenticate the user
    alert('Login functionality would be implemented in a production environment.');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Student Portal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100"
            >
              Access your scholarship information, applications, and program resources.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <Section background="white">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Student Login</h2>
              <p className="text-gray-600 mt-2">Sign in to access your personalized dashboard</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="student@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="••••••••"
                    {...register('password', { required: 'Password is required' })}
                  />
                  <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <EyeOff size={18} className="text-gray-400" />
                    ) : (
                      <Eye size={18} className="text-gray-400" />
                    )}
                  </div>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded"
                    {...register('remember')}
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-blue-800 hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit"
                variant="primary"
                icon={<LogIn size={18} />}
                fullWidth
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-800 hover:underline font-medium">
                  Register here
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Student Portal Features</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="bg-blue-200 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                <div>
                  <span className="font-semibold">Application Management:</span> 
                  <span className="text-gray-700"> Apply for scholarships, tech bootcamps, and other programs.</span>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-200 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                <div>
                  <span className="font-semibold">Document Repository:</span> 
                  <span className="text-gray-700"> Access and download certificates, recommendation letters, and program materials.</span>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-200 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                <div>
                  <span className="font-semibold">Progress Tracking:</span> 
                  <span className="text-gray-700"> Monitor your application status and program participation.</span>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-200 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                <div>
                  <span className="font-semibold">Support System:</span> 
                  <span className="text-gray-700"> Access to chat support and ticket system for assistance.</span>
                </div>
              </li>
              <li className="flex">
                <span className="bg-blue-200 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                  5
                </span>
                <div>
                  <span className="font-semibold">Event Registration:</span> 
                  <span className="text-gray-700"> Sign up for upcoming events, workshops, and bootcamps.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do I apply for a scholarship?</h3>
              <p className="text-gray-600">
                You can apply for scholarships by creating an account in our Student Portal, filling out the application form, and submitting the required documents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What documents do I need to upload?</h3>
              <p className="text-gray-600">
                Required documents typically include your academic transcripts, admission letter, student ID, and a personal statement. Specific requirements may vary by program.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">I forgot my password. What should I do?</h3>
              <p className="text-gray-600">
                Click on the "Forgot Password" link on the login page. You will receive instructions to reset your password via email.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How can I check the status of my application?</h3>
              <p className="text-gray-600">
                After logging into your Student Portal, navigate to the "Applications" section to view the status of all your submissions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Who can I contact for technical support?</h3>
              <p className="text-gray-600">
                For technical issues with the portal, please email support@billioncodes.org or use the live chat feature within the portal.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default StudentPortalPage;
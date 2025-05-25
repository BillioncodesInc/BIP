import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, FileText, Upload, Clock } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface ApplicationFormData {
  program: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  course: string;
  level: string;
  cgpa: string;
  documents: FileList;
  statement: string;
}

const ApplyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>();

  useEffect(() => {
    document.title = 'Apply Now | BillionCodes Initiative Program';
  }, []);

  const onSubmit = (data: ApplicationFormData) => {
    console.log(data);
    // In a real application, you would send this data to your server
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  return (
    <>
      <PageHeader
        title="Apply Now"
        description="Take the first step towards your educational and career goals."
      />

      {/* Application Process */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Application Process</h2>
          <p className="text-gray-600">
            Follow these steps to submit your application for our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: FileText,
              title: 'Complete Form',
              description: 'Fill out the application form with your personal and academic information.'
            },
            {
              icon: Upload,
              title: 'Upload Documents',
              description: 'Submit required documents including transcripts and identification.'
            },
            {
              icon: Clock,
              title: 'Await Response',
              description: 'Applications are reviewed within 2-3 weeks of submission.'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Program
                </label>
                <select
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.program ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('program', { required: 'Please select a program' })}
                >
                  <option value="">Select a program</option>
                  <option value="scholarship">Scholarship Program</option>
                  <option value="bootcamp">Tech Bootcamp</option>
                  <option value="women-in-tech">Women in Tech</option>
                  <option value="innovation">Innovation Challenge</option>
                </select>
                {errors.program && (
                  <p className="mt-1 text-sm text-red-500">{errors.program.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.institution ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('institution', { required: 'Institution is required' })}
                />
                {errors.institution && (
                  <p className="mt-1 text-sm text-red-500">{errors.institution.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course of Study
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.course ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('course', { required: 'Course is required' })}
                  />
                  {errors.course && (
                    <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.level ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('level', { required: 'Level is required' })}
                  >
                    <option value="">Select level</option>
                    <option value="100">100 Level</option>
                    <option value="200">200 Level</option>
                    <option value="300">300 Level</option>
                    <option value="400">400 Level</option>
                    <option value="500">500 Level</option>
                  </select>
                  {errors.level && (
                    <p className="mt-1 text-sm text-red-500">{errors.level.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CGPA
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.cgpa ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('cgpa', { required: 'CGPA is required' })}
                  />
                  {errors.cgpa && (
                    <p className="mt-1 text-sm text-red-500">{errors.cgpa.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Documents
                </label>
                <input
                  type="file"
                  multiple
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.documents ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('documents', { required: 'Required documents must be uploaded' })}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Upload your transcript, ID, and other required documents (PDF format, max 5MB each)
                </p>
                {errors.documents && (
                  <p className="mt-1 text-sm text-red-500">{errors.documents.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Personal Statement
                </label>
                <textarea
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.statement ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about yourself and why you're applying..."
                  {...register('statement', { required: 'Personal statement is required' })}
                ></textarea>
                {errors.statement && (
                  <p className="mt-1 text-sm text-red-500">{errors.statement.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                icon={<Send size={18} />}
                fullWidth
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default ApplyPage;
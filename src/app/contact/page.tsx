'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertCircle,
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { z } from 'zod';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(11, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  department: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      department: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Contact form submitted:', data);

      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ["54 St Mary's Rd", 'Southampton SO14 0BH', 'United Kingdom'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 7577-062211', '+44 7577-062212'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@visernic.com', 'info@visernic.com'],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 2:00 PM',
        'Sun: Closed',
      ],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const departments = [
    'General Inquiry',
    'Admission',
    'Academic Affairs',
    'Student Support',
    'IT Support',
    'Career Services',
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
              <div className="bg-white/20 p-2 sm:p-3 md:p-4 rounded-2xl backdrop-blur-sm">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              Get In Touch
              <br />
              <span className="text-indigo-200">With Us</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed px-4">
              Have questions or need assistance? We're here to help. Reach out
              to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 sm:py-12 md:py-16 -mt-6 sm:-mt-7 md:-mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div
                    className={`${info.color} p-2.5 sm:p-3 rounded-lg inline-block mb-2 sm:mb-3 md:mb-4`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-0.5 sm:mb-1 md:mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1.5 sm:mb-2">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Success Message */}
              {success && (
                <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-1.5 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-green-600 font-semibold">
                      Message sent successfully!
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-green-500">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-1.5 sm:gap-2">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm md:text-base text-red-600">
                    {error}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3 sm:space-y-4 md:space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                        <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                        <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className={`w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                        <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+880 1712 345678"
                        className={`w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Department
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                        <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                      </div>
                      <select
                        {...register('department')}
                        className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="Brief subject of your message"
                    className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                  />
                  {errors.subject && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Describe your inquiry in detail..."
                    className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                  <p className="mt-0.5 text-[10px] text-gray-400">
                    Minimum 20 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || success}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-2.5 md:py-3 px-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Map & Info */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center p-3 sm:p-4 md:p-6">
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-indigo-600 mx-auto mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                      Find Us Here
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                      54 St Mary's Rd, Southampton SO14 0BH, UK
                    </p>
                    <button className="mt-2 sm:mt-3 md:mt-4 bg-indigo-600 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:bg-indigo-700 transition flex items-center gap-1.5 sm:gap-2 mx-auto">
                      <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                      View on Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-blue-50 p-1.5 sm:p-2 rounded-lg">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                        Phone
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">
                        +44 7577-062211
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-purple-50 p-1.5 sm:p-2 rounded-lg">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                        Email
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 break-all">
                        support@visernic.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="bg-green-50 p-1.5 sm:p-2 rounded-lg">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                        Working Hours
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">
                        Mon-Fri: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mb-2 sm:mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-2 sm:gap-3 md:gap-4">
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-600 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaFacebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-400 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 hover:text-white transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-red-600 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
                    >
                      <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-600 hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 text-white text-center">
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-0.5 sm:mb-1">
                  We're Here to Help
                </h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-indigo-100">
                  Our team is ready to assist you with any questions or
                  concerns.
                </p>
                <button className="mt-2 sm:mt-3 md:mt-4 bg-white text-indigo-700 px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:bg-indigo-50 transition inline-flex items-center gap-1.5 sm:gap-2">
                  Get Support{' '}
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              Frequently Asked{' '}
              <span className="text-indigo-600">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 px-4">
              Find answers to common questions about our services and support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3 md:space-y-4">
            {[
              {
                q: 'What are your working hours?',
                a: 'We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM. Sunday is closed.',
              },
              {
                q: 'How quickly do you respond to inquiries?',
                a: 'We typically respond to all inquiries within 24 hours during business days.',
              },
              {
                q: 'Do you offer support via phone?',
                a: 'Yes, you can reach us by phone at +44 7577-062211 during our working hours.',
              },
              {
                q: 'Where are you located?',
                a: "Our office is located at 54 St Mary's Rd, Southampton SO14 0BH, United Kingdom.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-3.5 sm:p-4 md:p-5 transition-colors duration-200"
              >
                <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-0.5 sm:mb-1">
                  {faq.q}
                </h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                About SIU
              </h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-[10px] sm:text-xs md:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Accreditation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Campus
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Academics
              </h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-[10px] sm:text-xs md:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Library
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Student Life
              </h3>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-[10px] sm:text-xs md:text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Clubs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Scholarships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Connect
              </h3>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <a href="#" className="hover:text-white transition">
                  <FaFacebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <FaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 md:mt-4">
                © 2026 SIU. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

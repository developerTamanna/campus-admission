'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  GraduationCap,
  Phone,
  Upload,
  User,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Application form validation schema
const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Please select your gender'),
  nationality: z.string().min(1, 'Nationality is required'),

  // Contact Information
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(11, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),

  // Academic Information
  program: z.string().min(1, 'Please select a program'),
  department: z.string().min(1, 'Please select a department'),
  semester: z.string().min(1, 'Please select a semester'),
  academicYear: z.string().min(1, 'Please select academic year'),

  // Educational Background
  previousSchool: z.string().min(2, 'Previous school name is required'),
  graduationYear: z.string().min(1, 'Graduation year is required'),
  gpa: z.string().min(1, 'GPA is required'),

  // Additional Information
  motivation: z.string().min(50, 'Please write at least 50 characters'),
  extracurricular: z.string().optional(),
  references: z.string().optional(),

  // Documents
  transcript: z.any().optional(),
  certificate: z.any().optional(),
  photo: z.any().optional(),

  // Terms
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const ApplicationPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      program: '',
      department: '',
      semester: '',
      academicYear: '',
      previousSchool: '',
      graduationYear: '',
      gpa: '',
      motivation: '',
      extracurricular: '',
      references: '',
      agreeTerms: false,
    },
  });

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields as any);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1:
        return [
          'firstName',
          'lastName',
          'dateOfBirth',
          'gender',
          'nationality',
        ];
      case 2:
        return ['email', 'phone', 'address', 'city', 'country'];
      case 3:
        return [
          'program',
          'department',
          'semester',
          'academicYear',
          'previousSchool',
          'graduationYear',
          'gpa',
        ];
      case 4:
        return ['motivation'];
      default:
        return [];
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Application submitted:', data);

      // Create application data with ID
      const applicationData = {
        ...data,
        applicationId: `APP-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        status: 'pending',
      };

      // Store in localStorage for demo
      localStorage.setItem('applicationData', JSON.stringify(applicationData));

      setSuccess(true);

      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        router.push('/application-success');
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const StepIndicator = ({ number, label, isActive, isCompleted }: any) => (
    <div className="flex items-center flex-1">
      <div className="flex flex-col items-center">
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
            isActive
              ? 'bg-indigo-600 text-white ring-2 sm:ring-4 ring-indigo-200'
              : isCompleted
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-500'
          }`}
        >
          {isCompleted ? (
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          ) : (
            number
          )}
        </div>
        <span className="text-[10px] sm:text-xs md:text-sm mt-1 font-medium text-gray-600 hidden sm:block whitespace-nowrap">
          {label}
        </span>
      </div>
      {number < totalSteps && (
        <div
          className={`flex-1 h-0.5 mx-1 sm:mx-2 md:mx-4 ${
            isCompleted ? 'bg-green-500' : 'bg-gray-200'
          }`}
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-4 sm:py-6 md:py-8 lg:py-12 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
              <div className="bg-indigo-600 p-2 sm:p-2.5 md:p-3 rounded-2xl">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              University Application Form
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 sm:mt-1.5 md:mt-2">
              Complete all sections to submit your application
            </p>
          </div>

          {/* Progress Steps */}
          <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-between items-center">
              {[
                { number: 1, label: 'Personal' },
                { number: 2, label: 'Contact' },
                { number: 3, label: 'Academic' },
                { number: 4, label: 'Additional' },
              ].map((step, index) => (
                <StepIndicator
                  key={index}
                  number={step.number}
                  label={step.label}
                  isActive={currentStep === step.number}
                  isCompleted={currentStep > step.number}
                />
              ))}
            </div>
            <div className="text-center mt-2 sm:mt-3 md:mt-4">
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8"
          >
            {/* Error Message */}
            {error && (
              <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-1.5 sm:gap-2">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-green-600 font-semibold">
                    Application submitted successfully!
                  </p>
                  <p className="text-[10px] sm:text-xs text-green-500 mt-0.5">
                    Redirecting to confirmation page...
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Personal Information
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      placeholder="John"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.firstName && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      placeholder="Doe"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.lastName && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      {...register('dateOfBirth')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.dateOfBirth
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.dateOfBirth && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Gender *
                    </label>
                    <select
                      {...register('gender')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.gender ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      {...register('nationality')}
                      placeholder="Bangladeshi"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.nationality
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.nationality && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.nationality.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Contact Information
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="student@email.com"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.email && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="+880 1712 345678"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.phone && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    placeholder="123 Main Street"
                    className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                  />
                  {errors.address && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register('city')}
                      placeholder="Dhaka"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.city && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      {...register('country')}
                      placeholder="Bangladesh"
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    />
                    {errors.country && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Academic Information */}
            {currentStep === 3 && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Academic Information
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Program *
                    </label>
                    <select
                      {...register('program')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.program ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    >
                      <option value="">Select Program</option>
                      <option value="bsc">Bachelor of Science</option>
                      <option value="bss">Bachelor of Social Science</option>
                      <option value="bba">
                        Bachelor of Business Administration
                      </option>
                      <option value="msc">Master of Science</option>
                      <option value="mba">
                        Master of Business Administration
                      </option>
                    </select>
                    {errors.program && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.program.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Department *
                    </label>
                    <select
                      {...register('department')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.department ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    >
                      <option value="">Select Department</option>
                      <option value="cse">
                        Computer Science & Engineering
                      </option>
                      <option value="eee">
                        Electrical & Electronic Engineering
                      </option>
                      <option value="bba">Business Administration</option>
                      <option value="economics">Economics</option>
                      <option value="english">English</option>
                    </select>
                    {errors.department && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.department.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Semester *
                    </label>
                    <select
                      {...register('semester')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.semester ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    >
                      <option value="">Select Semester</option>
                      <option value="1">1st Semester</option>
                      <option value="2">2nd Semester</option>
                      <option value="3">3rd Semester</option>
                      <option value="4">4th Semester</option>
                      <option value="5">5th Semester</option>
                      <option value="6">6th Semester</option>
                      <option value="7">7th Semester</option>
                      <option value="8">8th Semester</option>
                    </select>
                    {errors.semester && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.semester.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                      Academic Year *
                    </label>
                    <select
                      {...register('academicYear')}
                      className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                        errors.academicYear
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                    >
                      <option value="">Select Year</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                      <option value="2026-2027">2026-2027</option>
                    </select>
                    {errors.academicYear && (
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                        {errors.academicYear.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4 md:pt-5">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                    Previous Education
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                        School/College *
                      </label>
                      <input
                        type="text"
                        {...register('previousSchool')}
                        placeholder="ABC School"
                        className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                          errors.previousSchool
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                      />
                      {errors.previousSchool && (
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                          {errors.previousSchool.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                        Graduation Year *
                      </label>
                      <input
                        type="text"
                        {...register('graduationYear')}
                        placeholder="2023"
                        className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                          errors.graduationYear
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                      />
                      {errors.graduationYear && (
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                          {errors.graduationYear.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                        GPA *
                      </label>
                      <input
                        type="text"
                        {...register('gpa')}
                        placeholder="3.50"
                        className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                          errors.gpa ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base`}
                      />
                      {errors.gpa && (
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                          {errors.gpa.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Additional Information
                  </h2>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Why do you want to join SIU? *
                  </label>
                  <textarea
                    {...register('motivation')}
                    rows={4}
                    placeholder="Describe your motivation, goals, and why you chose SIU..."
                    className={`w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border ${
                      errors.motivation ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base resize-y`}
                  />
                  {errors.motivation && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.motivation.message}
                    </p>
                  )}
                  <p className="mt-0.5 text-[10px] text-gray-400">
                    Minimum 50 characters
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Extracurricular Activities
                  </label>
                  <textarea
                    {...register('extracurricular')}
                    rows={2}
                    placeholder="List your extracurricular activities, hobbies, or achievements..."
                    className="w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base resize-y"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    References (Optional)
                  </label>
                  <textarea
                    {...register('references')}
                    rows={2}
                    placeholder="Provide names and contact of references..."
                    className="w-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm md:text-base resize-y"
                  />
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                    Document Upload
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-2.5 sm:p-3 md:p-4 text-center hover:border-indigo-500 transition">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gray-400 mb-1" />
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 cursor-pointer">
                        Transcript
                        <input
                          type="file"
                          {...register('transcript')}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                      <p className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">
                        PDF, DOC (max 5MB)
                      </p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-2.5 sm:p-3 md:p-4 text-center hover:border-indigo-500 transition">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gray-400 mb-1" />
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 cursor-pointer">
                        Certificate
                        <input
                          type="file"
                          {...register('certificate')}
                          accept=".pdf,.jpg,.png"
                          className="hidden"
                        />
                      </label>
                      <p className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">
                        PDF, JPG, PNG (max 5MB)
                      </p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-2.5 sm:p-3 md:p-4 text-center hover:border-indigo-500 transition">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gray-400 mb-1" />
                      <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 cursor-pointer">
                        Photo
                        <input
                          type="file"
                          {...register('photo')}
                          accept=".jpg,.png"
                          className="hidden"
                        />
                      </label>
                      <p className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">
                        JPG, PNG (max 2MB)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  <input
                    type="checkbox"
                    {...register('agreeTerms')}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 flex-shrink-0"
                  />
                  <div>
                    <label className="text-[10px] sm:text-xs md:text-sm text-gray-700">
                      I confirm that all the information provided is true and
                      accurate. I agree to the{' '}
                      <a href="#" className="text-indigo-600 hover:underline">
                        terms and conditions
                      </a>{' '}
                      of admission.
                    </label>
                    {errors.agreeTerms && (
                      <p className="mt-0.5 text-[10px] sm:text-xs text-red-600">
                        {errors.agreeTerms.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 md:pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-indigo-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
                >
                  Next
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading || success}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-3.5 w-3.5 sm:h-4 sm:w-4 text-white"
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
                      Submitting...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Submitted!
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;

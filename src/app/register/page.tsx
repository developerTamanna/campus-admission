'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  Phone,
  User,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Form validation schema
const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Full name must be at least 2 characters')
      .max(50, 'Full name must not exceed 50 characters')
      .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),

    phoneNumber: z
      .string()
      .min(11, 'Phone number must be at least 11 digits')
      .max(15, 'Phone number must not exceed 15 digits')
      .regex(/^[0-9+\-\s]+$/, 'Please enter a valid phone number'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[^A-Za-z0-9]/,
        'Password must contain at least one special character',
      ),

    confirmPassword: z.string().min(8, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call for registration
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Demo registration - accept any valid data
      console.log('Registration data:', data);

      // Show success message
      setSuccess(true);

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 2000);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 w-full overflow-hidden">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Branding */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[600px] xl:min-h-[700px]">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-white/20 p-1 sm:p-1.5 md:p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold">
                SIU Portal
              </span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Create Your
              <br />
              <span className="text-blue-200">Student Account</span>
            </h1>

            <div className="border-t border-white/20 pt-3 sm:pt-4 md:pt-5 lg:pt-6 space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Join the Sylhet International University
                <br className="hidden sm:block" />
                <span className="font-medium">student community today.</span>
              </p>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 sm:gap-3 text-blue-100/80">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs md:text-sm">
                    Access course materials
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-blue-100/80">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs md:text-sm">
                    Connect with classmates
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-blue-100/80">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs md:text-sm">
                    Track your academic progress
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3 sm:gap-4 pt-1 sm:pt-2 md:pt-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-[8px] sm:text-xs font-bold text-center">
                  SIU
                </span>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-blue-200">
                  Sylhet International University
                </p>
                <p className="text-[10px] sm:text-xs text-blue-200/70">
                  Est. 2001
                </p>
              </div>
            </div>
          </div>

          <div className="text-[10px] sm:text-xs text-blue-200/60 mt-3 sm:mt-4 md:mt-6 lg:mt-8 hidden sm:block">
            © 2026 SIU. All rights reserved.
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="lg:w-1/2 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 bg-white flex items-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                Register
              </h2>
              <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                Create your account to get started
              </p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <p className="text-xs sm:text-sm text-green-600">
                    Registration successful! Redirecting to home page...
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  <p className="text-xs sm:text-sm text-red-600">{error}</p>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4 md:space-y-5"
            >
              {/* Full Name Field */}
              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1.5 md:mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="Md. Student Rahman"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1.5 md:mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="student@siu.edu.bd"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1.5 md:mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    {...register('phoneNumber')}
                    placeholder="+880 1712 345678"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1.5 md:mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Create a strong password"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-8 sm:pr-10 md:pr-12 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-2.5 sm:pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
                {/* Password strength indicator */}
                {password && password.length > 0 && (
                  <div className="mt-1.5 sm:mt-2">
                    <div className="flex gap-0.5 sm:gap-1 h-1">
                      <div
                        className={`flex-1 rounded ${
                          password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded ${
                          /[A-Z]/.test(password) && /[a-z]/.test(password)
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded ${
                          /[0-9]/.test(password)
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded ${
                          /[^A-Za-z0-9]/.test(password)
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    </div>
                    <p className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5 sm:mt-1">
                      Password must contain: 8+ chars, uppercase, lowercase,
                      number & special char
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1.5 md:mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    placeholder="Confirm your password"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-8 sm:pr-10 md:pr-12 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.confirmPassword
                        ? 'border-red-500'
                        : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-2.5 sm:pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-1.5 sm:gap-2">
                <input
                  type="checkbox"
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 flex-shrink-0"
                  required
                />
                <label className="text-[8px] sm:text-[10px] md:text-xs text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || success}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-2.5 md:py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
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
                    Creating Account...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    Registration Successful!
                  </>
                ) : (
                  'Create Account'
                )}
              </button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => router.push('/login')}
                    className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-3 sm:my-4 md:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-[10px] sm:text-xs md:text-sm">
                <span className="px-2 sm:px-3 md:px-4 bg-white text-gray-500">
                  Secure Registration
                </span>
              </div>
            </div>

            {/* Footer Text */}
            <p className="text-center text-[8px] sm:text-[10px] md:text-xs text-gray-400">
              Your information is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

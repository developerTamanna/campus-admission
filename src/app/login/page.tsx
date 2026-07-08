'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, GraduationCap, Lock, Mail, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '@/context/AuthContext';

// Form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create user data
      const userData = {
        email: data.email,
        name: data.email.split('@')[0],
        loginTime: new Date().toISOString(),
        isAuthenticated: true,
      };

      // Use auth context to login
      login(userData);

      console.log('Login successful:', data);

      // Redirect to home page
      router.push('/');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 w-full overflow-hidden">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Branding */}
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-between min-h-[280px] sm:min-h-[300px] lg:min-h-[500px] xl:min-h-[600px]">
          <div className="lg:hidden flex justify-end">
            <button className="text-white/80 hover:text-white p-1.5 sm:p-2">
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-8">
              <div className="bg-white/20 p-1 sm:p-1.5 md:p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold">SIU Portal</span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Welcome to the
              <br />
              <span className="text-indigo-200">Student Portal</span>
            </h1>

            <div className="border-t border-white/20 pt-3 sm:pt-4 md:pt-5 lg:pt-6 space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-indigo-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Only valid students of Sylhet International University
                <br className="hidden sm:block" />
                <span className="font-medium">
                  are eligible to use this portal.
                </span>
              </p>

              <p className="text-indigo-100/80 text-[10px] sm:text-xs md:text-sm">
                To access any service, please provide
                <br className="hidden sm:block" />
                your username and password to sign in.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3 sm:gap-4 pt-1 sm:pt-2 md:pt-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <span className="text-[8px] sm:text-xs font-bold text-center">SIU</span>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm text-indigo-200">
                  Sylhet International University
                </p>
                <p className="text-[10px] sm:text-xs text-indigo-200/70">Est. 2001</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] sm:text-xs text-indigo-200/60 mt-3 sm:mt-4 md:mt-6 lg:mt-8 hidden sm:block">
            © 2026 SIU. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-1/2 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 bg-white flex items-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                Sign In
              </h2>
              <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs sm:text-sm text-red-600">{error}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
            >
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
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-0.5 sm:mb-1.5 md:mb-2">
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-[10px] sm:text-xs md:text-sm text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                    <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="••••••••"
                    className={`w-full pl-8 sm:pl-9 md:pl-10 pr-8 sm:pr-10 md:pr-12 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
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
              </div>

              {/* Remember Me */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 sm:gap-2">
                <label className="flex items-center gap-1.5 sm:gap-2">
                  <input
                    type="checkbox"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-500">or</span>
                  <button
                    type="button"
                    onClick={() => router.push('/register')}
                    className="text-[10px] sm:text-xs md:text-sm text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
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
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Demo Credentials */}
              <div className="text-center">
                <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">
                  Try any valid email and password (min 6 characters)
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
                  Secure Login
                </span>
              </div>
            </div>

            {/* Footer Text */}
            <p className="text-center text-[8px] sm:text-[10px] md:text-xs text-gray-400">
              Protected by SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

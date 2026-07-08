'use client';

import React from 'react';
import {
  FaArrowRight,
  FaAward,
  FaCalendarAlt,
  FaChartLine,
  FaDownload,
  FaPlay,
  FaUsers,
} from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0a2b4e] overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#6aabf7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#6aabf7] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#1a3f64] text-[#6aabf7] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              <FaCalendarAlt className="mr-1.5 sm:mr-2 text-xs sm:text-sm" />
              Admissions Open 2026
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Start Your Academic{' '}
              <span className="text-[#6aabf7] relative inline-block">
                Journey
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2"
                  viewBox="0 0 200 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5 Q50 0 100 5 T200 5"
                    stroke="#6aabf7"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              With Us Today
            </h1>

            {/* Description */}
            <p className="text-blue-100/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Apply online easily, track your admission status in real-time, and
              join our vibrant campus community at Sylhet International
              University.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  10K+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-blue-100/60">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6aabf7]">
                  98%
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-blue-100/60">
                  Placement Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  40+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-blue-100/60">
                  Programs
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
              <button className="group px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#6aabf7] hover:bg-[#5a9be7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#6aabf7]/30 flex items-center gap-1.5 sm:gap-2 hover:scale-105 text-sm sm:text-base">
                <span>Apply Online</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
              </button>
              <button className="group px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-white/30 hover:border-[#6aabf7] text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-1.5 sm:gap-2 hover:bg-[#6aabf7]/10 hover:scale-105 text-sm sm:text-base">
                <FaDownload className="group-hover:translate-y-0.5 transition-transform text-xs sm:text-sm" />
                <span className="hidden xs:inline">Download Prospectus</span>
                <span className="xs:hidden">Prospectus</span>
              </button>
              <button className="group px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-1.5 sm:gap-2 hover:scale-105 text-sm sm:text-base">
                <FaPlay className="text-[#6aabf7] text-xs sm:text-sm" />
                <span>Virtual Tour</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-blue-100/60 text-[10px] sm:text-xs md:text-sm">
                <FaUsers className="text-[#6aabf7] text-xs sm:text-sm" />
                <span className="hidden xs:inline">
                  Trusted by 5000+ students
                </span>
                <span className="xs:hidden">5000+ students</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-blue-100/60 text-[10px] sm:text-xs md:text-sm">
                <FaAward className="text-[#6aabf7] text-xs sm:text-sm" />
                <span>Accredited University</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-[#1a3f64] to-[#0a2b4e] rounded-2xl p-4 sm:p-5 md:p-6 border border-[#2a4f74] shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-[#6aabf7] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 bg-[#6aabf7] rounded-full opacity-20 blur-2xl"></div>

              {/* Image Placeholder */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#2a4f74] to-[#0a2b4e] aspect-video flex items-center justify-center">
                <div className="text-center p-4 sm:p-6 md:p-8">
                  <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto bg-[#6aabf7]/20 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-[#6aabf7]" />
                  </div>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                    Welcome to SIU
                  </h3>
                  <p className="text-blue-100/60 text-xs sm:text-sm">
                    Your academic journey starts here
                  </p>
                  <div className="mt-3 sm:mt-4 flex justify-center space-x-1.5 sm:space-x-2">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#6aabf7] rounded-full animate-pulse"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#6aabf7] rounded-full animate-pulse delay-100"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#6aabf7] rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#0a2b4e] border border-[#2a4f74] rounded-xl p-3 sm:p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#6aabf7]/20 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-[#6aabf7] text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      95% Success
                    </p>
                    <p className="text-blue-100/50 text-[10px] sm:text-xs">
                      Student Satisfaction
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#0a2b4e] border border-[#2a4f74] rounded-xl p-3 sm:p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <FaAward className="text-orange-400 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      Top Ranked
                    </p>
                    <p className="text-blue-100/50 text-[10px] sm:text-xs">
                      Among Private Universities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1a3f64] border border-[#2a4f74] rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-xl flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap w-[95%] sm:w-auto justify-center">
              <div className="text-center">
                <div className="text-white font-bold text-sm sm:text-base">
                  30+
                </div>
                <div className="text-blue-100/50 text-[8px] sm:text-xs">
                  Faculty
                </div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-[#2a4f74]"></div>
              <div className="text-center">
                <div className="text-[#6aabf7] font-bold text-sm sm:text-base">
                  50+
                </div>
                <div className="text-blue-100/50 text-[8px] sm:text-xs">
                  Countries
                </div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-[#2a4f74]"></div>
              <div className="text-center">
                <div className="text-white font-bold text-sm sm:text-base">
                  100%
                </div>
                <div className="text-blue-100/50 text-[8px] sm:text-xs">
                  Online App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

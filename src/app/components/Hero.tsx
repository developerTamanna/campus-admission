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
    <section className="relative bg-[#0a2b4e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6aabf7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6aabf7] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#1a3f64] text-[#6aabf7] px-4 py-2 rounded-full text-sm font-semibold">
              <FaCalendarAlt className="mr-2" />
              Admissions Open 2026
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Start Your Academic{' '}
              <span className="text-[#6aabf7] relative">
                Journey
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
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
            <p className="text-blue-100/80 text-base md:text-lg leading-relaxed max-w-xl">
              Apply online easily, track your admission status in real-time, and
              join our vibrant campus community at Sylhet International
              University.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  10K+
                </div>
                <div className="text-xs md:text-sm text-blue-100/60">
                  Students
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#6aabf7]">
                  98%
                </div>
                <div className="text-xs md:text-sm text-blue-100/60">
                  Placement Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  40+
                </div>
                <div className="text-xs md:text-sm text-blue-100/60">
                  Programs
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-6 py-3 bg-[#6aabf7] hover:bg-[#5a9be7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#6aabf7]/30 flex items-center gap-2 hover:scale-105">
                <span>Apply Online</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-6 py-3 bg-transparent border-2 border-white/30 hover:border-[#6aabf7] text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-[#6aabf7]/10 hover:scale-105">
                <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Prospectus</span>
              </button>
              <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <FaPlay className="text-[#6aabf7]" />
                <span>Virtual Tour</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-blue-100/60 text-sm">
                <FaUsers className="text-[#6aabf7]" />
                <span>Trusted by 5000+ students</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100/60 text-sm">
                <FaAward className="text-[#6aabf7]" />
                <span>Accredited University</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#1a3f64] to-[#0a2b4e] rounded-2xl p-6 border border-[#2a4f74] shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6aabf7] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#6aabf7] rounded-full opacity-20 blur-2xl"></div>

              {/* Image Placeholder */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#2a4f74] to-[#0a2b4e] aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-[#6aabf7]/20 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-4xl text-[#6aabf7]" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Welcome to SIU
                  </h3>
                  <p className="text-blue-100/60 text-sm">
                    Your academic journey starts here
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-[#6aabf7] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#6aabf7] rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-[#6aabf7] rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-[#0a2b4e] border border-[#2a4f74] rounded-xl p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6aabf7]/20 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-[#6aabf7]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      95% Success
                    </p>
                    <p className="text-blue-100/50 text-xs">
                      Student Satisfaction
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#0a2b4e] border border-[#2a4f74] rounded-xl p-4 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <FaAward className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Top Ranked
                    </p>
                    <p className="text-blue-100/50 text-xs">
                      Among Private Universities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1a3f64] border border-[#2a4f74] rounded-xl px-6 py-3 shadow-xl flex items-center gap-8 whitespace-nowrap">
              <div className="text-center">
                <div className="text-white font-bold">30+</div>
                <div className="text-blue-100/50 text-xs">Faculty Members</div>
              </div>
              <div className="w-px h-8 bg-[#2a4f74]"></div>
              <div className="text-center">
                <div className="text-[#6aabf7] font-bold">50+</div>
                <div className="text-blue-100/50 text-xs">Countries</div>
              </div>
              <div className="w-px h-8 bg-[#2a4f74]"></div>
              <div className="text-center">
                <div className="text-white font-bold">100%</div>
                <div className="text-blue-100/50 text-xs">
                  Online Application
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

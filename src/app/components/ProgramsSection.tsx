'use client';

import React from 'react';
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBriefcase,
  FaChartLine,
  FaChevronRight,
  FaClock,
  FaCode,
  FaFileInvoiceDollar,
  FaGlobe,
  FaGraduationCap,
  FaMicrochip,
  FaUniversity,
  FaUsers,
} from 'react-icons/fa';

interface Program {
  id: string;
  icon: React.ReactNode;
  title: string;
  duration: string;
  seats: number;
  description: string;
  department: string;
}

interface InfoCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const ProgramsSection: React.FC = () => {
  // Programs Data
  const programs: Program[] = [
    {
      id: 'cse',
      icon: <FaCode className="text-xl" />,
      title: 'Computer Science & Engineering',
      duration: '4 Years',
      seats: 120,
      description:
        'Master programming, AI, machine learning, and cutting-edge technologies for the digital future.',
      department: 'CSE',
    },
    {
      id: 'eee',
      icon: <FaMicrochip className="text-xl" />,
      title: 'Electrical & Electronic Engineering',
      duration: '4 Years',
      seats: 100,
      description:
        'Power systems, electronics, telecommunications, and renewable energy solutions.',
      department: 'EEE',
    },
    {
      id: 'business',
      icon: <FaBriefcase className="text-xl" />,
      title: 'Business Administration (BBA)',
      duration: '4 Years',
      seats: 150,
      description:
        'Strategic management, marketing, finance, entrepreneurship, and global business.',
      department: 'Business',
    },
    {
      id: 'economics',
      icon: <FaChartLine className="text-xl" />,
      title: 'Economics & Banking',
      duration: '4 Years',
      seats: 80,
      description:
        'Micro & macroeconomics, banking, financial markets, and economic policy analysis.',
      department: 'Economics',
    },
    {
      id: 'english',
      icon: <FaBookOpen className="text-xl" />,
      title: 'English Literature & Language',
      duration: '4 Years',
      seats: 70,
      description:
        'Literature, linguistics, creative writing, and professional communication skills.',
      department: 'English',
    },
  ];

  // Info Cards Data
  const infoCards: InfoCard[] = [
    {
      id: 'deadline',
      icon: <FaClock />,
      title: 'Admission Deadline',
      value: 'March 31, 2026',
      description: 'Last date to submit application',
    },
    {
      id: 'fee',
      icon: <FaFileInvoiceDollar />,
      title: 'Application Fee',
      value: 'BDT 1,000',
      description: 'Non-refundable application fee',
    },
    {
      id: 'scholarship',
      icon: <FaAward />,
      title: 'Scholarships',
      value: 'Up to 100%',
      description: 'Merit & need-based scholarships',
    },
    {
      id: 'international',
      icon: <FaGlobe />,
      title: 'International Students',
      value: '50+ Countries',
      description: 'Diverse global community',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0a2b4e]/5 text-[#0a2b4e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaGraduationCap className="text-[#6aabf7]" />
            ACADEMIC PROGRAMS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2b4e] mb-4">
            Explore Our <span className="text-[#6aabf7]">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Choose from our diverse range of undergraduate programs designed to
            prepare you for global leadership and innovation.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-xl flex-shrink-0">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                    {card.title}
                  </p>
                  <p className="text-[#0a2b4e] font-bold text-base md:text-lg mt-1">
                    {card.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#6aabf7]/30 hover:-translate-y-1"
            >
              {/* Program Header */}
              <div className="bg-[#0a2b4e] p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6aabf7]/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6aabf7]/20 rounded-xl flex items-center justify-center text-[#6aabf7]">
                    {program.icon}
                  </div>
                  <div>
                    <span className="text-[#6aabf7]/70 text-xs font-semibold uppercase tracking-wider">
                      {program.department}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight mt-1">
                      {program.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Program Body */}
              <div className="p-5 md:p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-[#6aabf7] text-xs" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-[#6aabf7] text-xs" />
                      <span>{program.seats} Seats</span>
                    </div>
                  </div>
                  <button className="text-[#6aabf7] hover:text-[#0a2b4e] transition-colors font-semibold text-sm flex items-center gap-1">
                    Details
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description - Matching Navbar/Footer Style */}
        <div className="mt-12 p-6 md:p-8 bg-[#0a2b4e] rounded-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6aabf7]/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6aabf7]/5 rounded-full -ml-32 -mb-32"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <FaUniversity className="text-[#6aabf7] text-lg" />
                <span className="text-[#6aabf7] font-semibold text-sm uppercase tracking-wider">
                  Why Choose SIU?
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                Shape Your Future with{' '}
                <span className="text-[#6aabf7]">Quality Education</span>
              </h3>
              <p className="text-blue-100/70 text-sm leading-relaxed max-w-2xl">
                At Sylhet International University, we offer world-class
                education with state-of-the-art facilities, experienced faculty,
                and a vibrant campus life. Our programs are designed to bridge
                the gap between academic knowledge and industry demands,
                ensuring your success in the global job market.
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-2 text-blue-100/60 text-xs">
                  <div className="w-1.5 h-1.5 bg-[#6aabf7] rounded-full"></div>
                  <span>Modern Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100/60 text-xs">
                  <div className="w-1.5 h-1.5 bg-[#6aabf7] rounded-full"></div>
                  <span>Expert Faculty</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100/60 text-xs">
                  <div className="w-1.5 h-1.5 bg-[#6aabf7] rounded-full"></div>
                  <span>Global Recognition</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100/60 text-xs">
                  <div className="w-1.5 h-1.5 bg-[#6aabf7] rounded-full"></div>
                  <span>Career Support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <button className="w-full md:w-auto px-8 py-3 bg-[#6aabf7] hover:bg-[#5a9be7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#6aabf7]/20 flex items-center justify-center gap-2 text-sm">
                <FaArrowRight className="text-xs" />
                Apply Now
              </button>
              <p className="text-blue-100/30 text-xs">
                Limited seats available for 2026 session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

'use client';

import React from 'react';
import {
  FaArrowRight,
  FaBell,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaExclamationCircle,
  FaNewspaper,
} from 'react-icons/fa';

interface Notice {
  id: string;
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
  status: 'new' | 'urgent' | 'regular';
  actionText: string;
}

const LatestNotices: React.FC = () => {
  // Notices Data
  const notices: Notice[] = [
    {
      id: 'circular',
      icon: <FaNewspaper className="text-xl" />,
      title: 'Admission Circular Published',
      date: 'January 15, 2026',
      description:
        'Admission for the academic year 2026 is now open. Apply online through our admission portal.',
      status: 'new',
      actionText: 'View Circular',
    },
    {
      id: 'exam',
      icon: <FaCalendarAlt className="text-xl" />,
      title: 'Admission Exam Date Announced',
      date: 'January 20, 2026',
      description:
        'The admission test will be held on April 15, 2026. Check your schedule and venue details.',
      status: 'urgent',
      actionText: 'Check Schedule',
    },
    {
      id: 'admit',
      icon: <FaDownload className="text-xl" />,
      title: 'Admit Card Download Setup',
      date: 'February 1, 2026',
      description:
        'Admit cards will be available for download from March 1, 2026. Keep your application ID ready.',
      status: 'regular',
      actionText: 'Download Guide',
    },
  ];

  // Status Badge Config
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return { label: 'NEW', color: 'bg-[#6aabf7] text-white' };
      case 'urgent':
        return { label: 'URGENT', color: 'bg-orange-500 text-white' };
      default:
        return { label: 'REGULAR', color: 'bg-gray-500 text-white' };
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0a2b4e]/5 text-[#0a2b4e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaBell className="text-[#6aabf7]" />
            LATEST NOTICES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2b4e] mb-4">
            Stay <span className="text-[#6aabf7]">Updated</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Get the latest admission notices, exam schedules, and important
            announcements
          </p>
        </div>

        {/* Main Announcement Banner */}
        <div className="mb-10 p-6 md:p-8 bg-[#0a2b4e] rounded-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6aabf7]/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6aabf7]/5 rounded-full -ml-32 -mb-32"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="px-3 py-1 bg-orange-500 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                  Admission Open
                </div>
                <span className="text-blue-100/50 text-xs">• 2026 Session</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Admissions Are Now Open!
              </h3>
              <p className="text-blue-100/70 text-sm max-w-2xl">
                Apply before the deadline to secure your seat at Sylhet
                International University. Limited seats available for all
                programs.
              </p>
            </div>
            <button className="px-6 py-3 bg-[#6aabf7] hover:bg-[#5a9be7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#6aabf7]/20 flex items-center gap-2 text-sm whitespace-nowrap">
              <FaArrowRight className="text-xs" />
              Apply Now
            </button>
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => {
            const statusBadge = getStatusBadge(notice.status);
            return (
              <div
                key={notice.id}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Header with Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-xl group-hover:bg-[#0a2b4e] group-hover:text-white transition-all duration-300">
                    {notice.icon}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusBadge.color}`}
                  >
                    {statusBadge.label}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0a2b4e] mb-2">
                  {notice.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                  {notice.description}
                </p>

                {/* Date & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <FaClock />
                    <span>{notice.date}</span>
                  </div>
                  <button className="text-[#6aabf7] hover:text-[#0a2b4e] font-semibold text-sm flex items-center gap-1 transition-colors">
                    {notice.actionText}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-lg mb-2">
              <FaCheckCircle />
            </div>
            <p className="text-[#0a2b4e] font-bold text-sm">50+</p>
            <p className="text-gray-400 text-xs">Programs Offered</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-lg mb-2">
              <FaCalendarAlt />
            </div>
            <p className="text-[#0a2b4e] font-bold text-sm">Mar 31, 2026</p>
            <p className="text-gray-400 text-xs">Application Deadline</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-lg mb-2">
              <FaDownload />
            </div>
            <p className="text-[#0a2b4e] font-bold text-sm">Mar 1, 2026</p>
            <p className="text-gray-400 text-xs">Admit Card Available</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mx-auto rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-lg mb-2">
              <FaExclamationCircle />
            </div>
            <p className="text-[#0a2b4e] font-bold text-sm">1,000+</p>
            <p className="text-gray-400 text-xs">Seats Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNotices;

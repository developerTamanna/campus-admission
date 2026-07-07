'use client';

import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaDownload,
  FaFileAlt,
  FaUserGraduate,
} from 'react-icons/fa';

interface Step {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  stepNumber: number;
}

const AdmissionProcess: React.FC = () => {
  // Admission Steps Data
  const steps: Step[] = [
    {
      id: 'form',
      icon: <FaFileAlt className="text-xl" />,
      title: 'Fill Application Form',
      description:
        'Complete your online application with personal and academic information',
      details: [
        'Create your account',
        'Fill personal details',
        'Upload documents',
        'Choose your program',
      ],
      stepNumber: 1,
    },
    {
      id: 'payment',
      icon: <FaCreditCard className="text-xl" />,
      title: 'Pay Application Fee',
      description: 'Submit your application fee through secure payment gateway',
      details: [
        'bKash / Nagad / Rocket',
        'Bank Deposit',
        'Credit / Debit Card',
        'International Payment',
      ],
      stepNumber: 2,
    },
    {
      id: 'admit',
      icon: <FaDownload className="text-xl" />,
      title: 'Download Admit Card',
      description: 'Download your admit card for the admission test',
      details: [
        'Check eligibility',
        'Download admit card',
        'Verify information',
        'Print for exam',
      ],
      stepNumber: 3,
    },
  ];

  // Quick Info Cards
  const quickInfo = [
    {
      icon: <FaCalendarAlt />,
      label: 'Application Start',
      value: 'January 15, 2026',
    },
    {
      icon: <FaClock />,
      label: 'Application Deadline',
      value: 'March 31, 2026',
    },
    {
      icon: <FaUserGraduate />,
      label: 'Admission Test',
      value: 'April 15, 2026',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0a2b4e]/5 text-[#0a2b4e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaUserGraduate className="text-[#6aabf7]" />
            ADMISSION PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2b4e] mb-4">
            How to <span className="text-[#6aabf7]">Apply</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Follow these simple steps to complete your admission process at
            Sylhet International University
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
          {quickInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 md:p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-xl mb-3">
                {info.icon}
              </div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                {info.label}
              </p>
              <p className="text-[#0a2b4e] font-bold text-sm md:text-base mt-1">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200">
                  <div className="absolute right-0 -top-1 w-2 h-2 bg-[#6aabf7] rounded-full"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0a2b4e] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {step.stepNumber}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-2xl mb-4 group-hover:bg-[#0a2b4e] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-[#0a2b4e] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{step.description}</p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-[#6aabf7] text-xs mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className="mt-4 text-[#6aabf7] hover:text-[#0a2b4e] font-semibold text-sm flex items-center gap-1 transition-colors">
                  Learn More
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#0a2b4e]/5 flex items-center justify-center text-[#6aabf7] text-2xl flex-shrink-0">
                <FaUserGraduate />
              </div>
              <div>
                <h4 className="text-[#0a2b4e] font-bold text-lg">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-gray-500 text-sm">
                  Begin your application process today and join SIU family
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-[#0a2b4e] hover:bg-[#1a3f64] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#0a2b4e]/20 flex items-center gap-2 text-sm">
                <FaFileAlt className="text-xs" />
                Apply Now
              </button>
              <button className="px-6 py-3 bg-[#6aabf7] hover:bg-[#5a9be7] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#6aabf7]/20 flex items-center gap-2 text-sm">
                <FaDownload className="text-xs" />
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;

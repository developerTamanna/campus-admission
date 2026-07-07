'use client';

import React from 'react';
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Quick Links Data
  const quickLinks: FooterLink[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'programs', label: 'Programs', href: '/programs' },
    { id: 'admission', label: 'Admission', href: '/admission' },
    { id: 'notice', label: 'Notice', href: '/notice' },
    { id: 'result', label: 'Result', href: '/result' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  // Student Links Data
  const studentLinks: FooterLink[] = [
    { id: 'admission-form', label: 'Admission Form', href: '/admission/form' },
    { id: 'scholarship', label: 'Scholarship', href: '/scholarship' },
    { id: 'academic-calendar', label: 'Academic Calendar', href: '/calendar' },
    { id: 'library', label: 'Library', href: '/library' },
    { id: 'student-portal', label: 'Student Portal', href: '/portal' },
  ];

  // Social Links Data
  const socialLinks: SocialLink[] = [
    {
      id: 'facebook',
      icon: <FaFacebook />,
      href: 'https://facebook.com/siu',
      label: 'Facebook',
    },
    {
      id: 'twitter',
      icon: <FaTwitter />,
      href: 'https://twitter.com/siu',
      label: 'Twitter',
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/siu',
      label: 'LinkedIn',
    },
    {
      id: 'instagram',
      icon: <FaInstagram />,
      href: 'https://instagram.com/siu',
      label: 'Instagram',
    },
    {
      id: 'youtube',
      icon: <FaYoutube />,
      href: 'https://youtube.com/siu',
      label: 'YouTube',
    },
  ];

  return (
    <footer className="bg-[#0a2b4e] text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#1a3f64]/50">
          {/* Column 1: About SIU */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/assets/logo.png"
                  alt="SIU Logo"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="ml-3">
                <span className="text-white font-bold text-lg block">
                  SYLHET
                </span>
                <span className="text-[#6aabf7] font-semibold text-sm block">
                  INTERNATIONAL
                </span>
                <span className="text-white font-bold text-base block">
                  UNIVERSITY
                </span>
              </div>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-4">
              Sylhet International University (SIU) is committed to providing
              quality education and fostering innovation for a brighter future.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#1a3f64] hover:bg-[#6aabf7] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <span className="text-white text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-[#6aabf7] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-blue-100/70 hover:text-white transition-all duration-200 hover:pl-2 text-sm flex items-center"
                  >
                    <span className="mr-2 text-[#6aabf7]">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Students */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-[#6aabf7] pb-2 inline-block">
              For Students
            </h3>
            <ul className="space-y-2.5">
              {studentLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-blue-100/70 hover:text-white transition-all duration-200 hover:pl-2 text-sm flex items-center"
                  >
                    <span className="mr-2 text-[#6aabf7]">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-[#6aabf7] pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#6aabf7] mt-1 flex-shrink-0" />
                <span className="text-blue-100/70 text-sm">
                  Sylhet International University
                  <br />
                  Bagbari, Sylhet-3100, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#6aabf7] flex-shrink-0" />
                <a
                  href="tel:+880821234567"
                  className="text-blue-100/70 hover:text-white transition-colors text-sm"
                >
                  +880 821 234567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#6aabf7] flex-shrink-0" />
                <a
                  href="mailto:info@siu.edu.bd"
                  className="text-blue-100/70 hover:text-white transition-colors text-sm"
                >
                  info@siu.edu.bd
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-[#6aabf7] flex-shrink-0" />
                <span className="text-blue-100/70 text-sm">
                  Sun-Thu: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-100/50 text-sm text-center md:text-left">
            &copy; {currentYear} Sylhet International University (SIU). All
            Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-blue-100/50 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-blue-100/50 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/faq"
              className="text-blue-100/50 hover:text-white text-sm transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Developed By */}
        <div className="mt-4 pt-4 border-t border-[#1a3f64]/30 text-center">
          <p className="text-blue-100/30 text-xs">
            Developed with ❤️ by SIU IT Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
  Target,
  Users,
} from 'lucide-react';

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '12,500+' },
    { icon: GraduationCap, label: 'Graduates', value: '8,200+' },
    { icon: Building2, label: 'Programs', value: '45+' },
    { icon: Award, label: 'Awards Won', value: '120+' },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description:
        'We provide world-class education with modern curriculum and experienced faculty members.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description:
        'Our dedicated team of professors and industry experts guide students towards excellence.',
    },
    {
      icon: Target,
      title: 'Career Focus',
      description:
        'We prepare students for successful careers through practical training and industry connections.',
    },
    {
      icon: Heart,
      title: 'Student Support',
      description:
        'Comprehensive support services including counseling, tutoring, and career guidance.',
    },
  ];

  const testimonials = [
    {
      name: 'Md. Rahman',
      role: 'Computer Science Student',
      image:
        'https://ui-avatars.com/api/?name=Md+Rahman&background=6366f1&color=fff&size=100',
      text: 'SIU has transformed my academic journey. The quality of education and support from faculty is exceptional.',
    },
    {
      name: 'Sadia Khan',
      role: 'Business Administration',
      image:
        'https://ui-avatars.com/api/?name=Sadia+Khan&background=6366f1&color=fff&size=100',
      text: 'The practical learning approach and modern facilities at SIU prepared me for real-world challenges.',
    },
    {
      name: 'Ahmed Hossain',
      role: 'Engineering Graduate',
      image:
        'https://ui-avatars.com/api/?name=Ahmed+Hossain&background=6366f1&color=fff&size=100',
      text: "SIU's industry connections and internship programs helped me secure a great job right after graduation.",
    },
  ];

  const teamMembers = [
    {
      name: 'Prof. Dr. M. A. Rashid',
      role: 'Vice Chancellor',
      image:
        'https://ui-avatars.com/api/?name=Prof+Dr+M+A+Rashid&background=4f46e5&color=fff&size=100',
    },
    {
      name: 'Prof. Dr. S. M. Kamal',
      role: 'Dean - Faculty of Science',
      image:
        'https://ui-avatars.com/api/?name=Prof+Dr+S+M+Kamal&background=4f46e5&color=fff&size=100',
    },
    {
      name: 'Dr. Nasrin Akhter',
      role: 'Head - Department of CSE',
      image:
        'https://ui-avatars.com/api/?name=Dr+Nasrin+Akhter&background=4f46e5&color=fff&size=100',
    },
    {
      name: 'Prof. Md. Ali Hossain',
      role: 'Dean - Faculty of Business',
      image:
        'https://ui-avatars.com/api/?name=Prof+Md+Ali+Hossain&background=4f46e5&color=fff&size=100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-36 sm:w-40 md:w-48 h-36 sm:h-40 md:h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
              <div className="bg-white/20 p-1.5 sm:p-2 md:p-3 rounded-2xl backdrop-blur-sm">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
              About Sylhet International
              <br />
              <span className="text-indigo-200">University</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed px-4">
              Empowering minds, shaping futures since 2001. Committed to
              excellence in education, research, and innovation.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 px-4">
              <button className="bg-white text-indigo-700 px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-indigo-50 transition flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                Explore Programs{' '}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button className="border border-white/30 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-white/10 transition text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1.5 sm:mb-2 md:mb-3">
                    <div className="bg-indigo-50 p-1.5 sm:p-2 md:p-3 rounded-full">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-indigo-600" />
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-0.5 sm:mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
                <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-indigo-600"></div>
                <span className="text-indigo-600 font-semibold text-xs sm:text-sm md:text-base">
                  About SIU
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
                A Legacy of Excellence in
                <br />
                <span className="text-indigo-600">Higher Education</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Established in 2001, Sylhet International University has been at
                the forefront of higher education in Bangladesh. We are
                committed to providing quality education that prepares students
                for global challenges.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                With state-of-the-art facilities, experienced faculty, and a
                student-centered approach, we create an environment where
                innovation thrives and leaders are born.
              </p>
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {[
                  'Modern campus with advanced facilities',
                  'International collaboration programs',
                  'Industry-aligned curriculum',
                  'Research and innovation hub',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-3"
                  >
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6 sm:p-8 md:p-12">
                  <div className="text-center text-white">
                    <GraduationCap className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 opacity-80" />
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                      SIU Campus
                    </h3>
                    <p className="text-indigo-100 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                      Where excellence meets opportunity
                    </p>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6 bg-white">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-1.5 sm:-space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-200 border-2 border-white"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-200 border-2 border-white"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-200 border-2 border-white"></div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      <span className="font-semibold">12,500+</span> students
                      trust us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              Why Choose <span className="text-indigo-600">SIU?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Discover what makes Sylhet International University the preferred
              choice for students seeking quality education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-white hover:shadow-xl rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                >
                  <div className="bg-indigo-50 group-hover:bg-indigo-100 p-2 sm:p-2.5 md:p-3 rounded-lg inline-block mb-2 sm:mb-3 md:mb-4 transition">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-1.5 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              Meet Our <span className="text-indigo-600">Leadership</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Dedicated professionals committed to excellence in education and
              student success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4 sm:p-5 md:p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-5 text-center">
                  <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-0.5 sm:mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              What Our <span className="text-indigo-600">Students Say</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Real experiences from real students who have been part of the SIU
              journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-300 mb-1.5 sm:mb-2" />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-0.5 mt-2 sm:mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                  Get in Touch
                  <br />
                  <span className="text-indigo-200">With Us</span>
                </h2>
                <p className="text-indigo-100 text-sm sm:text-base mb-3 sm:mb-4 md:mb-6">
                  Have questions about admission, programs, or campus life?
                  We're here to help.
                </p>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-indigo-100">
                      54 St Mary's Rd, Southampton SO14 0BH, UK
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-indigo-100">
                      +44 7577-062211
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-indigo-100">
                      support@visernic.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <button className="bg-white text-indigo-700 px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-indigo-50 transition text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Email Us
                </button>
                <button className="border border-white/30 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-white/10 transition text-xs sm:text-sm md:text-base">
                  Visit Campus
                </button>
              </div>
            </div>
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

export default AboutPage;

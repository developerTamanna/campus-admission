import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Laptop,
  Microscope,
  Scale,
} from 'lucide-react';

const programs = [
  {
    title: 'Bachelor of Science in Computer Science & Engineering',
    duration: '4 Years',
    icon: (
      <Laptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Build a strong foundation in software development, AI, networking and modern technologies.',
  },
  {
    title: 'Bachelor of Business Administration',
    duration: '4 Years',
    icon: (
      <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Develop leadership, entrepreneurship and business management skills for global careers.',
  },
  {
    title: 'Bachelor of Laws (LL.B)',
    duration: '4 Years',
    icon: (
      <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Prepare for a successful legal career through practical and academic excellence.',
  },
  {
    title: 'Bachelor of Pharmacy',
    duration: '4 Years',
    icon: (
      <Microscope className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Learn pharmaceutical science, patient care and clinical research.',
  },
  {
    title: 'Bachelor of Architecture',
    duration: '5 Years',
    icon: (
      <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Design sustainable buildings with creativity and modern engineering concepts.',
  },
  {
    title: 'Bachelor of English',
    duration: '4 Years',
    icon: (
      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
    ),
    description:
      'Enhance communication, literature and research skills for diverse professions.',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-50 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Academic Programs
          </h1>

          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Explore world-class undergraduate programs at
            <span className="font-semibold">
              {' '}
              Sylhet International University
            </span>
            . Shape your future with quality education and experienced faculty.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Our Programs
            </h2>

            <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Choose from our internationally recognized academic programs
              designed to prepare students for successful careers.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-5 sm:p-6 md:p-7 group hover:-translate-y-1"
              >
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl bg-blue-50 flex items-center justify-center">
                  {program.icon}
                </div>

                <h3 className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  {program.title}
                </h3>

                <p className="text-blue-600 font-medium mt-1.5 sm:mt-2 text-sm sm:text-base">
                  Duration: {program.duration}
                </p>

                <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
                  {program.description}
                </p>

                <button className="mt-4 sm:mt-5 md:mt-6 inline-flex items-center gap-1.5 sm:gap-2 text-blue-700 font-semibold hover:text-blue-900 transition text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Study at SIU?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                20+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Years of Excellence
              </p>
            </div>

            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                50+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Experienced Faculty
              </p>
            </div>

            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                5000+
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Graduates
              </p>
            </div>

            <div className="text-center p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                100%
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Student Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>

          <p className="text-blue-100 mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg">
            Take the first step toward your future by applying to Sylhet
            International University today.
          </p>

          <button className="mt-6 sm:mt-7 md:mt-8 bg-white text-blue-700 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold hover:bg-blue-50 transition text-sm sm:text-base">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;

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
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    description:
      'Build a strong foundation in software development, AI, networking and modern technologies.',
  },
  {
    title: 'Bachelor of Business Administration',
    duration: '4 Years',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    description:
      'Develop leadership, entrepreneurship and business management skills for global careers.',
  },
  {
    title: 'Bachelor of Laws (LL.B)',
    duration: '4 Years',
    icon: <Scale className="w-8 h-8 text-blue-600" />,
    description:
      'Prepare for a successful legal career through practical and academic excellence.',
  },
  {
    title: 'Bachelor of Pharmacy',
    duration: '4 Years',
    icon: <Microscope className="w-8 h-8 text-blue-600" />,
    description:
      'Learn pharmaceutical science, patient care and clinical research.',
  },
  {
    title: 'Bachelor of Architecture',
    duration: '5 Years',
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    description:
      'Design sustainable buildings with creativity and modern engineering concepts.',
  },
  {
    title: 'Bachelor of English',
    duration: '4 Years',
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    description:
      'Enhance communication, literature and research skills for diverse professions.',
  },
];

const Page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Academic Programs</h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800">Our Programs</h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Choose from our internationally recognized academic programs
              designed to prepare students for successful careers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-7 group"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center">
                  {program.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-800 leading-snug">
                  {program.title}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  Duration: {program.duration}
                </p>

                <p className="text-gray-600 mt-4">{program.description}</p>

                <button className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Study at SIU?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">20+</div>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">50+</div>
              <p className="text-gray-600 mt-2">Experienced Faculty</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">5000+</div>
              <p className="text-gray-600 mt-2">Graduates</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700">100%</div>
              <p className="text-gray-600 mt-2">Student Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>

          <p className="text-blue-100 mt-5 text-lg">
            Take the first step toward your future by applying to Sylhet
            International University today.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;

import { ArrowRight, Bell, CalendarDays, Download, Search } from 'lucide-react';

const notices = [
  {
    title: 'Admission Circular - Fall 2026',
    date: '10 July 2026',
    type: 'Admission',
    latest: true,
  },
  {
    title: 'Mid Term Examination Routine Published',
    date: '08 July 2026',
    type: 'Examination',
    latest: false,
  },
  {
    title: 'Semester Final Registration Notice',
    date: '05 July 2026',
    type: 'Academic',
    latest: false,
  },
  {
    title: 'Scholarship Application Deadline Extended',
    date: '01 July 2026',
    type: 'Scholarship',
    latest: false,
  },
  {
    title: 'Orientation Program for New Students',
    date: '28 June 2026',
    type: 'Event',
    latest: false,
  },
  {
    title: 'Library Service Schedule Updated',
    date: '20 June 2026',
    type: 'General',
    latest: false,
  },
];

export default function NoticePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Bell className="mx-auto w-16 h-16 mb-6 text-yellow-300" />

          <h1 className="text-4xl md:text-5xl font-bold">University Notices</h1>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
            Stay updated with the latest admission notices, examination
            schedules, academic announcements, and university events.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="-mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-5">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search notices..."
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Latest Notices</h2>

            <button className="text-blue-700 font-semibold flex items-center gap-2 hover:gap-3 transition">
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {notice.type}
                    </span>

                    {notice.latest && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        Latest
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    {notice.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-gray-500">
                    <CalendarDays className="w-4 h-4" />

                    <span>{notice.date}</span>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition">
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}

      <section className="bg-blue-800 py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white">
            Never Miss an Important Notice
          </h2>

          <p className="text-blue-100 mt-4">
            Check this page regularly to stay informed about admission updates,
            examination schedules, scholarships, and university announcements.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Subscribe for Updates
          </button>
        </div>
      </section>
    </div>
  );
}

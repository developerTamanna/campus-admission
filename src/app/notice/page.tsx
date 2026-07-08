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
    <div className="bg-gray-50 min-h-screen w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <Bell className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6 text-yellow-300" />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            University Notices
          </h1>

          <p className="mt-3 sm:mt-4 md:mt-5 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Stay updated with the latest admission notices, examination
            schedules, academic announcements, and university events.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="-mt-6 sm:-mt-7 md:-mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-2.5 sm:top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />

              <input
                type="text"
                placeholder="Search notices..."
                className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Latest Notices
            </h2>

            <button className="text-blue-700 font-semibold flex items-center gap-1.5 sm:gap-2 hover:gap-2 sm:hover:gap-3 transition text-sm sm:text-base">
              View All
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 sm:p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 md:gap-5"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="bg-blue-100 text-blue-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                      {notice.type}
                    </span>

                    {notice.latest && (
                      <span className="bg-red-500 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-semibold animate-pulse">
                        Latest
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words">
                    {notice.title}
                  </h3>

                  <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-gray-500">
                    <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                    <span className="text-xs sm:text-sm">{notice.date}</span>
                  </div>
                </div>

                <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg transition text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 w-full md:w-auto">
                  <Download
                    size={14}
                    className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]"
                  />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-800 py-10 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Never Miss an Important Notice
          </h2>

          <p className="text-blue-100 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base">
            Check this page regularly to stay informed about admission updates,
            examination schedules, scholarships, and university announcements.
          </p>

          <button className="mt-4 sm:mt-6 md:mt-8 bg-white text-blue-700 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
            Subscribe for Updates
          </button>
        </div>
      </section>
    </div>
  );
}

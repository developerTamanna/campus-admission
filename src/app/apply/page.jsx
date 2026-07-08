const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-8 md:py-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 mx-3 sm:mx-4 md:mx-6 lg:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800">
          Sylhet International University
        </h1>

        <p className="text-center text-gray-500 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
          Online Admission Application Form
        </p>

        <hr className="my-4 sm:my-6 md:my-8" />

        {/* Personal Information */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4 md:mb-5">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className="font-medium text-sm sm:text-base">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Father's Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter father's name"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Mother's Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter mother's name"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">Gender</label>
            <select className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base bg-white">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">Religion</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter your religion"
            />
          </div>
        </div>

        {/* Contact */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 md:mb-5">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className="font-medium text-sm sm:text-base">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="font-medium text-sm sm:text-base">
              Present Address
            </label>
            <textarea
              rows={3}
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="Enter your present address"
            ></textarea>
          </div>
        </div>

        {/* Academic */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 md:mb-5">
          Academic Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className="font-medium text-sm sm:text-base">SSC GPA</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="e.g., 4.50"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">HSC GPA</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="e.g., 4.50"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">Board</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="e.g., Dhaka"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Passing Year
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base"
              placeholder="e.g., 2023"
            />
          </div>
        </div>

        {/* Program */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 md:mb-5">
          Program Selection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className="font-medium text-sm sm:text-base">Faculty</label>
            <select className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base bg-white">
              <option>Select Faculty</option>
              <option>Engineering</option>
              <option>Business</option>
              <option>Arts & Social Science</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              Department
            </label>
            <select className="w-full border rounded-lg p-2.5 sm:p-3 mt-1 text-sm sm:text-base bg-white">
              <option>Select Department</option>
              <option>CSE</option>
              <option>EEE</option>
              <option>BBA</option>
              <option>English</option>
            </select>
          </div>
        </div>

        {/* Upload */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4 md:mb-5">
          Upload Documents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <div>
            <label className="font-medium text-sm sm:text-base">
              Passport Size Photo
            </label>
            <input
              type="file"
              className="w-full mt-1.5 sm:mt-2 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              SSC Certificate
            </label>
            <input
              type="file"
              className="w-full mt-1.5 sm:mt-2 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              HSC Certificate
            </label>
            <input
              type="file"
              className="w-full mt-1.5 sm:mt-2 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="font-medium text-sm sm:text-base">
              NID / Birth Certificate
            </label>
            <input
              type="file"
              className="w-full mt-1.5 sm:mt-2 text-sm sm:text-base"
            />
          </div>
        </div>

        <button className="w-full mt-6 sm:mt-8 md:mt-10 bg-blue-700 hover:bg-blue-800 text-white py-3 sm:py-3.5 md:py-4 rounded-lg text-base sm:text-lg md:text-xl font-semibold transition">
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ApplyPage;

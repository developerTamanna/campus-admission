import React from "react";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-800">
          Sylhet International University
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Online Admission Application Form
        </p>

        <hr className="my-8" />

        {/* Personal Information */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-5">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Father's Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Mother's Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Gender</label>
            <select className="w-full border rounded-lg p-3 mt-1">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Religion</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>
        </div>

        {/* Contact */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Present Address</label>
            <textarea
              rows={3}
              className="w-full border rounded-lg p-3 mt-1"
            ></textarea>
          </div>
        </div>

        {/* Academic */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">
          Academic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">SSC GPA</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">HSC GPA</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Board</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Passing Year</label>
            <input
              type="number"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>
        </div>

        {/* Program */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">
          Program Selection
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">Faculty</label>
            <select className="w-full border rounded-lg p-3 mt-1">
              <option>Select Faculty</option>
              <option>Engineering</option>
              <option>Business</option>
              <option>Arts & Social Science</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Department</label>
            <select className="w-full border rounded-lg p-3 mt-1">
              <option>Select Department</option>
              <option>CSE</option>
              <option>EEE</option>
              <option>BBA</option>
              <option>English</option>
            </select>
          </div>
        </div>

        {/* Upload */}
        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">
          Upload Documents
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="font-medium">Passport Size Photo</label>
            <input type="file" className="w-full mt-2" />
          </div>

          <div>
            <label className="font-medium">SSC Certificate</label>
            <input type="file" className="w-full mt-2" />
          </div>

          <div>
            <label className="font-medium">HSC Certificate</label>
            <input type="file" className="w-full mt-2" />
          </div>

          <div>
            <label className="font-medium">NID / Birth Certificate</label>
            <input type="file" className="w-full mt-2" />
          </div>
        </div>

        <button className="w-full mt-10 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg text-lg font-semibold transition">
          Submit Application
        </button>

      </div>
    </div>
  );
};

export default ApplyPage;

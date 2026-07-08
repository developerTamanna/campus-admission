'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  AlertCircle,
  Award,
  BookOpen,
  Building2,
  CheckCircle,
  Download,
  FileText,
  GraduationCap,
  Hash,
  Printer,
  Search,
  Share2,
  Star,
  User,
} from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Import jsPDF and autoTable correctly
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Form validation schema
const resultSearchSchema = z.object({
  roll: z.string().min(1, 'Roll number is required'),
  registration: z.string().min(1, 'Registration number is required'),
  name: z.string().optional(),
  department: z.string().optional(),
});

type ResultSearchData = z.infer<typeof resultSearchSchema>;

// Demo Data - You can replace this with dynamic data
const DEMO_RESULTS = [
  {
    id: 1,
    name: 'Md. Rahman Khan',
    roll: '2021001',
    registration: 'REG-2021-001',
    department: 'Computer Science & Engineering',
    semester: '5th',
    academicYear: '2024-2025',
    cgpa: 3.75,
    totalCredits: 72,
    earnedCredits: 68,
    status: 'Passed',
    courses: [
      {
        code: 'CSE-401',
        name: 'Data Structures',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'CSE-402',
        name: 'Algorithms',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
      {
        code: 'CSE-403',
        name: 'Database Management',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
      {
        code: 'CSE-404',
        name: 'Web Technologies',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'CSE-405',
        name: 'Software Engineering',
        credit: 3,
        grade: 'B',
        gradePoint: 3.0,
      },
      {
        code: 'CSE-406',
        name: 'Computer Networks',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
    ],
  },
  {
    id: 2,
    name: 'Sadia Akhter',
    roll: '2021002',
    registration: 'REG-2021-002',
    department: 'Business Administration',
    semester: '5th',
    academicYear: '2024-2025',
    cgpa: 3.82,
    totalCredits: 72,
    earnedCredits: 70,
    status: 'Passed',
    courses: [
      {
        code: 'BBA-401',
        name: 'Marketing Management',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'BBA-402',
        name: 'Financial Accounting',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'BBA-403',
        name: 'Business Statistics',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
      {
        code: 'BBA-404',
        name: 'Organizational Behavior',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
      {
        code: 'BBA-405',
        name: 'Business Law',
        credit: 3,
        grade: 'B',
        gradePoint: 3.0,
      },
    ],
  },
  {
    id: 3,
    name: 'Ahmed Hossain',
    roll: '2021003',
    registration: 'REG-2021-003',
    department: 'Electrical & Electronic Engineering',
    semester: '5th',
    academicYear: '2024-2025',
    cgpa: 3.58,
    totalCredits: 72,
    earnedCredits: 66,
    status: 'Passed',
    courses: [
      {
        code: 'EEE-401',
        name: 'Circuit Analysis',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
      {
        code: 'EEE-402',
        name: 'Electronics',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
      {
        code: 'EEE-403',
        name: 'Power Systems',
        credit: 3,
        grade: 'B',
        gradePoint: 3.0,
      },
      {
        code: 'EEE-404',
        name: 'Control Systems',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
      {
        code: 'EEE-405',
        name: 'Digital Signal Processing',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
    ],
  },
  {
    id: 4,
    name: 'Nadia Sultana',
    roll: '2021004',
    registration: 'REG-2021-004',
    department: 'English',
    semester: '5th',
    academicYear: '2024-2025',
    cgpa: 3.92,
    totalCredits: 72,
    earnedCredits: 72,
    status: 'Passed',
    courses: [
      {
        code: 'ENG-401',
        name: 'English Literature',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'ENG-402',
        name: 'Creative Writing',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
      {
        code: 'ENG-403',
        name: 'Linguistics',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
      {
        code: 'ENG-404',
        name: 'Modern Poetry',
        credit: 3,
        grade: 'A',
        gradePoint: 4.0,
      },
    ],
  },
  {
    id: 5,
    name: 'Kamal Ahmed',
    roll: '2021005',
    registration: 'REG-2021-005',
    department: 'Economics',
    semester: '5th',
    academicYear: '2024-2025',
    cgpa: 3.45,
    totalCredits: 72,
    earnedCredits: 63,
    status: 'Passed',
    courses: [
      {
        code: 'ECO-401',
        name: 'Microeconomics',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
      {
        code: 'ECO-402',
        name: 'Macroeconomics',
        credit: 3,
        grade: 'B',
        gradePoint: 3.0,
      },
      {
        code: 'ECO-403',
        name: 'Econometrics',
        credit: 3,
        grade: 'A-',
        gradePoint: 3.7,
      },
      {
        code: 'ECO-404',
        name: 'Development Economics',
        credit: 3,
        grade: 'B+',
        gradePoint: 3.3,
      },
    ],
  },
];

const ResultPage = () => {
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [selectedResult, setSelectedResult] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResultSearchData>({
    resolver: zodResolver(resultSearchSchema),
    defaultValues: {
      roll: '',
      registration: '',
      name: '',
      department: '',
    },
  });

  // Search Result
  const onSubmit = async (data: ResultSearchData) => {
    setIsLoading(true);
    setError('');
    setShowResult(false);
    setSelectedResult(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Search in demo data
      const results = DEMO_RESULTS.filter(
        (result) =>
          result.roll.toLowerCase() === data.roll.toLowerCase() ||
          result.registration.toLowerCase() === data.registration.toLowerCase(),
      );

      if (results.length > 0) {
        setSearchResults(results);
        setSelectedResult(results[0]);
        setShowResult(true);
      } else {
        setError(
          'No result found. Please check your roll or registration number.',
        );
        setSearchResults([]);
        setShowResult(false);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Download PDF - Fixed version
  const downloadPDF = () => {
    if (!selectedResult) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Sylhet International University', pageWidth / 2, 20, {
      align: 'center',
    });
    doc.setFontSize(12);
    doc.text('Academic Result', pageWidth / 2, 32, { align: 'center' });

    // Student Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    const startY = 50;
    const col1X = 20;
    const col2X = 120;

    doc.text('Student Information', col1X, startY);
    doc.setLineWidth(0.5);
    doc.line(col1X, startY + 2, col1X + 80, startY + 2);

    doc.setFontSize(10);
    const infoData = [
      ['Name', selectedResult.name],
      ['Roll Number', selectedResult.roll],
      ['Registration', selectedResult.registration],
      ['Department', selectedResult.department],
      ['Semester', selectedResult.semester],
      ['Academic Year', selectedResult.academicYear],
      ['CGPA', selectedResult.cgpa.toFixed(2)],
      ['Status', selectedResult.status],
    ];

    infoData.forEach(([label, value], index) => {
      const y = startY + 10 + index * 7;
      doc.text(`${label}:`, col1X, y);
      doc.text(value, col2X, y);
    });

    // Course Table - Fixed autoTable usage
    const tableY = startY + 70;
    doc.text('Course Details', col1X, tableY);
    doc.line(col1X, tableY + 2, col1X + 140, tableY + 2);

    const tableData = selectedResult.courses.map((course: any) => [
      course.code,
      course.name,
      course.credit.toString(),
      course.grade,
      course.gradePoint.toFixed(2),
    ]);

    // Use autoTable correctly
    autoTable(doc, {
      startY: tableY + 8,
      head: [['Code', 'Course Name', 'Credit', 'Grade', 'Grade Point']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [99, 102, 241], textColor: [255, 255, 255] },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 50 },
        2: { cellWidth: 20 },
        3: { cellWidth: 20 },
        4: { cellWidth: 25 },
      },
    });

    // Footer
    const finalY = (doc as any).lastAutoTable?.finalY || tableY + 80;
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      col1X,
      finalY + 10,
    );
    doc.text(
      'This is a system-generated result. For any discrepancy, please contact the examination office.',
      col1X,
      finalY + 15,
    );

    // Save PDF
    doc.save(`Result_${selectedResult.roll}_${selectedResult.name}.pdf`);
  };

  // Print Result
  const printResult = () => {
    window.print();
  };

  // Get Grade Color
  const getGradeColor = (grade: string) => {
    const colors: { [key: string]: string } = {
      A: 'text-green-600 bg-green-50',
      'A-': 'text-green-500 bg-green-50',
      'B+': 'text-blue-600 bg-blue-50',
      B: 'text-blue-500 bg-blue-50',
      'B-': 'text-yellow-600 bg-yellow-50',
      'C+': 'text-yellow-500 bg-yellow-50',
      C: 'text-orange-500 bg-orange-50',
      D: 'text-red-500 bg-red-50',
      F: 'text-red-600 bg-red-50',
    };
    return colors[grade] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-4 sm:py-6 md:py-8 lg:py-12 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
              <div className="bg-indigo-600 p-2 sm:p-2.5 md:p-3 rounded-2xl">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Result Portal
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 sm:mt-1.5 md:mt-2">
              Enter your roll or registration number to view your results
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 mb-4 sm:mb-6 md:mb-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Roll Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                      <Hash className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...register('roll')}
                      placeholder="e.g., 2021001"
                      className={`w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                        errors.roll ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                    />
                  </div>
                  {errors.roll && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.roll.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Registration Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                      <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...register('registration')}
                      placeholder="e.g., REG-2021-001"
                      className={`w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border ${
                        errors.registration
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
                    />
                  </div>
                  {errors.registration && (
                    <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-red-600">
                      {errors.registration.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Name (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Student Name"
                      className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 mb-0.5 sm:mb-1">
                    Department (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" />
                    </div>
                    <select
                      {...register('department')}
                      className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">All Departments</option>
                      <option value="CSE">
                        Computer Science & Engineering
                      </option>
                      <option value="BBA">Business Administration</option>
                      <option value="EEE">
                        Electrical & Electronic Engineering
                      </option>
                      <option value="ENG">English</option>
                      <option value="ECO">Economics</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-2.5 md:py-3 px-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      Search Result
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-1.5 sm:gap-2">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-red-600">{error}</p>
              </div>
            )}
          </div>

          {/* Result Display */}
          {showResult && selectedResult && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Result Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-3 sm:p-4 md:p-6 text-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                      Academic Result
                    </h2>
                    <p className="text-indigo-200 text-xs sm:text-sm">
                      {selectedResult.academicYear} - Semester{' '}
                      {selectedResult.semester}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <button
                      onClick={downloadPDF}
                      className="bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 sm:gap-2"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      PDF
                    </button>
                    <button
                      onClick={printResult}
                      className="bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 sm:gap-2"
                    >
                      <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Print
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 sm:gap-2">
                      <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Student Info */}
              <div className="p-3 sm:p-4 md:p-6 border-b border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Student Name
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 break-words">
                      {selectedResult.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Roll Number
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      {selectedResult.roll}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Registration
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      {selectedResult.registration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Department
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 break-words">
                      {selectedResult.department}
                    </p>
                  </div>
                </div>
              </div>

              {/* Result Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-gray-50">
                <div className="bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        CGPA
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
                        {selectedResult.cgpa.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-1.5 sm:p-2 rounded-lg">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Total Credits
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        {selectedResult.totalCredits}
                      </p>
                    </div>
                    <div className="bg-green-50 p-1.5 sm:p-2 rounded-lg">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Earned Credits
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        {selectedResult.earnedCredits}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-1.5 sm:p-2 rounded-lg">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Status
                      </p>
                      <p
                        className={`text-lg sm:text-xl md:text-2xl font-bold ${
                          selectedResult.status === 'Passed'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {selectedResult.status}
                      </p>
                    </div>
                    <div
                      className={`p-1.5 sm:p-2 rounded-lg ${
                        selectedResult.status === 'Passed'
                          ? 'bg-green-50'
                          : 'bg-red-50'
                      }`}
                    >
                      <Award
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          selectedResult.status === 'Passed'
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Table */}
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Course Details
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                          Code
                        </th>
                        <th className="text-left text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                          Course Name
                        </th>
                        <th className="text-center text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                          Credit
                        </th>
                        <th className="text-center text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                          Grade
                        </th>
                        <th className="text-center text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                          Grade Point
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedResult.courses.map(
                        (course: any, index: number) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50 transition"
                          >
                            <td className="text-[10px] sm:text-xs md:text-sm text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                              <span className="font-medium">{course.code}</span>
                            </td>
                            <td className="text-[10px] sm:text-xs md:text-sm text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3 break-words">
                              {course.name}
                            </td>
                            <td className="text-center text-[10px] sm:text-xs md:text-sm text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                              {course.credit}
                            </td>
                            <td className="text-center px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                              <span
                                className={`inline-block px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold ${getGradeColor(course.grade)}`}
                              >
                                {course.grade}
                              </span>
                            </td>
                            <td className="text-center text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 md:py-3">
                              {course.gradePoint.toFixed(2)}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Generated on: {new Date().toLocaleDateString()} at{' '}
                      {new Date().toLocaleTimeString()}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                      This is a system-generated result. For any discrepancy,
                      please contact the examination office.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex -space-x-1.5 sm:-space-x-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-200 border-2 border-white"></div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-200 border-2 border-white"></div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-200 border-2 border-white"></div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Verified by SIU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {!showResult && !error && (
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="bg-indigo-50 p-3 sm:p-4 rounded-full">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1.5 sm:mb-2">
                Search for Your Results
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                Enter your roll number or registration number above to view your
                academic results.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

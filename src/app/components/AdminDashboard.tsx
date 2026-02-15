import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Download, Filter, BarChart3, TrendingUp, Users, FileText, ArrowLeft, LogOut } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useFeedback } from '../context/FeedbackContext';

// Mock feedback data
interface FeedbackResponse {
  id: string;
  studentId: string;
  timestamp: string;
  academicYear: string;
  course: string;
  subject: string;
  q1: number; // Learning objectives clearly stated
  q2: number; // Instructor delivery engaging
  q3: number; // Course materials high quality
  q4: number; // Assignments relevant
  q5: number; // Instructor accessible
  comments?: string;
}

const mockFeedbackData: FeedbackResponse[] = [
  {
    id: '1',
    studentId: 'STU001',
    timestamp: '2026-02-10T10:30:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Programming Fundamentals',
    q1: 5,
    q2: 4,
    q3: 5,
    q4: 3,
    q5: 5,
    comments: 'Great course overall, very helpful instructor.'
  },
  {
    id: '2',
    studentId: 'STU002',
    timestamp: '2026-02-10T11:15:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Programming Fundamentals',
    q1: 4,
    q2: 5,
    q3: 4,
    q4: 4,
    q5: 4,
    comments: 'Enjoyed the practical sessions.'
  },
  {
    id: '3',
    studentId: 'STU003',
    timestamp: '2026-02-11T09:20:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Programming Fundamentals',
    q1: 5,
    q2: 5,
    q3: 5,
    q4: 5,
    q5: 5,
    comments: 'Excellent teaching methods.'
  },
  {
    id: '4',
    studentId: 'STU004',
    timestamp: '2026-02-11T14:45:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Data Structures',
    q1: 3,
    q2: 3,
    q3: 4,
    q4: 3,
    q5: 4,
    comments: 'Content was challenging but rewarding.'
  },
  {
    id: '5',
    studentId: 'STU005',
    timestamp: '2026-02-12T10:00:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Data Structures',
    q1: 4,
    q2: 4,
    q3: 3,
    q4: 4,
    q5: 3,
  },
  {
    id: '6',
    studentId: 'STU006',
    timestamp: '2026-02-12T11:30:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Data Structures',
    q1: 5,
    q2: 4,
    q3: 4,
    q4: 5,
    q5: 4,
    comments: 'Well-structured course content.'
  },
  {
    id: '7',
    studentId: 'STU007',
    timestamp: '2026-02-13T09:15:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Database Management',
    q1: 4,
    q2: 5,
    q3: 5,
    q4: 4,
    q5: 5,
    comments: 'Very practical and industry-relevant.'
  },
  {
    id: '8',
    studentId: 'STU008',
    timestamp: '2026-02-13T15:20:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Database Management',
    q1: 5,
    q2: 4,
    q3: 4,
    q4: 5,
    q5: 4,
  },
  {
    id: '9',
    studentId: 'STU009',
    timestamp: '2026-02-14T10:45:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Web Technologies',
    q1: 3,
    q2: 4,
    q3: 3,
    q4: 4,
    q5: 3,
    comments: 'Could use more hands-on examples.'
  },
  {
    id: '10',
    studentId: 'STU010',
    timestamp: '2026-02-14T13:00:00',
    academicYear: '2025-2026',
    course: 'B.Sc Computer Science',
    subject: 'Web Technologies',
    q1: 4,
    q2: 3,
    q3: 4,
    q4: 3,
    q5: 4,
  },
  {
    id: '11',
    studentId: 'STU011',
    timestamp: '2026-02-10T16:30:00',
    academicYear: '2024-2025',
    course: 'B.Sc Computer Science',
    subject: 'Programming Fundamentals',
    q1: 5,
    q2: 5,
    q3: 4,
    q4: 5,
    q5: 5,
    comments: 'Best course I have taken.'
  },
  {
    id: '12',
    studentId: 'STU012',
    timestamp: '2026-02-11T08:15:00',
    academicYear: '2024-2025',
    course: 'B.Sc Computer Science',
    subject: 'Operating Systems',
    q1: 4,
    q2: 4,
    q3: 5,
    q4: 4,
    q5: 4,
    comments: 'Deep theoretical understanding achieved.'
  },
];

const COLORS = ['#137FEC', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export function AdminDashboard() {
  const navigate = useNavigate();
  const { setAdminAuthenticated } = useFeedback();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const handleLogout = () => {
    setAdminAuthenticated(false);
    navigate('/');
  };

  // Get unique values for filters
  const academicYears = useMemo(() => 
    Array.from(new Set(mockFeedbackData.map(d => d.academicYear))),
    []
  );
  const courses = useMemo(() => 
    Array.from(new Set(mockFeedbackData.map(d => d.course))),
    []
  );
  const subjects = useMemo(() => 
    Array.from(new Set(mockFeedbackData.map(d => d.subject))),
    []
  );

  // Filter data based on selections
  const filteredData = useMemo(() => {
    return mockFeedbackData.filter(item => {
      if (selectedYear !== 'all' && item.academicYear !== selectedYear) return false;
      if (selectedCourse !== 'all' && item.course !== selectedCourse) return false;
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
      return true;
    });
  }, [selectedYear, selectedCourse, selectedSubject]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredData.length;
    const avgScores = {
      q1: filteredData.reduce((sum, item) => sum + item.q1, 0) / total,
      q2: filteredData.reduce((sum, item) => sum + item.q2, 0) / total,
      q3: filteredData.reduce((sum, item) => sum + item.q3, 0) / total,
      q4: filteredData.reduce((sum, item) => sum + item.q4, 0) / total,
      q5: filteredData.reduce((sum, item) => sum + item.q5, 0) / total,
    };
    const overallAvg = (avgScores.q1 + avgScores.q2 + avgScores.q3 + avgScores.q4 + avgScores.q5) / 5;
    
    return {
      total,
      avgScores,
      overallAvg,
    };
  }, [filteredData]);

  // Prepare chart data
  const questionAverages = [
    { question: 'Q1: Learning Objectives', average: stats.avgScores.q1 },
    { question: 'Q2: Instructor Delivery', average: stats.avgScores.q2 },
    { question: 'Q3: Course Materials', average: stats.avgScores.q3 },
    { question: 'Q4: Assignments Relevance', average: stats.avgScores.q4 },
    { question: 'Q5: Instructor Accessibility', average: stats.avgScores.q5 },
  ];

  // Rating distribution
  const ratingDistribution = useMemo(() => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    filteredData.forEach(item => {
      [item.q1, item.q2, item.q3, item.q4, item.q5].forEach(rating => {
        distribution[rating as keyof typeof distribution]++;
      });
    });
    return Object.entries(distribution).map(([rating, count]) => ({
      name: `${rating} Star`,
      value: count,
    }));
  }, [filteredData]);

  // Subject-wise averages
  const subjectAverages = useMemo(() => {
    const subjectMap = new Map<string, { total: number; count: number }>();
    filteredData.forEach(item => {
      const avg = (item.q1 + item.q2 + item.q3 + item.q4 + item.q5) / 5;
      if (!subjectMap.has(item.subject)) {
        subjectMap.set(item.subject, { total: 0, count: 0 });
      }
      const current = subjectMap.get(item.subject)!;
      current.total += avg;
      current.count += 1;
    });
    
    return Array.from(subjectMap.entries()).map(([subject, data]) => ({
      subject: subject.length > 20 ? subject.substring(0, 20) + '...' : subject,
      average: data.total / data.count,
    }));
  }, [filteredData]);

  // Export to CSV
  const exportToCSV = () => {
    const headers = [
      'ID',
      'Student ID',
      'Timestamp',
      'Academic Year',
      'Course',
      'Subject',
      'Q1: Learning Objectives',
      'Q2: Instructor Delivery',
      'Q3: Course Materials',
      'Q4: Assignments Relevance',
      'Q5: Instructor Accessibility',
      'Overall Average',
      'Comments'
    ];

    const rows = filteredData.map(item => [
      item.id,
      item.studentId,
      new Date(item.timestamp).toLocaleString(),
      item.academicYear,
      item.course,
      item.subject,
      item.q1,
      item.q2,
      item.q3,
      item.q4,
      item.q5,
      ((item.q1 + item.q2 + item.q3 + item.q4 + item.q5) / 5).toFixed(2),
      item.comments || ''
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `feedback_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#64748b] hover:text-[#137fec] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-['Lexend:Medium',sans-serif] text-[14px]">Back to Home</span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Lexend:Bold',sans-serif] text-[28px] text-[#0f172a] mb-2">
                Curriculum Feedback Dashboard
              </h1>
              <p className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b]">
                View and analyze student feedback responses
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 bg-[#137fec] text-white px-6 py-3 rounded-[12px] font-['Lexend:Bold',sans-serif] text-[14px] hover:bg-[#0d6edb] transition-colors shadow-[0px_4px_6px_-1px_rgba(19,127,236,0.2)]"
              >
                <Download className="w-4 h-4" />
                Export to CSV
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-white border border-[#e2e8f0] text-[#64748b] px-6 py-3 rounded-[12px] font-['Lexend:Bold',sans-serif] text-[14px] hover:border-[#137fec] hover:text-[#137fec] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Filters */}
        <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 mb-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-[#64748b]" />
            <h2 className="font-['Lexend:Bold',sans-serif] text-[16px] text-[#0f172a]">
              Filters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-['Lexend:Medium',sans-serif] text-[14px] text-[#64748b] mb-2">
                Academic Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-2 border border-[#e2e8f0] rounded-[8px] font-['Lexend:Regular',sans-serif] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#137fec]"
              >
                <option value="all">All Years</option>
                {academicYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-['Lexend:Medium',sans-serif] text-[14px] text-[#64748b] mb-2">
                Course
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2 border border-[#e2e8f0] rounded-[8px] font-['Lexend:Regular',sans-serif] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#137fec]"
              >
                <option value="all">All Courses</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-['Lexend:Medium',sans-serif] text-[14px] text-[#64748b] mb-2">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border border-[#e2e8f0] rounded-[8px] font-['Lexend:Regular',sans-serif] text-[14px] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#137fec]"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#eff6ff] p-3 rounded-[8px]">
                <FileText className="w-5 h-5 text-[#137fec]" />
              </div>
            </div>
            <div className="font-['Lexend:Bold',sans-serif] text-[28px] text-[#0f172a] mb-1">
              {stats.total}
            </div>
            <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b]">
              Total Responses
            </div>
          </div>

          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#f0fdf4] p-3 rounded-[8px]">
                <TrendingUp className="w-5 h-5 text-[#10b981]" />
              </div>
            </div>
            <div className="font-['Lexend:Bold',sans-serif] text-[28px] text-[#0f172a] mb-1">
              {stats.overallAvg.toFixed(2)}
            </div>
            <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b]">
              Overall Average
            </div>
          </div>

          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#fef3c7] p-3 rounded-[8px]">
                <BarChart3 className="w-5 h-5 text-[#f59e0b]" />
              </div>
            </div>
            <div className="font-['Lexend:Bold',sans-serif] text-[28px] text-[#0f172a] mb-1">
              {subjects.length}
            </div>
            <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b]">
              Total Subjects
            </div>
          </div>

          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#fae8ff] p-3 rounded-[8px]">
                <Users className="w-5 h-5 text-[#8b5cf6]" />
              </div>
            </div>
            <div className="font-['Lexend:Bold',sans-serif] text-[28px] text-[#0f172a] mb-1">
              {new Set(filteredData.map(d => d.studentId)).size}
            </div>
            <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b]">
              Unique Students
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Question Averages Chart */}
          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <h3 className="font-['Lexend:Bold',sans-serif] text-[18px] text-[#0f172a] mb-4">
              Average Scores by Question
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={questionAverages}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="question" 
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  domain={[0, 5]} 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <Tooltip />
                <Bar dataKey="average" fill="#137fec" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Rating Distribution Chart */}
          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <h3 className="font-['Lexend:Bold',sans-serif] text-[18px] text-[#0f172a] mb-4">
              Rating Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ratingDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ratingDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Averages */}
        {subjectAverages.length > 0 && (
          <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 mb-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <h3 className="font-['Lexend:Bold',sans-serif] text-[18px] text-[#0f172a] mb-4">
              Subject-wise Average Ratings
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectAverages}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="subject" 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis 
                  domain={[0, 5]} 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="average" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white rounded-[12px] border border-[#e2e8f0] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <h3 className="font-['Lexend:Bold',sans-serif] text-[18px] text-[#0f172a] mb-4">
            Detailed Responses ({filteredData.length} records)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Student ID
                  </th>
                  <th className="text-left font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Timestamp
                  </th>
                  <th className="text-left font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Subject
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Q1
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Q2
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Q3
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Q4
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Q5
                  </th>
                  <th className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Average
                  </th>
                  <th className="text-left font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-[#64748b] uppercase tracking-wider py-3 px-4">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => {
                  const average = ((item.q1 + item.q2 + item.q3 + item.q4 + item.q5) / 5).toFixed(2);
                  return (
                    <tr
                      key={item.id}
                      className={`border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'
                      }`}
                    >
                      <td className="font-['Lexend:Medium',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        {item.studentId}
                      </td>
                      <td className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b] py-3 px-4">
                        {new Date(item.timestamp).toLocaleDateString()} {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        {item.subject}
                      </td>
                      <td className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.q1 >= 4 ? 'bg-[#dcfce7] text-[#10b981]' : item.q1 === 3 ? 'bg-[#fef3c7] text-[#f59e0b]' : 'bg-[#fee2e2] text-[#ef4444]'
                        }`}>
                          {item.q1}
                        </span>
                      </td>
                      <td className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.q2 >= 4 ? 'bg-[#dcfce7] text-[#10b981]' : item.q2 === 3 ? 'bg-[#fef3c7] text-[#f59e0b]' : 'bg-[#fee2e2] text-[#ef4444]'
                        }`}>
                          {item.q2}
                        </span>
                      </td>
                      <td className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.q3 >= 4 ? 'bg-[#dcfce7] text-[#10b981]' : item.q3 === 3 ? 'bg-[#fef3c7] text-[#f59e0b]' : 'bg-[#fee2e2] text-[#ef4444]'
                        }`}>
                          {item.q3}
                        </span>
                      </td>
                      <td className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.q4 >= 4 ? 'bg-[#dcfce7] text-[#10b981]' : item.q4 === 3 ? 'bg-[#fef3c7] text-[#f59e0b]' : 'bg-[#fee2e2] text-[#ef4444]'
                        }`}>
                          {item.q4}
                        </span>
                      </td>
                      <td className="text-center font-['Lexend:Semi_Bold',sans-serif] text-[14px] text-[#0f172a] py-3 px-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          item.q5 >= 4 ? 'bg-[#dcfce7] text-[#10b981]' : item.q5 === 3 ? 'bg-[#fef3c7] text-[#f59e0b]' : 'bg-[#fee2e2] text-[#ef4444]'
                        }`}>
                          {item.q5}
                        </span>
                      </td>
                      <td className="text-center font-['Lexend:Bold',sans-serif] text-[16px] py-3 px-4">
                        <span className={`${
                          parseFloat(average) >= 4 ? 'text-[#10b981]' : parseFloat(average) >= 3 ? 'text-[#f59e0b]' : 'text-[#ef4444]'
                        }`}>
                          {average}
                        </span>
                      </td>
                      <td className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#64748b] py-3 px-4 max-w-[300px] truncate">
                        {item.comments || '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
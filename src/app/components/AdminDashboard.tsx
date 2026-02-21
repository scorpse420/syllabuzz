import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#137FEC", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export function AdminDashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"analytics" | "forms">(
    "analytics"
  );
  const [selectedProgram, setSelectedProgram] = useState("All");
const [selectedYear, setSelectedYear] = useState("All");
const [selectedSubject, setSelectedSubject] = useState("All");

useEffect(() => {
  setSelectedYear("All");
  setSelectedSubject("All");
}, [selectedProgram]);

useEffect(() => {
  setSelectedSubject("All");
}, [selectedYear]);

  /* ===========================
     FEEDBACK DATA (LIVE)
  ============================ */

  const [feedbackData, setFeedbackData] = useState<any[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbackData(data);
      setLoadingFeedback(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredFeedback = useMemo(() => {
  return feedbackData.filter((f) => {
    if (selectedProgram !== "All" && f.program !== selectedProgram)
      return false;
    if (selectedYear !== "All" && f.yearLevel !== selectedYear)
      return false;
    if (selectedSubject !== "All" && f.subject !== selectedSubject)
      return false;
    return true;
  });
}, [feedbackData, selectedProgram, selectedYear, selectedSubject]);

  /* ===========================
     EXPORT CSV (UNCHANGED)
  ============================ */

  const handleExportCSV = () => {
    if (!feedbackData.length) {
      alert("No feedback available to export.");
      return;
    }

    const headers = [
      "Student Email",
      "Program",
      "Year Level",
      "Semester",
      "Course",
      "Subject",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "Comments",
      "Timestamp",
    ];

    const rows = filteredFeedback.map((f) => [
      f.studentEmail || "",
      f.program || "",
      f.yearLevel || "",
      f.semester || "",
      f.course || "",
      f.subject || "",
      f.q1,
      f.q2,
      f.q3,
      f.q4,
      f.q5,
      f.comments || "",
      f.timestamp?.toDate
        ? f.timestamp.toDate().toLocaleString()
        : "",
    ]);

    const csv =
      [headers, ...rows]
        .map((row) =>
          row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "all_feedback.csv";
    link.click();
  };

  /* ===========================
     FORMS MANAGEMENT (UNCHANGED)
  ============================ */

  const [forms, setForms] = useState<any[]>([]);
  const [loadingForms, setLoadingForms] = useState(true);
  const [editingForm, setEditingForm] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    program: "",
    yearLevel: "",
    semester: "",
    course: "",
    subject: "",
  });

  useEffect(() => {
    const q = query(
      collection(db, "feedbackForms"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setForms(data);
      setLoadingForms(false);
    });

    return () => unsubscribe();
  }, []);

  const resetForm = () => {
    setFormData({
      program: "",
      yearLevel: "",
      semester: "",
      course: "",
      subject: "",
    });
    setEditingForm(null);
  };

  const handleCreateOrUpdate = async () => {
    if (
      !formData.program ||
      !formData.yearLevel ||
      !formData.semester ||
      !formData.course ||
      !formData.subject
    ) {
      alert("All fields are required.");
      return;
    }

    if (editingForm) {
      await updateDoc(doc(db, "feedbackForms", editingForm.id), {
        ...formData,
        updatedAt: serverTimestamp(),
      });
    } else {
      await addDoc(collection(db, "feedbackForms"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
    }

    resetForm();
  };

  const handleEdit = (form: any) => {
    setEditingForm(form);
    setFormData(form);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this feedback form?")) return;
    await deleteDoc(doc(db, "feedbackForms", id));
  };

  /* ===========================
     ANALYTICS
  ============================ */

  const stats = useMemo(() => {
    const total = filteredFeedback.length;
    if (!total) {
      return {
        total: 0,
        avgScores: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 },
      };
    }

    const avgScores = {
      q1:filteredFeedback.reduce((s, i) => s + i.q1, 0) / total,
      q2: filteredFeedback.reduce((s, i) => s + i.q2, 0) / total,
      q3: filteredFeedback.reduce((s, i) => s + i.q3, 0) / total,
      q4: filteredFeedback.reduce((s, i) => s + i.q4, 0) / total,
      q5: filteredFeedback.reduce((s, i) => s + i.q5, 0) / total,
    };

    return { total, avgScores };
  }, [filteredFeedback]);

  const overallAverage =
    stats.total === 0
      ? 0
      : (
          (stats.avgScores.q1 +
            stats.avgScores.q2 +
            stats.avgScores.q3 +
            stats.avgScores.q4 +
            stats.avgScores.q5) /
          5
        ).toFixed(2);

  const uniqueStudents = new Set(
    filteredFeedback.map((f) => f.studentEmail)
  ).size;

  const questionAverages = [
    { question: "Q1", average: stats.avgScores.q1 },
    { question: "Q2", average: stats.avgScores.q2 },
    { question: "Q3", average: stats.avgScores.q3 },
    { question: "Q4", average: stats.avgScores.q4 },
    { question: "Q5", average: stats.avgScores.q5 },
  ];

  const ratingDistribution = useMemo(() => {
    const dist: Record<number, number> = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    filteredFeedback.forEach((f) => {
      [f.q1, f.q2, f.q3, f.q4, f.q5].forEach((r) => dist[r]++);
    });

    return Object.entries(dist).map(([r, c]) => ({
      name: `${r} Star`,
      value: c,
    }));
  }, [filteredFeedback]);
   const subjectAverages = useMemo(() => {
  const map: Record<string, { total: number; count: number }> = {};

  filteredFeedback.forEach((f) => {
    if (!map[f.subject]) {
      map[f.subject] = { total: 0, count: 0 };
    }

    const avg =
      (f.q1 + f.q2 + f.q3 + f.q4 + f.q5) / 5;

    map[f.subject].total += avg;
    map[f.subject].count += 1;
  });

  return Object.entries(map).map(([subject, data]) => ({
    subject,
    average: data.total / data.count,
  }));
}, [filteredFeedback]);


  if (loadingFeedback || loadingForms) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading data...
      </div>
    );
  }
 
  return (
    <div className="h-screen bg-[#f8fafc] flex overflow-hidden">
      {/* SIDEBAR */}
<div className="w-72 bg-white border-r border-gray-200 h-full flex flex-col shadow-lg">
  {/* HEADER */}
  <div className="p-6 border-b border-gray-200">
  <div className="bg-gradient-to-r from-[#137fec] to-[#106cd1] rounded-2xl p-5 text-white shadow-md">
    <h2 className="text-xl font-bold tracking-wide">
      ADMIN PANEL
    </h2>
    <p className="text-sm opacity-90 mt-1">
      Curriculum Feedback System
    </p>
  </div>
</div>

  {/* NAVIGATION */}
  <div className="flex-1 p-6 space-y-4">

  <button
    onClick={() => setActiveTab("analytics")}
    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all text-base font-semibold ${
      activeTab === "analytics"
        ? "bg-[#137fec] text-white shadow-md"
        : "bg-[#f1f5f9] text-gray-700 hover:bg-[#e2e8f0]"
    }`}
  >
    Analytics Dashboard
  </button>

  <button
    onClick={() => setActiveTab("forms")}
    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all text-base font-semibold ${
      activeTab === "forms"
        ? "bg-[#137fec] text-white shadow-md"
        : "bg-[#f1f5f9] text-gray-700 hover:bg-[#e2e8f0]"
    }`}
  >
    Manage Feedback Forms
  </button>

</div>

  {/* LOGOUT SECTION */}
  <div className="p-6 border-t border-gray-200">
  <button
    onClick={() => navigate("/admin-login")}
    className="w-full flex items-center justify-center gap-3
               border border-[#137fec]
               text-[#137fec]
               bg-white
               hover:bg-red-50
               hover:border-red-500
               hover:text-red-600
               transition-all
               px-5 py-3
               rounded-xl
               font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 transition-all"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
    Logout
  </button>
</div>
</div>
      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto h-full">

        {activeTab === "analytics" && (
          <>
            {/* HEADER */}
            <div className="flex justify-between items-start mb-8">

  {/* LEFT SIDE */}
  <div>

    {/* BACK TO HOME */}
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 text-[#137fec] 
                 hover:text-[#106cd1] 
                 font-medium mb-3 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to Home
    </button>

    <h1 className="text-3xl font-bold text-gray-900">
      Curriculum Feedback Dashboard
    </h1>

    <p className="text-gray-500 mt-2">
      View and analyze student feedback responses
    </p>

  </div>

  {/* RIGHT SIDE = Export button stays here */}

              <button
  onClick={handleExportCSV}
  className="flex items-center gap-3
             bg-gradient-to-r from-[#137fec] to-[#106cd1]
             text-white
             px-6 py-3
             rounded-2xl
             font-semibold
             shadow-lg
             hover:shadow-xl
             hover:scale-[1.02]
             active:scale-[0.98]
             transition-all duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Export to CSV
</button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

  {/* FILTER HEADER */}
  <div className="flex items-center gap-3 mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2l-7 7v5l-4 2v-7L3 6V4z"
      />
    </svg>
    <h3 className="text-lg font-semibold text-gray-800">
      Filters
    </h3>
  </div>

  {/* FILTER CONTROLS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* PROGRAM */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Academic Year
      </label>
      <select
        value={selectedProgram}
        onChange={(e) => setSelectedProgram(e.target.value)}
        className="w-full h-12 rounded-xl border border-gray-300 
                   px-4 bg-gray-50 
                   focus:outline-none 
                   focus:ring-2 focus:ring-[#137fec] 
                   focus:border-[#137fec] 
                   transition-all"
      >
        <option value="All">All Programs</option>
        {[...new Set(forms.map(f => f.program))].map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
    </div>

    {/* YEAR */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Course
      </label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full h-12 rounded-xl border border-gray-300 
                   px-4 bg-gray-50 
                   focus:outline-none 
                   focus:ring-2 focus:ring-[#137fec] 
                   focus:border-[#137fec] 
                   transition-all"
      >
        <option value="All">All Years</option>
        {[...new Set(forms
          .filter(f => selectedProgram === "All" || f.program === selectedProgram)
          .map(f => f.yearLevel)
        )].map((y) => (
          <option key={y}>{y}</option>
        ))}
      </select>
    </div>

    {/* SUBJECT */}
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Subject
      </label>
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="w-full h-12 rounded-xl border border-gray-300 
                   px-4 bg-gray-50 
                   focus:outline-none 
                   focus:ring-2 focus:ring-[#137fec] 
                   focus:border-[#137fec] 
                   transition-all"
      >
        <option value="All">All Subjects</option>
        {[...new Set(forms
          .filter(f =>
            (selectedProgram === "All" || f.program === selectedProgram) &&
            (selectedYear === "All" || f.yearLevel === selectedYear)
          )
          .map(f => f.subject)
        )].map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </div>


            

  </div>
</div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <StatCard title="Total Responses" value={stats.total} />
              <StatCard title="Overall Average" value={overallAverage} />
              <StatCard title="Total Subjects" value={forms.length} />
              <StatCard title="Unique Students" value={uniqueStudents} />
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              <ChartCard title="Average Scores by Question">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={questionAverages}>

  <defs>
    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#137fec" stopOpacity={0.95}/>
      <stop offset="100%" stopColor="#106cd1" stopOpacity={0.75}/>
    </linearGradient>
  </defs>

  <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
  <XAxis dataKey="question" tick={{ fill: "#6b7280", fontSize: 12 }} />
  <YAxis domain={[0, 5]} tick={{ fill: "#6b7280", fontSize: 12 }} />
  <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb" }} />
  <Bar 
    dataKey="average" 
    fill="url(#colorGradient)" 
    radius={[8, 8, 0, 0]} 
  />
</BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Rating Distribution">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
  <Pie 
    data={ratingDistribution} 
    dataKey="value"
    innerRadius={60}
    outerRadius={90}
    paddingAngle={4}
  >
    {ratingDistribution.map((_, i) => (
      <Cell
        key={i}
        fill={COLORS[i % COLORS.length]}
      />
    ))}
  </Pie>

  <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb" }} />
  <Legend />
</PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
            <div className="mb-14">
            <ChartCard title="Subject-wise Average Ratings">
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={subjectAverages}>

  <defs>
    <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#10B981" stopOpacity={0.95}/>
      <stop offset="100%" stopColor="#059669" stopOpacity={0.75}/>
    </linearGradient>
  </defs>

  <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
  <XAxis dataKey="subject" tick={{ fill: "#6b7280", fontSize: 12 }} />
  <YAxis domain={[0, 5]} tick={{ fill: "#6b7280", fontSize: 12 }} />
  <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb" }} />

  <Bar 
    dataKey="average" 
    fill="url(#greenGradient)" 
    radius={[8, 8, 0, 0]} 
  />
</BarChart>
  </ResponsiveContainer>
</ChartCard>
</div>

            {/* DETAILED RESPONSES */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 font-semibold text-lg">
    Detailed Responses ({filteredFeedback.length})
  </div>

  <div className="px-6 pb-6">
    <table className="w-full text-left text-sm border-separate border-spacing-y-2">
      <thead>
        <tr className="text-gray-500 text-xs uppercase tracking-wider">
          <th>Subject</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Q5</th>
          <th>Comments</th>
        </tr>
      </thead>

      <tbody>
        {filteredFeedback.slice(0, 10).map((f) => (
          <tr
            key={f.id}
            className="bg-gray-50 hover:bg-gray-100 transition rounded-lg"
          >
            <td className="p-3 font-medium">{f.subject}</td>
            <td className="p-3">{f.q1}</td>
            <td className="p-3">{f.q2}</td>
            <td className="p-3">{f.q3}</td>
            <td className="p-3">{f.q4}</td>
            <td className="p-3">{f.q5}</td>
            <td className="p-3 max-w-xs truncate">
              {f.comments || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
          </>
        )}

        {activeTab === "forms" && (
          <>
            <h1 className="text-2xl font-bold mb-6">
              Manage Feedback Forms
            </h1>

            {/* CREATE / EDIT */}
            <div className="bg-white p-6 rounded-xl shadow border mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                {[
                  "program",
                  "yearLevel",
                  "semester",
                  "course",
                  "subject",
                ].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    value={(formData as any)[field]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field]: e.target.value,
                      })
                    }
                    className="border p-2 rounded-lg"
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleCreateOrUpdate}
                  className="bg-[#137fec] text-white px-6 py-2 rounded-lg"
                >
                  {editingForm ? "Update" : "Create"}
                </button>

                {editingForm && (
                  <button
                    onClick={resetForm}
                    className="border px-6 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* FORMS TABLE */}
            <div className="bg-white rounded-xl shadow border overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#f8fafc] border-b border-gray-200">
                  <tr>
                    <th className="p-3">Program</th>
                    <th className="p-3">Year</th>
                    <th className="p-3">Semester</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {forms.map((form) => (
                    <tr key={form.id} className="border-t">
                      <td className="p-3">{form.program}</td>
                      <td className="p-3">{form.yearLevel}</td>
                      <td className="p-3">{form.semester}</td>
                      <td className="p-3">{form.course}</td>
                      <td className="p-3">{form.subject}</td>
                      <td className="p-3 flex gap-4">
                        <button
                          onClick={() => handleEdit(form)}
                          className="text-[#137fec]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(form.id)}
                          className="text-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ===========================
   REUSABLE UI COMPONENTS
=========================== */

function StatCard({ title, value }: any) {

  const getIcon = () => {
    switch (title) {
      case "Total Responses":
        return (
          <svg className="h-6 w-6 text-[#137fec]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12h6M9 16h6M7 4h10l2 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6l2-2z"/>
          </svg>
        );

      case "Overall Average":
        return (
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="4 14 10 8 14 12 20 6"/>
            <line x1="20" y1="6" x2="20" y2="12"/>
          </svg>
        );

      case "Total Subjects":
        return (
          <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="18" y1="20" x2="18" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="16"/>
          </svg>
        );

      case "Unique Students":
        return (
          <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-3-3.87"/>
            <path d="M7 21v-2a4 4 0 013-3.87"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 
                    p-6 shadow-sm hover:shadow-md 
                    transition-all duration-200 hover:-translate-y-1">

      {/* ICON */}
      <div className="w-12 h-12 rounded-xl bg-gray-100 
                      flex items-center justify-center mb-4">
        {getIcon()}
      </div>

      {/* VALUE */}
      <div className="text-3xl font-bold text-gray-900">
        {value}
      </div>

      {/* LABEL */}
      <div className="text-sm text-gray-500 mt-2">
        {title}
      </div>

    </div>
  );
}

function ChartCard({ title, children }: any) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 
                    shadow-sm hover:shadow-md 
                    transition-all duration-200 
                    p-6">

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <div className="h-[2px] w-12 bg-[#137fec] mt-2 rounded-full" />
      </div>

      {children}
    </div>
  );
}
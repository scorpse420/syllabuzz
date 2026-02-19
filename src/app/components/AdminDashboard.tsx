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
import { useFeedback } from "../context/FeedbackContext";
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
} from "recharts";

const COLORS = ["#137FEC", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export function AdminDashboard() {
  const navigate = useNavigate();
 

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

  /* ===========================
     EXPORT CSV
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

    const rows = feedbackData.map((f) => [
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
          row
            .map((val) =>
              `"${String(val).replace(/"/g, '""')}"`
            )
            .join(",")
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
     FEEDBACK FORMS MANAGEMENT
  ============================ */

  const [forms, setForms] = useState<any[]>([]);
  const [loadingForms, setLoadingForms] = useState(true);
  const [editingForm, setEditingForm] = useState<any | null>(null);
  const [showAllForms, setShowAllForms] = useState(true);

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
    const total = feedbackData.length;
    if (!total) {
      return {
        total: 0,
        avgScores: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 },
      };
    }

    const avgScores = {
      q1: feedbackData.reduce((s, i) => s + i.q1, 0) / total,
      q2: feedbackData.reduce((s, i) => s + i.q2, 0) / total,
      q3: feedbackData.reduce((s, i) => s + i.q3, 0) / total,
      q4: feedbackData.reduce((s, i) => s + i.q4, 0) / total,
      q5: feedbackData.reduce((s, i) => s + i.q5, 0) / total,
    };

    return { total, avgScores };
  }, [feedbackData]);

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

    feedbackData.forEach((f) => {
      [f.q1, f.q2, f.q3, f.q4, f.q5].forEach((r) => dist[r]++);
    });
    return Object.entries(dist).map(([r, c]) => ({
      name: `${r} Star`,
      value: c,
    }));
  }, [feedbackData]);

  if (loadingFeedback || loadingForms) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">

        {/* SUMMARY + EXPORT */}
        <div className="flex justify-between items-center mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
            <div className="text-sm text-gray-500">Total Responses</div>
            <div className="text-2xl font-bold">{stats.total}</div>
          </div>

          <button
            onClick={handleExportCSV}
            className="bg-[#10B981] text-white px-6 py-3 rounded-lg"
          >
            Export All Feedback (CSV)
          </button>
        </div>
        {/* ANALYTICS GRAPHS */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
    <h3 className="text-lg font-semibold mb-4">
      Average Scores by Question
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={questionAverages}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="question" />
        <YAxis domain={[0, 5]} />
        <Tooltip />
        <Bar dataKey="average" fill="#137fec" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0]">
    <h3 className="text-lg font-semibold mb-4">
      Rating Distribution
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={ratingDistribution} dataKey="value">
          {ratingDistribution.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>

</div>


        {/* FORM CREATION */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] mb-8">
          <h3 className="text-lg font-semibold mb-6">
            {editingForm ? "Edit Feedback Form" : "Create Feedback Form"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {["program", "yearLevel", "semester", "course", "subject"].map((field) => (
              <input
                key={field}
                placeholder={field}
                value={(formData as any)[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
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

        {/* FORMS LIST */}
        {showAllForms && (
          <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#f1f5f9]">
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
        )}

      </div>
    </div>
    
  );
}

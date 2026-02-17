import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useFeedback } from "../context/FeedbackContext";
import {
  Download,
  Filter,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";


interface FeedbackResponse {
  id: string;
  studentEmail: string;
  timestamp: any;
  academicYear: string;
  course: string;
  subject: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  comments?: string;
}

const COLORS = ["#137FEC", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

export function AdminDashboard() {
  const navigate = useNavigate();
  const { setAdminAuthenticated } = useFeedback();

  const [feedbackData, setFeedbackData] = useState<FeedbackResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

 useEffect(() => {
  const q = query(
    collection(db, "feedback"),
    orderBy("timestamp", "desc")
  );

  const unsubscribe = onSnapshot(
  q,
  (snapshot) => {
    console.log("Realtime snapshot fired", snapshot.size);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as FeedbackResponse[];

    setFeedbackData(data);
    setLoading(false);
  },
  (error) => {
    console.error("Realtime error:", error);
    setLoading(false);
  }
);

  return () => unsubscribe();
}, []);


  const handleLogout = () => {
    setAdminAuthenticated(false);
    navigate("/");
  };

  // FILTER VALUES
  const academicYears = useMemo(
    () => Array.from(new Set(feedbackData.map((d) => d.academicYear))),
    [feedbackData]
  );

  const courses = useMemo(
    () => Array.from(new Set(feedbackData.map((d) => d.course))),
    [feedbackData]
  );

  const subjects = useMemo(
    () => Array.from(new Set(feedbackData.map((d) => d.subject))),
    [feedbackData]
  );

  const filteredData = useMemo(() => {
    return feedbackData.filter((item) => {
      if (selectedYear !== "all" && item.academicYear !== selectedYear)
        return false;
      if (selectedCourse !== "all" && item.course !== selectedCourse)
        return false;
      if (selectedSubject !== "all" && item.subject !== selectedSubject)
        return false;
      return true;
    });
  }, [feedbackData, selectedYear, selectedCourse, selectedSubject]);

  const stats = useMemo(() => {
    const total = filteredData.length;
    if (total === 0) {
      return {
        total: 0,
        avgScores: { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 },
        overallAvg: 0,
      };
    }

    const avgScores = {
      q1:
        filteredData.reduce((sum, item) => sum + item.q1, 0) / total,
      q2:
        filteredData.reduce((sum, item) => sum + item.q2, 0) / total,
      q3:
        filteredData.reduce((sum, item) => sum + item.q3, 0) / total,
      q4:
        filteredData.reduce((sum, item) => sum + item.q4, 0) / total,
      q5:
        filteredData.reduce((sum, item) => sum + item.q5, 0) / total,
    };

    const overallAvg =
      (avgScores.q1 +
        avgScores.q2 +
        avgScores.q3 +
        avgScores.q4 +
        avgScores.q5) /
      5;

    return { total, avgScores, overallAvg };
  }, [filteredData]);

  const questionAverages = [
    { question: "Q1: Learning Objectives", average: stats.avgScores.q1 },
    { question: "Q2: Instructor Delivery", average: stats.avgScores.q2 },
    { question: "Q3: Course Materials", average: stats.avgScores.q3 },
    { question: "Q4: Assignments Relevance", average: stats.avgScores.q4 },
    { question: "Q5: Instructor Accessibility", average: stats.avgScores.q5 },
  ];

  const ratingDistribution = useMemo(() => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    filteredData.forEach((item) => {
      [item.q1, item.q2, item.q3, item.q4, item.q5].forEach(
        (rating) => {
          distribution[rating as keyof typeof distribution]++;
        }
      );
    });
    return Object.entries(distribution).map(([rating, count]) => ({
      name: `${rating} Star`,
      value: count,
    }));
  }, [filteredData]);

  const exportToCSV = () => {
    const headers = [
      "Student Email",
      "Timestamp",
      "Academic Year",
      "Course",
      "Subject",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "Average",
      "Comments",
    ];

    const rows = filteredData.map((item) => {
      const avg =
        (item.q1 +
          item.q2 +
          item.q3 +
          item.q4 +
          item.q5) /
        5;

      return [
        item.studentEmail,
        item.timestamp?.toDate().toLocaleString(),
        item.academicYear,
        item.course,
        item.subject,
        item.q1,
        item.q2,
        item.q3,
        item.q4,
        item.q5,
        avg.toFixed(2),
        item.comments || "",
      ];
    });

    const csv =
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback_export.csv";
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading feedback...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* HEADER */}
      <div className="bg-white border-b border-[#e2e8f0] px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[#0f172a]">
              Curriculum Feedback Dashboard
            </h1>
            <p className="text-sm text-[#64748b]">
              View and analyze student feedback responses
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              className="bg-[#137fec] text-white px-6 py-3 rounded-[12px]"
            >
              Export to CSV
            </button>

            <button
              onClick={handleLogout}
              className="border px-6 py-3 rounded-[12px]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-6">
        <div className="text-lg mb-4">
          Total Responses: {stats.total}
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={questionAverages}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="question" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="average" fill="#137fec" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

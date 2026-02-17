import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SelectYearPage } from "./pages/SelectYearPage";
import { SelectCoursePage } from "./pages/SelectCoursePage";
import { SelectSubjectPage } from "./pages/SelectSubjectPage";
import { FeedbackFormPage } from "./pages/FeedbackFormPage";
import { SuccessPage } from "./pages/SuccessPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { AdminDashboard } from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <FeedbackProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/select-year" element={<SelectYearPage />} />
          <Route path="/select-course" element={<SelectCoursePage />} />
          <Route path="/select-subject" element={<SelectSubjectPage />} />
          <Route path="/feedback-form" element={<FeedbackFormPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />

         <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>




          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FeedbackProvider>
    </BrowserRouter>
  );
}

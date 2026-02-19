import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: any) {
  const { user, role, loading } = useAuth();

  if (loading) return <div className="p-10">Checking access...</div>;

  if (!user || role !== "admin") {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

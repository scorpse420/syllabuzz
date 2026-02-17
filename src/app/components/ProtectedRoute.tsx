import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: any) {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user || role !== "admin") {
    return <Navigate to="/admin-login" />;
  }

  return children;
}

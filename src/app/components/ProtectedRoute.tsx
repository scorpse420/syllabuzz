import { Navigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { state } = useFeedback();

  if (!state.isAdminAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
}

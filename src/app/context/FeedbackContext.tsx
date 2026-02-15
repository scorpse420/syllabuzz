import { createContext, useContext, useState, ReactNode } from 'react';

interface FeedbackState {
  studentId: string;
  academicYear: string;
  course: string;
  subject: string;
  responses: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    q5: number;
    comments?: string;
  } | null;
  isAdminAuthenticated: boolean;
}

interface FeedbackContextType {
  state: FeedbackState;
  setStudentId: (id: string) => void;
  setAcademicYear: (year: string) => void;
  setCourse: (course: string) => void;
  setSubject: (subject: string) => void;
  setResponses: (responses: FeedbackState['responses']) => void;
  setAdminAuthenticated: (authenticated: boolean) => void;
  resetState: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

const initialState: FeedbackState = {
  studentId: '',
  academicYear: '',
  course: '',
  subject: '',
  responses: null,
  isAdminAuthenticated: false,
};

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FeedbackState>(initialState);

  const setStudentId = (id: string) => {
    setState(prev => ({ ...prev, studentId: id }));
  };

  const setAcademicYear = (year: string) => {
    setState(prev => ({ ...prev, academicYear: year }));
  };

  const setCourse = (course: string) => {
    setState(prev => ({ ...prev, course: course }));
  };

  const setSubject = (subject: string) => {
    setState(prev => ({ ...prev, subject: subject }));
  };

  const setResponses = (responses: FeedbackState['responses']) => {
    setState(prev => ({ ...prev, responses }));
  };

  const setAdminAuthenticated = (authenticated: boolean) => {
    setState(prev => ({ ...prev, isAdminAuthenticated: authenticated }));
  };

  const resetState = () => {
    setState(initialState);
  };

  return (
    <FeedbackContext.Provider
      value={{
        state,
        setStudentId,
        setAcademicYear,
        setCourse,
        setSubject,
        setResponses,
        setAdminAuthenticated,
        resetState,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
}
import { createContext, useContext, useState, ReactNode } from "react";

interface FeedbackState {
  studentEmail: string;
  program: string;
  yearLevel: string;
  course: string;
  subject: string;
  semester:string;
}

interface FeedbackContextType {
  state: FeedbackState;
  setStudentEmail: (email: string) => void;
  setProgram: (program: string) => void;
  setYearLevel: (yearLevel: string) => void;
  setCourse: (course: string) => void;
  setSemester: (semester: string) => void;
  setSubject: (subject: string) => void;
  resetState: () => void;
}

const initialState: FeedbackState = {
  studentEmail: "",
  program: "",
  yearLevel: "",
  course: "",
  subject: "",
  semester:"",
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FeedbackState>(initialState);

  const updateState = (updates: Partial<FeedbackState>) =>
    setState((prev) => ({ ...prev, ...updates }));

  return (
    <FeedbackContext.Provider
      value={{
        state,
        setStudentEmail: (studentEmail) => updateState({ studentEmail }),
        setProgram: (program) => updateState({ program }),
        setYearLevel: (yearLevel) => updateState({ yearLevel }),
        setCourse: (course) => updateState({ course }),
        setSubject: (subject) => updateState({ subject }),
        setSemester: (semester) => updateState({ semester }),
        resetState: () => setState(initialState),
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within FeedbackProvider");
  }
  return context;
}

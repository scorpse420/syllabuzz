import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

interface AuthContextType {
  user: User | null;
  role: "admin" | "student" | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"admin" | "student" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    try {
      if (firebaseUser) {
        setUser(firebaseUser);

        const docRef = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          setRole(snap.data().role);
        } else {
          console.log("No role document found");
          setRole(null);
        }
      } else {
        setUser(null);
        setRole(null);
      }
    } catch (error) {
      console.error("AuthContext error:", error);
      setUser(null);
      setRole(null);
    } finally {
      setLoading(false);
    }
  });

  return () => unsubscribe();
}, []);


  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err: any) {
  console.error("Login error:", err);
  setError(err.message);
}

  };

  return (
    <div className="min-h-screen bg-[#137fec] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-96 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Admin Login</h2>

        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 border rounded-lg"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-[#137fec] text-white p-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";
import AppHeader from "../components/AppHeader";
export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // NEW

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
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">
      <AppHeader />
      {/* Wider White Card */}
      <div className="w-full max-w-[600px] bg-white rounded-3xl shadow-2xl p-14 flex flex-col items-center text-center animate-fadeIn">

        {/* Admin Icon Circle */}
        <div className="w-28 h-28 bg-[#137fec]/10 rounded-full mb-8 shadow-md animate-popIn flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#137fec]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l8 4v6c0 5.2-3.4 9.9-8 11-4.6-1.1-8-5.8-8-11V6l8-4z"/>
            <path d="M12 7v5l3 2" fill="white"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-bold text-[#0f172a] text-[34px] leading-[40px] mb-10">
          Admin Login
        </h1>

        {/* Email Input */}
        <div className="w-full mb-6">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[16px] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300"
          />
        </div>

        {/* Password Input With Eye */}
        <div className="w-full relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[16px] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300 pr-14"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#137fec] transition"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7 1-2 3.5-5 7-6m3 0a9.956 9.956 0 015 2.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-[13px] w-full text-left mb-4">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-4 w-full py-4 rounded-2xl
            font-bold text-[20px]
            bg-[#137fec] text-white
            transition-all duration-300 active:scale-95 hover:bg-[#106cd1] shadow-md"
        >
          Login
        </button>

      </div>
    </div>
  );
}
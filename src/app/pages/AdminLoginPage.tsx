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
    <div className="min-h-screen flex items-center justify-center bg-[#137fec] px-4">

      {/* White Card Container */}
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center animate-fadeIn">

        {/* Admin Icon Circle */}
        <div className="w-28 h-28 bg-[#137fec]/10 rounded-full mb-8 shadow-md animate-popIn flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#137fec]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Shield-style admin icon */}
            <path d="M12 2l8 4v6c0 5.2-3.4 9.9-8 11-4.6-1.1-8-5.8-8-11V6l8-4z"/>
            <path d="M12 7v5l3 2" fill="white"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="font-['Lexend:Bold',sans-serif] font-bold text-[#0f172a] text-[30px] leading-[36px] mb-8 tracking-[-0.5px]">
          Admin Login
        </h1>

        {/* Email Input */}
        <div className="w-full mb-5">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[16px] font-['Lexend:Regular',sans-serif] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300"
          />
        </div>

        {/* Password Input */}
        <div className="w-full">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-gray-100 outline-none text-[#0f172a] text-[16px] font-['Lexend:Regular',sans-serif] shadow-sm focus:ring-4 focus:ring-[#137fec]/30 transition-all duration-300"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="font-['Lexend:Regular',sans-serif] text-red-500 text-[13px] mt-4 w-full text-left">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-8 w-full py-3 rounded-2xl
            font-['Lexend:Bold',sans-serif] font-bold text-[20px] tracking-[0.4px]
            bg-[#137fec] text-white
            transition-all duration-300 active:scale-95 hover:bg-[#106cd1] shadow-md"
        >
          Login
        </button>

      </div>
    </div>
  );
}

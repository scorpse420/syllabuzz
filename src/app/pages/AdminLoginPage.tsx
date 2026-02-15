import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFeedback } from '../context/FeedbackContext';
import svgPaths from '../../imports/svg-898z18bcj4';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const { setAdminAuthenticated } = useFeedback();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple authentication - in production this would be real authentication
    if (username === 'admin' && password === 'admin123') {
      setAdminAuthenticated(true);
      navigate('/admin');
    } else {
      setError('Invalid credentials. Try username: admin, password: admin123');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="bg-[#137fec] content-stretch flex min-h-screen overflow-clip relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center size-full px-[16px] relative">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[448px]">
              {/* Logo */}
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                <div className="bg-white content-stretch flex flex-col items-center p-[20px] relative rounded-[100px] shrink-0">
                  <div className="h-[60px] relative shrink-0 w-[60px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                      <g id="Icon">
                        <path d={svgPaths.p1c09c780} fill="var(--fill-0, #137FEC)" id="Vector" />
                        <path d={svgPaths.p2e3a2ca0} fill="var(--fill-1, #137FEC)" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[32px] text-center text-white w-full">
                  <p className="leading-[40px] whitespace-pre-wrap">Admin Login</p>
                </div>
              </div>

              {/* Description */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-[24px] justify-center leading-[24px] relative shrink-0 text-[16px] text-center text-white w-full whitespace-pre-wrap">
                  <p>Access the feedback dashboard</p>
                </div>
              </div>

              {/* Demo Credentials Info */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm relative rounded-[12px] shrink-0 w-full mt-[8px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] px-[20px] py-[16px] relative w-full">
                  <div className="font-['Lexend:Semi_Bold',sans-serif] text-[12px] text-white uppercase tracking-wider">
                    Demo Credentials
                  </div>
                  <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-white/80">
                    Username: <span className="text-white font-['Lexend:Medium',sans-serif]">admin</span>
                  </div>
                  <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-white/80">
                    Password: <span className="text-white font-['Lexend:Medium',sans-serif]">admin123</span>
                  </div>
                </div>
              </div>

              {/* Input Fields */}
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full mt-[8px]">
                {/* Username */}
                <div className="w-full">
                  <label className="block font-['Lexend:Medium',sans-serif] text-[14px] text-white/90 mb-2">
                    Username
                  </label>
                  <div className="bg-white relative rounded-[12px] w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[16px] relative w-full">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          setError('');
                        }}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter username"
                        className="flex-1 font-['Lexend:Regular',sans-serif] text-[16px] text-[#0f172a] outline-none bg-transparent placeholder:text-[#94a3b8]"
                        autoFocus
                      />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div className="w-full">
                  <label className="block font-['Lexend:Medium',sans-serif] text-[14px] text-white/90 mb-2">
                    Password
                  </label>
                  <div className="bg-white relative rounded-[12px] w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[16px] relative w-full">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter password"
                        className="flex-1 font-['Lexend:Regular',sans-serif] text-[16px] text-[#0f172a] outline-none bg-transparent placeholder:text-[#94a3b8]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-[#fee2e2] border border-[#fecaca] relative rounded-[12px] shrink-0 w-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] py-[12px] relative w-full">
                    <div className="font-['Lexend:Regular',sans-serif] text-[14px] text-[#991b1b]">
                      {error}
                    </div>
                  </div>
                </div>
              )}

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={!username.trim() || !password.trim()}
                className="bg-white relative rounded-[12px] shrink-0 w-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
                  <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#137fec] text-[16px] text-center">
                    <p className="leading-[24px] whitespace-pre-wrap">Login to Dashboard</p>
                  </div>
                </div>
              </button>

              {/* Back to Home Link */}
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full mt-[12px]">
                <button
                  onClick={() => navigate('/')}
                  className="font-['Lexend:Medium',sans-serif] text-[14px] text-white/80 hover:text-white underline transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
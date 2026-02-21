import { useNavigate } from "react-router-dom";

export default function CurriculumFeedbackHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">

      {/* NAVBAR */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#0f172a]">
            Curriculum <span className="text-[#137fec]">Feedback</span>
          </h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <button className="hover:text-[#137fec] transition">
              About
            </button>
            <button className="hover:text-[#137fec] transition">
              Privacy
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-5xl font-bold text-[#0f172a] leading-tight">
                Improve Curriculum Through
                <span className="block text-[#137fec]">
                  Meaningful Student Feedback
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                This platform enables structured, transparent,
                and data-driven feedback to continuously enhance
                academic programs.
              </p>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#137fec] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                  Student Login
                </button>

                <button
                  onClick={() => navigate("/admin-login")}
                  className="border border-[#137fec] text-[#137fec] px-8 py-4 rounded-xl font-semibold hover:bg-[#137fec] hover:text-white transition"
                >
                  Admin Login
                </button>
              </div>
            </div>

            {/* RIGHT VISUAL BLOCK */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#137fec]/10 to-[#137fec]/30 rounded-3xl p-16 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="text-[#137fec] text-sm uppercase tracking-wider font-semibold mb-4">
                    Continuous Improvement
                  </div>
                  <div className="text-6xl text-[#137fec] opacity-40">
                    🎓
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
              Structured Evaluation
            </h3>
            <p className="text-gray-600 text-sm">
              Standardized questions ensure measurable academic insights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Administrators can analyze trends instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
              Data-Driven Decisions
            </h3>
            <p className="text-gray-600 text-sm">
              Improve programs using evidence, not assumptions.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-500">
          <span>© 2026 Academic Portal</span>
          <span>v2.4.0</span>
        </div>
      </footer>

    </div>
  );
}
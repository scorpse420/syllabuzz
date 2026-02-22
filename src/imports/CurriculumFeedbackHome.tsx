import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, BarChart3, ShieldCheck } from "lucide-react";
export default function CurriculumFeedbackHome() {
  const navigate = useNavigate();

  return (
  <div className="min-h-screen bg-[#f8fafc] flex flex-col text-[16px]">

    {/* NAVBAR */}
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 h-24 flex justify-between items-center">

        {/* BRAND */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#137fec] to-[#0e5fc7] flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" strokeWidth={2.2} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-[#0f172a]">Sylla</span>
            <span className="text-[#137fec]">buzz</span>
          </h1>
        </div>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-12 text-base font-medium text-gray-600">
         <button
  onClick={() => {
    document.getElementById("why")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="hover:text-[#137fec] transition"
>
  Why Use
</button>

<button
  onClick={() => {
    document.getElementById("how")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="hover:text-[#137fec] transition"
>
  How It Works
</button>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#137fec] text-white px-8 py-3 rounded-full hover:bg-[#106cd1] transition shadow-md text-lg"
          >
            Get Started
          </button>
        </div>

      </div>
    </header>

    {/* HERO */}
    <section className="relative flex-1 flex items-center pt-40 pb-32">

  {/* Decorative Mosaic Layer */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute right-0 top-0 w-[50%] h-full pointer-events-none">
      <div className="shard shard-1"></div>
      <div className="shard shard-2"></div>
      <div className="shard shard-3"></div>
      <div className="shard shard-4"></div>
      <div className="shard shard-5"></div>
      <div className="shard shard-6"></div>
      <div className="shard shard-7"></div>
      <div className="shard shard-8"></div>

    </div>
  </div>

  {/* Content Layer */}
  <div className="relative z-10 max-w-7xl mx-auto px-10 w-full">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.12] text-[#0f172a] max-w-2xl">
  Improve Curriculum Through
  <span className="block text-[#137fec]">
    Meaningful Student Feedback
  </span>
</h2>
        <p className="mt-10 text-xl text-gray-600 max-w-2xl leading-relaxed">
          A structured, transparent and data-driven platform
          designed to enhance academic programs through real student insight.
        </p>

        <div className="mt-12 flex gap-6">

  {/* Primary Button */}
  <button
    onClick={() => navigate("/login")}
    className="flex items-center gap-3 bg-gradient-to-br from-[#137fec] to-[#0e5fc7] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
  >
    <GraduationCap className="w-5 h-5" strokeWidth={2} />
    Submit Feedback
  </button>

  {/* Secondary Button */}
  <button
    onClick={() => navigate("/admin-login")}
    className="flex items-center gap-3 border border-gray-300 text-[#0f172a] px-10 py-5 rounded-2xl font-semibold text-lg bg-white hover:border-[#137fec] hover:text-[#137fec] transition-all duration-500"
  >
    <ShieldCheck className="w-5 h-5" strokeWidth={2} />
    Admin Dashboard
  </button>

</div>
      </motion.div>

    </div>
  </div>

</section>

    {/* WHY SECTION */}
    <section id="why" className="bg-[#f1f5f9] py-32">
  <motion.div
    className="max-w-7xl mx-auto px-10"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
  >
      <div className="max-w-7xl mx-auto px-10">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl font-bold text-[#0f172a] mb-8">
            Why Use Syllabuzz?
          </h2>
          <p className="text-xl text-gray-600">
            Built to make evaluation simple, secure and analytically powerful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Card */}
          <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#137fec]/10 flex items-center justify-center mb-8">
              <GraduationCap className="w-7 h-7 text-[#137fec]" strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">
              Student Friendly
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Clean interface. Fast submission. No friction.
              Feedback completed in under five minutes.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8">
              <BarChart3 className="w-7 h-7 text-green-600" strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">
              Real-Time Analytics
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Instantly visualize trends and performance with dynamic dashboards.
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-8">
              <ShieldCheck className="w-7 h-7 text-yellow-600" strokeWidth={2} />
            </div>

            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">
              Secure & Anonymous
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Confidential submission ensures honest and unbiased responses.
            </p>
          </div>

        </div>
      </div>
      </motion.div>
    </section>
    {/* HOW IT WORKS */}
    
<section id="how" className="bg-white py-32">
  <motion.div
    className="max-w-7xl mx-auto px-10"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
  >

    <div className="text-center max-w-3xl mx-auto mb-24">
      <h2 className="text-5xl font-semibold text-[#0f172a] mb-6">
        How It Works
      </h2>
      <p className="text-xl text-gray-600">
        Submit your course feedback in four simple steps.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-16 text-center">

      {[ 
        { step: "1", title: "Login", desc: "Enter your Email Id" },
        { step: "2", title: "Select", desc: "Choose course & subject" },
        { step: "3", title: "Rate", desc: "Answer questions" },
        { step: "4", title: "Submit", desc: "Your feedback matters" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          className="transition-all duration-500 hover:-translate-y-2"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#137fec] to-[#0e5fc7] text-white flex items-center justify-center text-2xl font-semibold mb-6 shadow-md">
            {item.step}
          </div>

          <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
            {item.title}
          </h3>

          <p className="text-base text-gray-600">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </motion.div>
</section>


    {/* CTA */}
<section className="bg-gradient-to-r from-[#137fec] to-[#0e5fc7] py-32 text-white">
  <motion.div
    className="max-w-5xl mx-auto px-10 text-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
  >     <div className="max-w-5xl mx-auto px-10 text-center">

        <h2 className="text-6xl font-bold mb-8">
          Ready to Share Your Feedback?
        </h2>

        <p className="text-xl text-white/90 mb-16">
          Help build better academic programs through meaningful evaluation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8">

          <button
            onClick={() => navigate("/login")}
            className="bg-white text-[#137fec] px-12 py-5 rounded-2xl font-semibold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition"
          >
            Get Started as Student
          </button>

          <button
            onClick={() => navigate("/admin-login")}
            className="border-2 border-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#137fec] transition"
          >
            Access Admin Portal
          </button>

        </div>
      </div>
      </motion.div> 
    </section>

    {/* FOOTER */}
    <footer className="bg-[#e2e8f0] py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#137fec] to-[#0e5fc7] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
          </div>

          <span className="font-semibold text-[#0f172a] text-lg">
            Syllabuzz
          </span>
        </div>

        <div className="text-base text-gray-600">
          © 2026 Syllabuzz. Improving education through structured feedback.
        </div>

      </div>
    </footer>

  </div>
);
}
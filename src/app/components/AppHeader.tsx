import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-6 left-8 z-50 flex items-center gap-3 cursor-pointer"
         onClick={() => navigate("/")}>
      
      <div className="w-12 h-12 rounded-2xl 
                bg-white 
                flex items-center justify-center 
                shadow-lg">
  <GraduationCap className="w-6 h-6 text-[#137fec]" strokeWidth={2.4} />
</div>

      <h1 className="text-3xl font-bold tracking-tight text-white">
        <span className="text-white">Sylla</span>
        <span className="text-[#e0f2fe]">buzz</span>
      </h1>
    </div>
  );
}
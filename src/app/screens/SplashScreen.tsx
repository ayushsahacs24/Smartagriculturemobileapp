import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Sprout } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/language");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] to-[#66BB6A] flex flex-col items-center justify-center p-6">
      <div className="text-center animate-fade-in">
        {/* App Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
            <Sprout className="w-20 h-20 text-[#2E7D32]" strokeWidth={2.5} />
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          AgriSense
        </h1>

        {/* Tagline */}
        <p className="text-xl text-white/90 font-medium mb-12">
          Smart Farming with Satellite Insights
        </p>

        {/* Loading Indicator */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes loading-bar {
          from { width: 0%; margin-left: 0%; }
          50% { width: 50%; margin-left: 25%; }
          to { width: 100%; margin-left: 0%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

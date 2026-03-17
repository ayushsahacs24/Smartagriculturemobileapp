import { Droplets, CloudRain, Thermometer, Sprout, CheckCircle, X } from "lucide-react";

interface Advisory {
  id: number;
  category: "irrigation" | "weather" | "crop" | "general";
  priority: "high" | "medium" | "low";
  action: string;
  reason: string;
  icon: React.ComponentType<any>;
  actionType: "do" | "avoid";
}

const advisories: Advisory[] = [
  {
    id: 1,
    category: "irrigation",
    priority: "high",
    action: "Water crops today in the evening",
    reason: "Soil moisture is at 38% which is below optimal level for healthy crop growth.",
    icon: Droplets,
    actionType: "do",
  },
  {
    id: 2,
    category: "weather",
    priority: "high",
    action: "Rain expected, avoid irrigation",
    reason: "Heavy rainfall forecasted in next 24-48 hours. Rainfall: 40-60mm expected.",
    icon: CloudRain,
    actionType: "avoid",
  },
  {
    id: 3,
    category: "crop",
    priority: "medium",
    action: "High temperature stress detected",
    reason: "Temperature above 35°C. Consider shade netting or mulching to protect crops.",
    icon: Thermometer,
    actionType: "do",
  },
  {
    id: 4,
    category: "general",
    priority: "medium",
    action: "Apply organic fertilizer",
    reason: "Based on crop growth stage, organic fertilizer application will boost yield.",
    icon: Sprout,
    actionType: "do",
  },
];

export function AdvisoryScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-b-3xl shadow-lg p-6">
        <h1 className="text-white text-2xl font-bold mb-2">Crop Advisory</h1>
        <p className="text-white/90 text-sm">AI-powered farming recommendations</p>
      </div>

      <div className="p-4">
        {/* Today's Date */}
        <div className="mb-4 px-1">
          <p className="text-sm text-gray-500">Tuesday, March 17, 2026</p>
          <h2 className="text-xl font-bold text-gray-800">Today's Recommendations</h2>
        </div>

        {/* Advisory Cards */}
        <div className="space-y-3 mb-6">
          {advisories.map((advisory) => {
            const Icon = advisory.icon;
            const isAvoid = advisory.actionType === "avoid";
            
            return (
              <div
                key={advisory.id}
                className={`rounded-2xl shadow-md p-5 border-l-4 ${
                  isAvoid
                    ? "bg-[#FFEBEE] border-[#F44336]"
                    : advisory.priority === "high"
                    ? "bg-[#E8F5E9] border-[#4CAF50]"
                    : "bg-white border-[#66BB6A]"
                }`}
              >
                <div className="flex items-start">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${
                      isAvoid ? "bg-white" : "bg-white/70"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isAvoid
                          ? "text-[#F44336]"
                          : advisory.priority === "high"
                          ? "text-[#4CAF50]"
                          : "text-[#66BB6A]"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-gray-800 leading-tight">
                        {advisory.action}
                      </h3>
                      {isAvoid ? (
                        <X className="w-6 h-6 text-[#F44336] flex-shrink-0 ml-2" strokeWidth={3} />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0 ml-2" />
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{advisory.reason}</p>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          advisory.priority === "high"
                            ? "bg-[#F44336] text-white"
                            : "bg-[#FF9800] text-white"
                        }`}
                      >
                        {advisory.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                        {advisory.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Best Practices Section */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Best Practices</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#A5D6A7] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Water in evening hours</p>
                <p className="text-sm text-gray-600">
                  Reduce water loss due to evaporation by irrigating after 4 PM
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#A5D6A7] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Monitor NDVI regularly</p>
                <p className="text-sm text-gray-600">
                  Check satellite data twice a week to catch crop stress early
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-[#A5D6A7] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Use drip irrigation</p>
                <p className="text-sm text-gray-600">
                  Save up to 60% water with efficient drip irrigation systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Weather-Based Planning */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-2xl shadow-md p-5 text-white">
          <h3 className="font-bold text-lg mb-3">7-Day Weather Outlook</h3>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white/20 rounded-lg p-2 text-center backdrop-blur-sm">
              <p className="text-xs mb-1">Today</p>
              <Thermometer className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">32°C</p>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center backdrop-blur-sm">
              <p className="text-xs mb-1">Wed</p>
              <CloudRain className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">28°C</p>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center backdrop-blur-sm">
              <p className="text-xs mb-1">Thu</p>
              <CloudRain className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">26°C</p>
            </div>
            <div className="bg-white/20 rounded-lg p-2 text-center backdrop-blur-sm">
              <p className="text-xs mb-1">Fri</p>
              <Thermometer className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">30°C</p>
            </div>
          </div>

          <p className="text-sm text-white/90 mt-3">
            Plan your farming activities based on weather forecasts to optimize productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

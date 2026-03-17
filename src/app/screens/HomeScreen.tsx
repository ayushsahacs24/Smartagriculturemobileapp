import { MapPin, Thermometer, Droplets, Wind, TrendingUp, Activity, Sprout, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-b-3xl shadow-lg p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/90 text-sm font-medium mb-1">Welcome back,</p>
            <h1 className="text-white text-2xl font-bold">Ramesh Kumar</h1>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Sprout className="w-7 h-7 text-[#2E7D32]" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-white/90">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="text-lg">Haveri District, Karnataka</span>
        </div>
      </div>

      <div className="px-4 -mt-4">
        {/* Weather Summary Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Today's Weather</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Thermometer className="w-8 h-8 text-[#F9A825] mb-2" />
              <p className="text-2xl font-bold text-gray-800">32°C</p>
              <p className="text-xs text-gray-500">Temperature</p>
            </div>
            <div className="flex flex-col items-center">
              <Droplets className="w-8 h-8 text-[#2196F3] mb-2" />
              <p className="text-2xl font-bold text-gray-800">65%</p>
              <p className="text-xs text-gray-500">Humidity</p>
            </div>
            <div className="flex flex-col items-center">
              <Wind className="w-8 h-8 text-[#66BB6A] mb-2" />
              <p className="text-2xl font-bold text-gray-800">12km/h</p>
              <p className="text-xs text-gray-500">Wind Speed</p>
            </div>
          </div>
        </div>

        {/* Crop Health Status */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Crop Health Status</h2>
            <Activity className="w-6 h-6 text-[#2E7D32]" />
          </div>
          
          {/* NDVI Indicator */}
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-xl p-4 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm mb-1">NDVI Index</p>
                <p className="text-white text-3xl font-bold">0.75</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="ml-3 text-white font-bold">Healthy</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Your crops are showing excellent health. Continue current practices.
          </p>
        </div>

        {/* Irrigation Alert */}
        <div className="bg-gradient-to-r from-[#FFA726] to-[#FFB74D] rounded-2xl shadow-md p-5 mb-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <Droplets className="w-7 h-7 text-[#F9A825]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">Irrigation Needed Today</h3>
              <p className="text-white/90 text-sm">
                Soil moisture is below optimal level. Water your crops in the evening.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-3 px-1">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate("/app/map")}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#A5D6A7] rounded-xl flex items-center justify-center mb-3">
                <MapPin className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <p className="font-bold text-gray-800">View Map</p>
            </button>

            <button
              onClick={() => navigate("/app/insights")}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#A5D6A7] rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <p className="font-bold text-gray-800">Insights</p>
            </button>

            <button
              onClick={() => navigate("/app/advisory")}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#A5D6A7] rounded-xl flex items-center justify-center mb-3">
                <Sprout className="w-7 h-7 text-[#2E7D32]" />
              </div>
              <p className="font-bold text-gray-800">Advisory</p>
            </button>

            <button
              onClick={() => navigate("/app/alerts")}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#FFE0B2] rounded-xl flex items-center justify-center mb-3">
                <AlertCircle className="w-7 h-7 text-[#F9A825]" />
              </div>
              <p className="font-bold text-gray-800">Alerts</p>
              <span className="mt-1 px-2 py-0.5 bg-[#D32F2F] text-white text-xs font-bold rounded-full">
                2 New
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

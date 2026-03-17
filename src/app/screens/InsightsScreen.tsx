import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Droplets, TrendingDown, Activity, AlertTriangle } from "lucide-react";

const moistureData = [
  { day: "Mon", moisture: 65 },
  { day: "Tue", moisture: 58 },
  { day: "Wed", moisture: 52 },
  { day: "Thu", moisture: 48 },
  { day: "Fri", moisture: 45 },
  { day: "Sat", moisture: 42 },
  { day: "Sun", moisture: 38 },
];

const stressData = [
  { day: "Mon", stress: 12 },
  { day: "Tue", stress: 15 },
  { day: "Wed", stress: 18 },
  { day: "Thu", stress: 22 },
  { day: "Fri", stress: 28 },
  { day: "Sat", stress: 32 },
  { day: "Sun", stress: 35 },
];

export function InsightsScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-b-3xl shadow-lg p-6">
        <h1 className="text-white text-2xl font-bold mb-2">Insights & Analytics</h1>
        <p className="text-white/90 text-sm">7-day trend analysis</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Soil Moisture */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-xl flex items-center justify-center mr-3">
                <Droplets className="w-7 h-7 text-[#2196F3]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Soil Moisture</h2>
                <p className="text-sm text-gray-500">Weekly trend</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-800">38%</p>
              <p className="text-xs text-[#D32F2F] font-semibold flex items-center justify-end">
                <TrendingDown className="w-4 h-4 mr-1" />
                Low
              </p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={moistureData}>
              <defs>
                <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2196F3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2196F3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="day" 
                tick={{ fontSize: 12, fill: '#666' }}
                stroke="#999"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#666' }}
                stroke="#999"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
              <Area
                type="monotone"
                dataKey="moisture"
                stroke="#2196F3"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorMoisture)"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-4 p-3 bg-[#FFF3E0] rounded-xl flex items-start">
            <AlertTriangle className="w-5 h-5 text-[#F9A825] mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Soil moisture is declining. Irrigation recommended within 24 hours.
            </p>
          </div>
        </div>

        {/* Groundwater Estimation */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Groundwater Level</h2>
              <p className="text-sm text-gray-500">Estimated depth</p>
            </div>
            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center">
              <Droplets className="w-8 h-8 text-[#4CAF50]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E3F2FD] rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Current Depth</p>
              <p className="text-2xl font-bold text-[#2196F3]">12.5 m</p>
            </div>
            <div className="bg-[#E8F5E9] rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p className="text-2xl font-bold text-[#4CAF50]">Good</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Shallow</span>
              <span>Deep</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#4CAF50] to-[#66BB6A]" style={{ width: "45%" }}></div>
            </div>
          </div>
        </div>

        {/* Crop Stress Index */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#FFEBEE] rounded-xl flex items-center justify-center mr-3">
                <Activity className="w-7 h-7 text-[#F44336]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Crop Stress Index</h2>
                <p className="text-sm text-gray-500">Increasing trend</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-800">35%</p>
              <p className="text-xs text-[#F9A825] font-semibold">Moderate</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={stressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="day" 
                tick={{ fontSize: 12, fill: '#666' }}
                stroke="#999"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#666' }}
                stroke="#999"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
              />
              <Bar dataKey="stress" fill="#FF9800" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-[#4CAF50] rounded-full mx-auto mb-1"></div>
              <p className="text-xs text-gray-600">Low</p>
              <p className="text-sm font-bold text-gray-800">0-20%</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-[#FFA726] rounded-full mx-auto mb-1"></div>
              <p className="text-xs text-gray-600">Moderate</p>
              <p className="text-sm font-bold text-gray-800">21-50%</p>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-[#F44336] rounded-full mx-auto mb-1"></div>
              <p className="text-xs text-gray-600">High</p>
              <p className="text-sm font-bold text-gray-800">51-100%</p>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-2xl shadow-md p-5 text-white">
          <h3 className="font-bold text-lg mb-3">Weekly Summary</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Soil moisture dropped 27% this week - irrigation needed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Crop stress increased due to high temperatures</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Groundwater levels are stable and sufficient</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

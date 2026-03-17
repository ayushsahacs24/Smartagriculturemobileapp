import { CloudRain, Thermometer, Droplets, Wind, AlertTriangle, CheckCircle } from "lucide-react";

interface Alert {
  id: number;
  type: "weather" | "crop";
  severity: "high" | "medium" | "low";
  title: string;
  message: string;
  time: string;
  icon: React.ComponentType<any>;
  read: boolean;
}

const alerts: Alert[] = [
  {
    id: 1,
    type: "weather",
    severity: "high",
    title: "Heavy Rainfall Alert",
    message: "Heavy rain expected in next 24-48 hours. Avoid irrigation and protect crops from waterlogging.",
    time: "2 hours ago",
    icon: CloudRain,
    read: false,
  },
  {
    id: 2,
    type: "crop",
    severity: "high",
    title: "Low Soil Moisture",
    message: "Soil moisture has dropped to critical level (38%). Immediate irrigation recommended.",
    time: "5 hours ago",
    icon: Droplets,
    read: false,
  },
  {
    id: 3,
    type: "weather",
    severity: "medium",
    title: "High Temperature Warning",
    message: "Temperature expected to reach 38°C tomorrow. Monitor crops for heat stress.",
    time: "1 day ago",
    icon: Thermometer,
    read: true,
  },
  {
    id: 4,
    type: "crop",
    severity: "medium",
    title: "Crop Stress Detected",
    message: "NDVI analysis shows moderate stress in northwest section of farm.",
    time: "2 days ago",
    icon: AlertTriangle,
    read: true,
  },
  {
    id: 5,
    type: "weather",
    severity: "low",
    title: "Favorable Conditions",
    message: "Weather conditions are optimal for crop growth this week.",
    time: "3 days ago",
    icon: CheckCircle,
    read: true,
  },
];

export function AlertsScreen() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-[#FFEBEE] border-[#F44336]";
      case "medium":
        return "bg-[#FFF3E0] border-[#FF9800]";
      case "low":
        return "bg-[#E8F5E9] border-[#4CAF50]";
      default:
        return "bg-gray-50 border-gray-300";
    }
  };

  const getSeverityIconColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-[#F44336]";
      case "medium":
        return "text-[#FF9800]";
      case "low":
        return "text-[#4CAF50]";
      default:
        return "text-gray-500";
    }
  };

  const unreadCount = alerts.filter(a => !a.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-b-3xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">Alerts & Warnings</h1>
            <p className="text-white/90 text-sm">Stay informed about your farm</p>
          </div>
          {unreadCount > 0 && (
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#2E7D32] text-lg font-bold">{unreadCount}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="flex-1 py-2 px-4 bg-[#2E7D32] text-white font-bold rounded-xl">
            All Alerts
          </button>
          <button className="flex-1 py-2 px-4 bg-white text-gray-700 font-bold rounded-xl">
            Weather
          </button>
          <button className="flex-1 py-2 px-4 bg-white text-gray-700 font-bold rounded-xl">
            Crops
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`rounded-2xl shadow-md p-4 border-l-4 ${getSeverityColor(
                  alert.severity
                )} ${!alert.read ? "border-l-4" : ""}`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${alert.severity === 'low' ? 'bg-white' : 'bg-white/70'} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${getSeverityIconColor(alert.severity)}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-gray-800">{alert.title}</h3>
                      {!alert.read && (
                        <div className="w-2 h-2 bg-[#F44336] rounded-full flex-shrink-0 mt-1.5"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{alert.time}</span>
                      <div className="flex gap-2">
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            alert.type === "weather"
                              ? "bg-[#E3F2FD] text-[#1976D2]"
                              : "bg-[#E8F5E9] text-[#2E7D32]"
                          }`}
                        >
                          {alert.type === "weather" ? "Weather" : "Crop"}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            alert.severity === "high"
                              ? "bg-[#F44336] text-white"
                              : alert.severity === "medium"
                              ? "bg-[#FF9800] text-white"
                              : "bg-[#4CAF50] text-white"
                          }`}
                        >
                          {alert.severity.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-2xl shadow-md p-5 text-white">
          <div className="flex items-start">
            <Wind className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold mb-2">Alert Notifications</h3>
              <p className="text-sm text-white/90">
                You will receive real-time alerts for weather changes, crop health issues, and irrigation needs. Enable notifications for instant updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { User, MapPin, Wheat, Phone, Globe, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react";

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-b-3xl shadow-lg p-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Profile</h1>
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <Settings className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex items-center">
          <div className="w-20 h-20 bg-[#A5D6A7] rounded-full flex items-center justify-center mr-4">
            <User className="w-10 h-10 text-[#2E7D32]" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">Ramesh Kumar</h2>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              <Phone className="w-4 h-4 mr-1" />
              +91 98765 43210
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6">
        {/* Farm Details */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Farm Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-semibold text-gray-800">Haveri District, Karnataka</p>
                <p className="text-sm text-gray-600">Village: Shiggaon</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center mr-3">
                <Wheat className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Farm Size</p>
                <p className="font-semibold text-gray-800">5.2 Acres</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center mr-3">
                <Wheat className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Current Crops</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-3 py-1 bg-[#A5D6A7] text-[#2E7D32] text-sm font-semibold rounded-full">
                    Cotton
                  </span>
                  <span className="px-3 py-1 bg-[#A5D6A7] text-[#2E7D32] text-sm font-semibold rounded-full">
                    Groundnut
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <p className="text-2xl font-bold text-[#2E7D32]">156</p>
            <p className="text-xs text-gray-600 mt-1">Days Monitored</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <p className="text-2xl font-bold text-[#2E7D32]">0.75</p>
            <p className="text-xs text-gray-600 mt-1">Avg NDVI</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <p className="text-2xl font-bold text-[#2E7D32]">23</p>
            <p className="text-xs text-gray-600 mt-1">Alerts Received</p>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white rounded-2xl shadow-md mb-4">
          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors">
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-gray-600 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Language</p>
                <p className="text-sm text-gray-500">English</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-md mb-4">
          <button className="w-full p-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-semibold text-gray-800">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 rounded-b-2xl transition-colors">
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-semibold text-gray-800">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Logout */}
        <button className="w-full bg-white rounded-2xl shadow-md p-4 flex items-center justify-center hover:bg-gray-50 transition-colors mb-4">
          <LogOut className="w-5 h-5 text-[#D32F2F] mr-2" />
          <span className="font-semibold text-[#D32F2F]">Logout</span>
        </button>

        {/* App Info */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">AgriSense v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">Smart Farming with Satellite Insights</p>
        </div>
      </div>
    </div>
  );
}

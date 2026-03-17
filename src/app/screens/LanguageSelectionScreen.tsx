import { useState } from "react";
import { useNavigate } from "react-router";
import { Sprout, Check, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function LanguageSelectionScreen() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");

  const languages = [
    { id: "english", name: "English", nativeName: "English" },
    { id: "hindi", name: "Hindi", nativeName: "हिंदी" },
    { id: "kannada", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  ];

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      setShowOTP(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      navigate("/app");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E7D32] to-[#66BB6A] flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-center mb-12 mt-8">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mr-3">
          <Sprout className="w-10 h-10 text-[#2E7D32]" />
        </div>
        <h1 className="text-3xl font-bold text-white">AgriSense</h1>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex-1 max-w-md w-full mx-auto">
        {/* Language Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Language</h2>
          <p className="text-gray-600 mb-6">भाषा चुनें / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ</p>

          <div className="space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                  selectedLanguage === lang.id
                    ? "border-[#2E7D32] bg-[#A5D6A7]/20"
                    : "border-gray-200 hover:border-[#66BB6A]"
                }`}
              >
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-800">{lang.nativeName}</div>
                  <div className="text-sm text-gray-500">{lang.name}</div>
                </div>
                {selectedLanguage === lang.id && (
                  <Check className="w-6 h-6 text-[#2E7D32]" strokeWidth={3} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Login Section */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Login with Mobile</h2>
          <p className="text-gray-600 mb-6">Enter your phone number for OTP</p>

          {!showOTP ? (
            <div className="space-y-4">
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-12 h-14 text-lg border-2 rounded-xl"
                />
              </div>
              <Button
                onClick={handleSendOTP}
                disabled={phoneNumber.length !== 10}
                className="w-full h-14 text-lg bg-[#2E7D32] hover:bg-[#1B5E20] rounded-xl"
              >
                Send OTP
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  OTP sent to +91 {phoneNumber}
                </p>
                <Input
                  type="tel"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="h-14 text-lg text-center tracking-widest border-2 rounded-xl"
                  maxLength={6}
                />
              </div>
              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6}
                className="w-full h-14 text-lg bg-[#2E7D32] hover:bg-[#1B5E20] rounded-xl"
              >
                Verify & Continue
              </Button>
              <button
                onClick={() => setShowOTP(false)}
                className="w-full text-[#2E7D32] font-semibold"
              >
                Change Number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Mic } from "lucide-react";
import { useState } from "react";

export function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceClick = () => {
    setIsListening(!isListening);
    
    // Simulate voice listening
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
      }, 3000);
    }
  };

  return (
    <button
      onClick={handleVoiceClick}
      className={`fixed bottom-24 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all z-50 ${
        isListening
          ? "bg-[#D32F2F] animate-pulse"
          : "bg-[#2E7D32] hover:bg-[#1B5E20]"
      }`}
    >
      <Mic className="w-8 h-8 text-white" />
    </button>
  );
}

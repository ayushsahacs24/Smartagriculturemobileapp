import { useState } from "react";
import { MapPin, Layers, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export function MapScreen() {
  const [activeLayer, setActiveLayer] = useState<"ndvi" | "moisture" | "temperature">("ndvi");
  const [zoomLevel, setZoomLevel] = useState(1);

  const layers = [
    { id: "ndvi" as const, name: "NDVI", color: "bg-[#4CAF50]" },
    { id: "moisture" as const, name: "Moisture", color: "bg-[#2196F3]" },
    { id: "temperature" as const, name: "Temperature", color: "bg-[#F9A825]" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-[#2E7D32] mr-2" />
            <h1 className="text-xl font-bold text-gray-800">Satellite Map</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Maximize2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-[calc(100vh-240px)]">
        {/* Mock Satellite Map */}
        <div 
          className="w-full h-full bg-gradient-to-br from-[#A5D6A7] via-[#66BB6A] to-[#2E7D32] relative overflow-hidden"
          style={{ transform: `scale(${zoomLevel})`, transition: "transform 0.3s" }}
        >
          {/* Farm Boundary */}
          <div className="absolute inset-0 p-12">
            <div className="relative w-full h-full border-4 border-white border-dashed rounded-3xl">
              {/* Health Indicators based on active layer */}
              {activeLayer === "ndvi" && (
                <>
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[#4CAF50] rounded-full opacity-70"></div>
                  <div className="absolute top-1/3 right-16 w-40 h-40 bg-[#66BB6A] rounded-full opacity-70"></div>
                  <div className="absolute bottom-16 left-1/4 w-36 h-36 bg-[#8BC34A] rounded-full opacity-70"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FFEB3B] rounded-full opacity-60"></div>
                </>
              )}
              {activeLayer === "moisture" && (
                <>
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[#2196F3] rounded-full opacity-70"></div>
                  <div className="absolute top-1/3 right-16 w-40 h-40 bg-[#03A9F4] rounded-full opacity-70"></div>
                  <div className="absolute bottom-16 left-1/4 w-36 h-36 bg-[#00BCD4] rounded-full opacity-70"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FFB74D] rounded-full opacity-60"></div>
                </>
              )}
              {activeLayer === "temperature" && (
                <>
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF9800] rounded-full opacity-70"></div>
                  <div className="absolute top-1/3 right-16 w-40 h-40 bg-[#FFA726] rounded-full opacity-70"></div>
                  <div className="absolute bottom-16 left-1/4 w-36 h-36 bg-[#FFB74D] rounded-full opacity-70"></div>
                  <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5722] rounded-full opacity-60"></div>
                </>
              )}
            </div>
          </div>

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-10 h-10 text-white drop-shadow-lg" fill="white" />
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.2))}
            className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ZoomIn className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.2))}
            className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ZoomOut className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-center mb-2">
            <Layers className="w-5 h-5 text-gray-700 mr-2" />
            <p className="font-bold text-sm text-gray-800">Legend</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-xs">
              <div className="w-4 h-4 bg-[#4CAF50] rounded mr-2"></div>
              <span className="text-gray-700">Healthy</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-4 h-4 bg-[#FFEB3B] rounded mr-2"></div>
              <span className="text-gray-700">Moderate</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-4 h-4 bg-[#FF5722] rounded mr-2"></div>
              <span className="text-gray-700">Stress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Toggle */}
      <div className="bg-white border-t border-gray-200 p-4">
        <p className="text-sm font-bold text-gray-700 mb-3">Select Layer</p>
        <div className="flex gap-2">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all ${
                activeLayer === layer.id
                  ? `${layer.color} text-white shadow-md`
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {layer.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

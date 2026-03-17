import { createBrowserRouter } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { LanguageSelectionScreen } from "./screens/LanguageSelectionScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { MapScreen } from "./screens/MapScreen";
import { InsightsScreen } from "./screens/InsightsScreen";
import { AlertsScreen } from "./screens/AlertsScreen";
import { AdvisoryScreen } from "./screens/AdvisoryScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { MainLayout } from "./components/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/language",
    element: <LanguageSelectionScreen />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "map", element: <MapScreen /> },
      { path: "insights", element: <InsightsScreen /> },
      { path: "alerts", element: <AlertsScreen /> },
      { path: "advisory", element: <AdvisoryScreen /> },
      { path: "profile", element: <ProfileScreen /> },
    ],
  },
]);

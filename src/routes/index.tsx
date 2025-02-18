import { Routes, Route } from "react-router-dom";
import { HomePage } from "../shared/components/home-page";
import { DashboardPage } from "../shared/components/dashboard-page";
import { SettingsPage } from "../shared/components/settings-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

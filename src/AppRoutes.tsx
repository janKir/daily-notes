import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./components/main/MainPage";
import { SettingsPage } from "./components/settings/SettingsPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

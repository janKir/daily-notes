import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotesPage } from "./components/notes/NotesPage";
import { SettingsPage } from "./components/settings/SettingsPage";
import { TrackingPage } from "./components/tracking/TrackingPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
